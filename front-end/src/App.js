import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import SignupPersonalInfo from './components/SignupPersonalInfo';
import SignupExaminerInfo from './components/SignupExaminerInfo';
import ExaminerQualification from './components/ExaminerQualification';
import ExaminerExp from './components/ExaminerExp';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      {/* <Router>
      <Sidebar>
         <Routes>
          <Route path="/" element={<> not found</>} />
        </Routes> 
      </Sidebar>
    </Router> */}
      {/* <Login /> */}
      {/* <SignupPersonalInfo /> */}
      {/* <SignupExaminerInfo /> */}
      <ExaminerQualification />
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
