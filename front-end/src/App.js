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
import RequestsAccepted from './Components/RequestsAccepted'

function App() {
  return (
    <div className="App">    
    <RequestsAccepted/>  
    {/* <Router>
      <Sidebar>
         <Routes>
          <Route path="/" element={<RequestsAccepted/>} />
        </Routes> 
      </Sidebar>
    </Router>       */}
    </div>
  );
}

export default App
