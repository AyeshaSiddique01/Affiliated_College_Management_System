import React, { useEffect } from 'react'
import './signupPersonalInfo.css'

const SignupPersonalInfo = () => {
    useEffect(() => {
        var password = document.getElementById("pass");
        var passwordC = document.getElementById("passC");
        passwordC.addEventListener("keyup", function () {
            if (password.value !== passwordC.value) {
                document.getElementById("messageError").innerHTML = "Password does not match<br />";
            } else {
                document.getElementById("messageError").innerHTML = "";
            }
        });
    });
    return (
        <div className='FormBg'>
            <style>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' />
            </style>
            <div className='bg-img'>
                <div className="content">
                    <h1 className='headtxt'>Sign Up form</h1>
                    <header type="PI"> Put your Personal Information to Sign Up!</header>
                    <form action="http://localhost:5000//SignUpPersonalInfo" method='post'>
                        <div className="maindiv">
                            <span className="fa fa-user"></span>
                            <input type="text" className="input-box" placeholder='Enter User Name' name='usr_name' required />
                        </div>
                        <div className="maindiv">
                            <span className="fa fa-mail-bulk"></span>
                            <input type="email" className="input-box" placeholder='Enter Email Address' name='usr_email' required />
                        </div>
                        <div className="maindiv">
                            <span className="fa fa-id-card"></span>
                            <input type="text" className="input-box" placeholder='Enter CNIC' name='usr_cnic' required />
                        </div>
                        <div className="maindiv">
                            <span className="fa fa-id-card"></span>
                            <input type="text" className="input-box" placeholder='Enter Phone Number' name='usr_phone' required />
                        </div>
                        <div className="maindiv">
                            <span className="fa fa-home"></span>
                            {/* <FontAwesomeIcon icon="fa-solid fa-location-dot" /> */}
                            <input type="text" className="input-box" placeholder='Enter Address' name='usr_address' required />
                        </div>
                        <div className="maindiv">
                            <span className="fa fa-male"></span>
                            <span style={{ width: "fit-content" }} className="input-box" > Gender: </span>
                            <select class="form-label designLable" name="usr_gender">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="maindiv">
                            <span className="fa fa-user-edit"></span>
                            <input type="text" className="input-box" placeholder='Enter Bio' name='usr_bio' required />
                        </div>
                        <div className="maindiv">
                            <span className="fa fa-lock"></span>
                            <input type="password" id='pass' className="input-box" placeholder='Enter Password' name='usr_password' required />
                        </div>
                        <div className="maindiv">
                            <span className="fa fa-lock"></span>
                            <input type="password" id='passC' className="input-box" placeholder='Confirm Password' required />
                        </div>
                        <span id="messageError"></span>
                        <div>
                            <button type="submit" className="submit-btn" >Next</button>
                        </div>
                    </form>
                    <div className="pass">
                        <a href="/">Already have an account? Log in</a>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default SignupPersonalInfo