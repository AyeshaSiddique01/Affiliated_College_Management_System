import React from 'react'
import { BiFontSize } from 'react-icons/bi';
import '../App.css';

function Login() {
    
  return (
    <div className='FormBg'>
        <div className='loginExaminer'>
            <style>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' />
            </style>
            <div className="bg-img">
                <div className="content">
                <header><h1 style={{color:"white", fontFamily: "'Poppins', sans-serif", fontWeight:"900"}}>Log In form</h1></header>
                    <header type="LI">Enter your registered mail and password:</header>
                    <form action="http://localhost:5000//ExaminerLogin" method='post'>
                        
                        <div className="maindiv">
                            <span className="fa fa-user"></span>
                            <input type="text" name='email' className="fa input-box" placeholder='Enter Email' required />
                        </div>
                        
                        <div className="maindiv">
                            <span className='fa fa-lock'></span>
                            <input type="password" className="pass-key" name='password' placeholder='Password' required/>
                            <span className='show'>Show</span>
                        </div>

                        <div className="pass">
                            <a href="/SignupPersonalInfo">Don't have an account? Sign up</a>
                        </div>
                        
                            <button type="submit" className="submit-btn" >Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login