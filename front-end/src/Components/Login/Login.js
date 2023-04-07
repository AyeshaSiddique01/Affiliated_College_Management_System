import React, { useEffect } from 'react'
import './login.css';

const Login = () => {

    useEffect(() => {
        const showBtn = document.getElementById("show");
        showBtn.addEventListener("click", function () {
            const pass_field = document.getElementById("pass-key");
            console.log(pass_field.type);
            if (pass_field.type === "password") {
                pass_field.type = "text";
                showBtn.textContent = "Hide";
                showBtn.style.color = "#3498db";
            }
            else {
                pass_field.type = "password";
                showBtn.textContent = "Show";
                showBtn.style.color = "#222";
            }
        });
    });

    return (
        <>
            <div className='FormBg'>
                <div className='loginExaminer'>
                    <style>
                        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' />
                    </style>
                    <div className="bg-img">
                        <div className="content">
                            <header><h1 style={{ color: "white", fontFamily: "Poppins", fontWeight: "600" }}>Log In form</h1></header>
                            <header type="PI" style={{ fontFamily: "Poppins", color: "white" }}>Enter your registered mail and password:</header>
                            <form action="http://localhost:5000//ExaminerLogin" method='post'>

                                <div className="maindiv">
                                    <span className="fa fa-user"></span>
                                    <input type="text" name='email' className="fa input-box" placeholder='Enter Email' required />
                                </div>

                                <div className="maindiv">
                                    <span className='fa fa-lock'></span>
                                    <input type="password" className="pass-key" id='pass-key' name='password' placeholder='Password' required />
                                    <span className='show' id='show'>Show</span>
                                </div>

                                <div className="pass">
                                    <a href="/SignupPersonalInfo">Don't have an account? Sign up</a>
                                </div>
                                <div>
                                    <button type="submit" className="submit-btn" >Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login