import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { useNavigate, useLocation } from 'react-router-dom';
import './uploadResult.css';

const UploadResult = () => {
    const [getData, setData] = useState([]);
    const [shouldDisplayDiv, setDisplay] = useState(false);
    const [message, setMessage] = useState('');
    const fileInputRef = useRef(null);
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
    const handleResultUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('result', fileInputRef.current.files[0]);
        formData.append('Id', state.data.id)
        formData.append('type', state.data.type)
        try {
            const response = await axios.post('http://127.0.0.1:5000/GetResult', formData, { headers: headers });
            console.log(response)
            // Redirect the user to the protected route
            setMessage(response.data["message"]);
            return navigate('/UploadResult')
        } catch (error) {
            console.error("error: ", error);
            setMessage(error)
        }
    };
    if (!accessToken) {
        return navigate('/'); // Render the Login component if access token doesn't exist
    }
    return (
        <>
            <Navbar></Navbar>
            <div className='My-body6'>
                <div className='container'>
                    <div className="row RequestheaderUR">
                        <div className="courseTitleUR col-9">
                            {getData[4]} {getData[5]}
                            <br></br>
                            <div className="requestdateUR col-3">
                                {getData[2]}
                            </div>
                        </div>
                        <div className="deadlineUR col-3">
                            {getData[1]}
                        </div>
                    </div>
                    <div className="row requestBodyUR">
                        <div className="col-8">
                            <div className="bookRecomended">
                                <label className='outlineTitleUR'>Book recomended: </label>
                                {getData[6]}
                            </div>
                            <div className="CourseOutline">
                                <label className='outlineTitleUR'>Outline:</label>
                                {getData[7]}
                            </div>
                            {shouldDisplayDiv && <div className="CourseOutlineRR" id='venu'>
                                <label className='outlineTitleRR'>Venu:</label>
                                Practicle is at {getData[0]}, {getData[3]} in college {getData[8]}, {getData[9]}
                            </div>}
                        </div>
                        <div className="col-4 uploadResultUP" style={{ marginTop: "10px" }}>
                            <form onSubmit={handleResultUpload}>
                                <input type="file" name="Result" className="form-controlUP" ref={fileInputRef} required />
                                <button type="submit" className="submit-btnUP" >Upload Result</button>
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

export default UploadResult