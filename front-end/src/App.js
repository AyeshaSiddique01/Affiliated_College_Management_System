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
import UploadPaper from './Components/UploadPaper'
import UploadResult from './Components/UploadResult'
import Home from './Components/Home';
import Navbar from './Components/Navbar'
import DuePaper from './Components/DuePaper';
import ResultPending from './Components/ResultPending';
import Settings from './Components/Settings';
import 'boxicons'

function App() {
  return (
    <div className="App"> 
    <UploadPaper></UploadPaper>
    {/* <Settings></Settings> */}
    {/* <Router>
      <Navbar>
         <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/SignupPersonalInfo" element={<SignupPersonalInfo/>} />
          <Route path="/SignupExaminerInfo" element={<SignupExaminerInfo/>} />
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
      </Navbar>
    </Router>       */}
     {/* <Router>
      <Navbar>
         <Routes>
          <Route path="/Home" component={Home} />
          <Route path="/Notifications" component={Notifications} />
          <Route path="/DuePaper" component={DuePaper} />
          <Route path="/ResultPending" component={ResultPending} />
          <Route path="/Profile" component={Profile} />
          <Route path="/SignupPersonalInfo" component={SignupPersonalInfo} />
          <Route path="/Settings" component={Settings} />
          <Route path="/SignupExaminerInfo" component={SignupExaminerInfo} />
          <Route path="/Login" component={Login} />
        </Routes> 
      </Navbar>
    </Router> */}
    </div>
  );
}

export default App