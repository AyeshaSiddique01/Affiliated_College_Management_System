import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";  //npm i react-router-dom 
import './App.css';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import SignupPersonalInfo from './Components/SignupPersonalInfo';
import SignupExaminerInfo from './Components/SignupExaminerInfo';
import ExaminerQualification from './Components/ExaminerQualification';
import ExaminerExp from './Components/ExaminerExp';
import Profile from './Components/Profile';
import Notifications from './Components/Notifications'
import RequestRecieved from './Components/RequestRecieved'
import AcceptedRequest from './Components/AcceptedRequest'
import UploadResult from './Components/UploadPaper'
import Home from './Components/Home';

function App() {
  return (
    <div className="App"> 
    {/* <Login/> */}
    {/* <SignupPersonalInfo/> */}
    {/* <SignupExaminerInfo/> */}
    {/* <ExaminerQualification/> */}
    {/* <ExaminerExp/> */}
    <Router>
      <Sidebar>
         <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/SignupPersonalInfo" element={<SignupPersonalInfo/>} />
          {/* <Route path="/SignupExaminerInfo" element={<SignupExaminerInfo/>} /> */}
          <Route path="/ExaminerQualification" element={<ExaminerQualification/>} />
          <Route path="/ExaminerExp" element={<ExaminerExp/>} />
          <Route path="/AcceptedRequest" element={<AcceptedRequest/>} />
          <Route path="/RequestRecieved" element={<RequestRecieved/>} />
          <Route path="/Notifications" element={<Notifications/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/DuePaper" element={<Home/>} />
          <Route path="/ResultPending" element={<Home/>} />
          <Route path="/UploadResult" element={<UploadResult/>} />
        </Routes> 
      </Sidebar>
    </Router>      
    </div>
  );
}

export default App
