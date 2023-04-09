import React, { useState, useEffect } from "react";
// npm install axios
import axios from 'axios';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            console.log("in try")
            const response = await axios.post('http://127.0.0.1:5000/ExaminerLogin', { email, password });
            localStorage.setItem('access_token', response.data.access_token);
            // Redirect the user to the protected route
            window.location.href = '/Notifications';
        } catch (error) {
            // document.getElementById("msj").textContent = error;
            console.error(error);
            setError('Invalid username or password');
        }
    };
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
                            <form onSubmit={handleLogin}>

                                <div className="maindiv">
                                    <span className="fa fa-user"></span>
                                    <input type="text" name='email' className="fa input-box" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} required />
                                </div>

                                <div className="maindiv">
                                    <span className='fa fa-lock'></span>
                                    <input type="password" className="pass-key" id='pass-key' name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
                                    <span className='show' id='show'>Show</span>
                                </div>

                                <div className="pass">
                                    <a href="/SignupPersonalInfo">Don't have an account? Sign up</a>
                                </div>
                                <div>
                                    <button type="submit" className="submit-btn" >Login</button>
                                </div>
                                <div>
                                    {error && <div>{error}</div>}
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