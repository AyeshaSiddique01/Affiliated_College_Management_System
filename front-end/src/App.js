// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  //npm i react-router-dom 

import DuePaper from './Components/DuePaper/DuePaper';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Notifications from './Components/Notifications/Notifications';
import RequestReceived from './Components/RequestReceived/RequestReceived';
import ResultPending from './Components/ResultPending/ResultPending';
import Settings from './Components/Settings/Settings';
import SignupExaminerInfo from './Components/SignupExaminerInfo/SignupExaminerInfo';
import SignupPersonalInfo from './Components/SignupPersonalInfo/SignupPersonalInfo';
import UploadPaper from './Components/UploadPaper/UploadPaper';
import UploadResult from './Components/UploadResult/UploadResult';
import ExaminerExp from './Components/ExaminerExp';
import ExaminerQualification from './Components/ExaminerQualification';
import Profile from './Components/Profile';
import 'boxicons'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/SignupPersonalInfo" element={<SignupPersonalInfo />} />
            <Route path="/SignupExaminerInfo" element={<SignupExaminerInfo />} />
            <Route path="/ExaminerQualification" element={<ExaminerQualification />} />
            <Route path="/ExaminerExp" element={<ExaminerExp />} />
            <Route path="/UploadPaper" element={<UploadPaper />} />
            <Route path="/RequestRecieved" element={<RequestReceived />} />
            <Route path="/Notifications" element={<Notifications />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/DuePaper" element={<DuePaper />} />
            <Route path="/ResultPending" element={<ResultPending />} />
            <Route path="/UploadResult" element={<UploadResult />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes >
      </Router>
    </div>
  );
}

// function App() {
//   return (
//     <Router>
//       <Navbar />
//           <Route exact path="/" component={Login} />
//           <Route path="/SignupPersonalInfo" component={SignupPersonalInfo} />
//           <Route path="/SignupExaminerInfo" component={SignupExaminerInfo} />
//           <Route path="/ExaminerQualification" component={ExaminerQualification} />
//           <Route path="/ExaminerExp" component={ExaminerExp} />
//           <Route path="/UploadPaper" component={UploadPaper} />
//           <Route path="/RequestRecieved" component={RequestReceived} />
//           <Route path="/Notifications" component={Notifications} />
//           <Route path="/Profile" component={Profile} />
//           <Route path="/Home" component={Home} />
//           <Route path="/DuePaper" component={Home} />
//           <Route path="/ResultPending" component={Home} />
//           <Route path="/UploadResult" component={UploadResult} />
//       </Router >
//   );
// }

export default App