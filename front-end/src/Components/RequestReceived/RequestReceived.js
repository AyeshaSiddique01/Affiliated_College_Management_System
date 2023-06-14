import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './requestReceived.css';

const RequestReceived = () => {

  const [getData, setData] = useState([]);
  const [shouldDisplayDiv, setDisplay] = useState(false);
  const [selection, setSelection] = useState('');
  const { state } = useLocation();
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('access_token');
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
  };
  const handleAccept = () => {
    setSelection('accept');
    sendSelection('accept');
  };

  const handleReject = () => {
    setSelection('reject');
    sendSelection('reject');
  };
  const sendSelection = async (selectedOption) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/UpdateStatus', { Id: state.data.id, type: state.data.type, selection: selectedOption }, { headers: headers });
      console.log(response.data);
      navigate("/home")
    } catch (error) { }
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
  // if (state.data.type === "Practical Exam") {
  //   setDisplay(true);
  // } else {
  //   setDisplay(true);
  // }
  if (!accessToken) {
    return navigate("/"); // Render the Login component if access token doesn't exist
  }

  return (
    <>
      <Navbar></Navbar>
      <div className='My-body7'>
        <div className='container'>
          <div className="row RequestheaderRR">
            <div className="courseTitleRR col-9">
              {getData[4]} {getData[5]}
              <br></br>
              <div className="requestdateRR col-3">
                {getData[2]}
              </div>
            </div>
            <div className="deadlineRR col-3">
              {getData[1]}
            </div>
          </div>
          <div className="row">
            <div className="requestBodyRR">
              <div className="bookRecomended">
                <label className='outlineTitleRR'>Book recomended: </label>
                {getData[6]}
              </div>
              <div className="CourseOutlineRR">
                <label className='outlineTitleRR'>Outline:</label>
                {getData[7]}
              </div>
              {shouldDisplayDiv && <div className="CourseOutlineRR" id='venu'>
                <label className='outlineTitleRR'>Venu:</label>
                Practicle is at {getData[0]}, {getData[3]} in college {getData[8]}, {getData[9]}
              </div>}
            </div>
          </div>
          <div className="requestFooterRR">
            <div type='accept' className='AcceptBtn' onClick={handleAccept}>Accept</div>
            <div type='accept' className='RejectBtn' onClick={handleReject}>Reject</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RequestReceived