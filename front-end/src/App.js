import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";  //npm i react-router-dom 
import './App.css';
// import DuePaper from './Components/DuePaper/DuePaper';
// import Home from './Components/Home/Home';
// import Login from './Components/Login/Login';
// import Navbar from './Components/Navbar/Navbar';
// import Notifications from './Components/Notifications/Notifications';
// import RequestReceived from './Components/RequestReceived/RequestReceived';
import ResultPending from './Components/ResultPending/ResultPending';
// import Settings from './Components/Settings/Settings';
// import SignupExaminerInfo from './Components/SignupExaminerInfo/SignupExaminerInfo';
// import SignupPersonalInfo from './Components/SignupPersonalInfo/SignupPersonalInfo';
// import UploadPaper from './Components/UploadPaper/UploadPaper';
// import UploadResult from './Components/UploadResult/UploadResult';
// import ExaminerExp from './Components/ExaminerExp';
// import ExaminerQualification from './Components/ExaminerQualification';
// import Profile from './Components/Profile';
// import Sidebar from './Components/Sidebar';
import 'boxicons'

function App() {
  return (
    <div className="App"> 
    {/* <UploadPaper></UploadPaper> */}
    {/* <Settings></Settings> */}
    {/* <Home></Home> */}
    {/* <DuePaper></DuePaper> */}
    {/* <Navbar></Navbar> */}
    {/* <RequestReceived></RequestReceived> */}
    <ResultPending></ResultPending>
    {/* <Router>
      <Navbar>
         <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/SignupPersonalInfo" element={<SignupPersonalInfo/>} />
          <Route path="/SignupExaminerInfo" element={<SignupExaminerInfo/>} />
          <Route path="/ExaminerQualification" element={<ExaminerQualification/>} />
          <Route path="/ExaminerExp" element={<ExaminerExp/>} />
          <Route path="/UploadPaper" element={<UploadPaper/>} />
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