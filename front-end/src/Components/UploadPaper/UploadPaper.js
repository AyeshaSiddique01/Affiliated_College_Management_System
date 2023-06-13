import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { useNavigate, useLocation } from 'react-router-dom';
import './uploadPaper.css';

const UploadPaper = () => {
    const [getData, setData] = useState([]);
    const [shouldDisplayDiv, setDisplay] = useState(false);
    const fileInputRef = useRef(null);
    const [message, setMessage] = useState('');
    const accessToken = localStorage.getItem('access_token');
    const navigate = useNavigate();
    const { state } = useLocation();
    const headers = {
        'Authorization': `Bearer ${accessToken}`,
    };
    useEffect(() => {
        axios
            .post("http://127.0.0.1:5000/DutyDetails", { Id: state.data.id, type: state.data.type }, { headers: headers })
            .then((res) => {
                const resData = res.data;
                console.log(resData)
                setData(resData);
            })
            .catch((err) => console.log(err + "  OOPS! BAD REQUEST CC"));
    }, []);
    if (!accessToken) {
        return navigate('/'); // Render the Login component if access token doesn't exist
    }
    // if (state.data.type === "Practical Exam") {
    //   setDisplay(true);
    // } else {
    //   setDisplay(true);
    // }
    const handlePaperUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('Paper', fileInputRef.current.files[0]);
        formData.append('Id', state.data.id)
        formData.append('type', state.data.type)
        try {
            const response = await axios.post('http://127.0.0.1:5000/GetPaper', formData, { headers: headers });
            setMessage(response.data["message"]);
            // Redirect the user to the protected route
            return navigate('/UploadPaper')
        } catch (error) {
            console.error("error: ", error);
            setMessage(error)
        }
    };
    return (
        <>
            <Navbar></Navbar>
            <div className='My-body5'>
                <div className='container'>
                    <div className="row RequestheaderUP">
                        <div className="courseTitleUP col-9">
                            {getData[4]} {getData[5]}
                            <br></br>
                            <div className="requestdateUP col-3">
                                {getData[2]}
                            </div>
                        </div>
                        <div className="deadlineUP col-3">
                            {getData[1]}
                        </div>
                    </div>
                    <div className="row requestBodyUP">
                        <div className="col-8">
                            <div className="bookRecomended">
                                <label className='outlineTitleUP'>Book recomended: </label>
                                {getData[6]}
                            </div>
                            <div className="CourseOutlineUP">
                                <label className='outlineTitleUP'>Outline:</label>
                                {getData[7]}
                            </div>
                            {shouldDisplayDiv && <div className="CourseOutlineRR" id='venu'>
                                <label className='outlineTitleRR'>Venu:</label>
                                Practicle is at {getData[0]}, {getData[3]} in college {getData[8]}, {getData[9]}
                            </div>}
                        </div>
                        <div className="col-4 uploadPaperUP" style={{ marginTop: "10px" }}>
                            <form onSubmit={handlePaperUpload}>
                                <input type="file" name="Paper" className="form-controlUP" ref={fileInputRef} required />
                                <button type="submit" className="submit-btnUP" >Upload Paper</button>
                                <div>
                                    {message && <div>{message}</div>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadPaper