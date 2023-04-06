import React from 'react'
import ReactDOM from 'react-dom';
import './signupExaminerInfo.css'
const SignupExaminerInfo = () => {
  return (
    <div className='FormBg'>
      <div className='bg-img'>
        <div className="content" style={{ width: "510px" }}>
          <header type="EI">Examiner Information</header>
          <form action="http://localhost:5000//SignUpExaminerInfo" method='post' enctype="multipart/form-data">
            <div className="maindiv">
              <span></span>
              <input type="text" className="input-box" placeholder='Enter Your Institution Name' name='institution' required />
            </div>
            <span></span>
            <input type="file" name="resume" className="form-control" required />
            <button type="submit" className="submit-btn" >Next</button>
          </form>
        </div>
      </div>
    </div>
  )
}

// ReactDOM.render(<SignupExaminerInfo />, document.getElementById('root'));
export default SignupExaminerInfo