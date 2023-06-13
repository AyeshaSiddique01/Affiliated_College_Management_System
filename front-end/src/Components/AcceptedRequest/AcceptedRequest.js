import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './acceptedRequest.css';

const AcceptedRequest = () => {
    const [getData, setData] = useState([]);
    const [shouldDisplayDiv, setDisplay] = useState(false);
    const { state } = useLocation();
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('access_token');
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
        return navigate("/"); // Render the Login component if access token doesn't exist
    }
    return (
        <>
            <Navbar></Navbar>
            <div className='My-body8'>
                <div className='container'>
                    <div className="row RequestheaderAR">
                        <div className="courseTitleAR col-9">
                            {getData[4]} {getData[5]}
                            <br></br>
                            <div className="requestdateAR col-3">
                                {getData[2]}
                            </div>
                        </div>
                        <div className="deadlineAR col-3">
                            {getData[1]}
                        </div>
                    </div>
                    <div className="row requestBodyAR">
                        <div className="col-8">
                            <div className="bookRecomended">
                                <label className='outlineTitleAR'>Book recomended: </label>
                                {getData[6]}
                            </div>
                            <div className="CourseOutlineAR">
                                <label className='outlineTitleAR'>Outline:</label>
                                {getData[7]}
                            </div>
                            {shouldDisplayDiv && <div className="CourseOutlineRR" id='venu'>
                                <label className='outlineTitleRR'>Venu:</label>
                                Practicle is at {getData[0]}, {getData[3]} in college {getData[8]}, {getData[9]}
                            </div>}
                        </div>
                        <div className="col-4 uploadPaperAR" style={{ marginTop: "10px" }}>
                            <form action="http://localhost:5000//GetPaper" method='post' enctype="multipart/form-data">
                                <h3>The paper is not done yet!</h3>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AcceptedRequest