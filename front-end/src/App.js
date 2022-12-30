import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";  //npm i react-router-dom 
import { Switch } from '@mui/material';
import './App.css';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import SignupPersonalInfo from './Components/SignupPersonalInfo';
import SignupExaminerInfo from './Components/SignupExaminerInfo';
import ExaminerQualification from './Components/ExaminerQualification';
import ExaminerExp from './Components/ExaminerExp';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      {/* <Login /> */}
      {/* <SignupPersonalInfo /> */}
      {/* <SignupExaminerInfo /> */}
      <ExaminerQualification />
      {/* <Sidebar /> */}
      {/* <Router>
          <Switch>
              <Route exact path="" 
                  component={Login} />

              <Route exact path="/SignupPersonalInfo" 
                  component={SignupPersonalInfo} />

              <Route exact path="/SignupExaminerInfo" 
                  component={SignupExaminerInfo} />

              <Route exact path="/ExaminerQualification" 
                  component={ExaminerQualification} />

              <Route exact path="/ExaminerExp" 
                  component={ExaminerExp} />

              <Route exact path="/Profile" 
                  component={Profile} />
          </Switch>
      </Router> */}
    </div>
  );
}

export default App;
