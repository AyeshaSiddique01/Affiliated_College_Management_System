import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './settings.css';
import '../ExaminerInterest/ExaminerInterest.css';

function Settings() {
  const [usr_name, setUserName] = useState('');
  const [usr_cnic, setCNIC] = useState('');
  const [usr_email, setEmail] = useState('');
  const [usr_address, setAddress] = useState('');
  const [usr_bio, setBio] = useState('');
  const [usr_gender, setGender] = useState('');
  const [usr_password, setPassword] = useState('');
  const [usr_phone, setPhone] = useState('');
  const [errorP, setErrorP] = useState('');

  const [dataList, setDataList] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [errorI, setErrorI] = useState('');
  const [textInput, setTextInput] = useState('');
  const [userDetails, setUserDetails] = useState({});

  const navigate = useNavigate();

  const accessToken = localStorage.getItem('access_token');
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
  };
  const handleEditPersonal = async (e) => {
    console.log("usr_address: ", usr_address);
    e.preventDefault();
    // try {
    //   const response = await axios.post('http://127.0.0.1:5000/SignUpPersonalInfo',
    //     { usr_name, usr_cnic, usr_email, usr_address, usr_bio, usr_gender, usr_password, usr_phone });

    //   if (response.data["status"] === "fail") {
    //     setErrorP(response.data["message"]);
    //   } else {        
    //     navigate("/SignupExaminerInfo")
    //   }
    // } catch (error) {
    //   console.error("error: ", error);
    //   setErrorP(error);
    // }
  };

  useEffect(() => {
    fetchCourses();
    getData();git 
    if (!accessToken) {
      return navigate("/"); // Render the Login component if access token doesn't exist
    }
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/profile', { headers: headers });
      setUserDetails(response.data)
      console.log("response-----------", response);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/AllCourses', { headers: headers });
      setDataList(response.data);
    } catch (error) {

    }
  };
  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    setTextInput((prevText) => prevText + ", " + selectedOption);
  };
  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };
  const handleSubmitInterest = async (event) => {
    event.preventDefault();
    console.log(textInput)
    try {
      const response = await axios.post('http://127.0.0.1:5000/UpdateExaminerCourse', { data: textInput }, { headers: headers });
      setErrorI(response.data["message"]);
    } catch (error) {
      console.error("error: ", error);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="settings_body">
        <h1>Settings</h1>
        <h2>Personal Information</h2>
        <div className="PersonalForm">
          <form onSubmit={handleEditPersonal}>
            <div className="PersonalEditForm">
              <span className="label_">User Name: </span>
              <input type="text" className="PersonalEditInput" placeholder='Enter User Name' name='name_' value={userDetails["personal_details"]["usr_name"]} onChange={(e) => setUserName(e.target.value)} required />
            </div>
            <div className="PersonalEditForm">
              <span className="label_">Email Address: </span>
              <input type="email" className="PersonalEditInput" placeholder='Enter Email Address' name='email' value={userDetails["personal_details"]["usr_email"]} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="PersonalEditForm">
              <span className="label_">CNIC: </span>
              <input type="text" className="PersonalEditInput" placeholder='Enter CNIC (00000-0000000-0)' name='cnic' value={userDetails["personal_details"]["usr_cnic"]} onChange={(e) => setCNIC(e.target.value)} required />
            </div>
            <div className="PersonalEditForm">
              <span className="label_">Phone Number: </span>
              <input type="text" className="PersonalEditInput" placeholder='Enter Phone Number (+92 0000000000)' name='phone' value={userDetails["personal_details"]["usr_phoneno"]} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div className="PersonalEditForm">
              <span className="label_">Address: </span>
              <input type="text" className="PersonalEditInput" placeholder='Enter Address' name='address' value={userDetails["personal_details"]["usr_address"]} onChange={(e) => setAddress(e.target.value)} required />
            </div>
            <div className="PersonalEditForm">
              <span className="label_">Gender: </span>
              {/* <span style={{ width: "fit-content" }} className="PersonalEditInput" > Gender: </span> */}
              <select className="form-label designLable" name="gender" value={userDetails["personal_details"]["usr_gender"]} onChange={(e) => setGender(e.target.value)} required >
                <option value="Select">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not prefer to say">Not prefer to say</option>
              </select>
            </div>
            <div className="PersonalEditForm">
              <span className="label_">Bio: </span>
              <input type="text" className="PersonalEditInput" placeholder='Enter Bio' name='bio' value={userDetails["personal_details"]["usr_bio"]} onChange={(e) => setBio(e.target.value)} required />
            </div>
            {/* <div className="PersonalEditForm">
              <span className="fa fa-lock"></span>
              <input type="password" id='pass' className="PersonalEditInput" placeholder='Enter Password' name='password' value={userDetails["personal_details"][""]} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="PersonalEditForm">
              <span className="fa fa-lock"></span>
              <input type="password" id='passC' className="PersonalEditInput" placeholder='Confirm Password' value={userDetails["personal_details"][""]} required />
            </div>
            <span id="messageError"></span> */}
            <div style={{ textAlign: "right" }}>
              <button type="submit" className="PersonalEditSubmitt" >Update data</button>
            </div>
            <div>
              {errorP && <div style={{ color: "#cc4444" }}>{errorP}</div>}
            </div>
          </form>
        </div>
        <h2>Interests</h2>
        <div className="PersonalForm">
          <div className='option_'>
            <form onSubmit={handleSubmitInterest}>
              <select value={selectedOption} onChange={handleOptionChange}>
                <option value="">Select an option</option>
                {dataList.map((item, index) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
              <br />
              <input className='input-box' type="text" value={textInput} onChange={handleTextChange} readOnly />
              <br />
              <div style={{ textAlign: "right" }}>
                <button type="submit" className="PersonalEditSubmitt" >Update Courses</button>
              </div>
              <div>
                {errorI && <div style={{ color: "#cc4444" }}>{errorI}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}

export default Settings;