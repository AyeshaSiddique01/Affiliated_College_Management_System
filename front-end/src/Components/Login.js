import React from 'react'

function Login() {
    
    // const showBtn = document.querySelector(".show");
    // showBtn.addEventListener("click", function(){ 
    //     const pass_field = document.querySelector(".pass-key");
    //     if (pass_field.type === "password") {
    //         pass_field.type = "text";
    //         console.log(pass_field.type);     
    //         console.log(showBtn.textContent);  
    //         showBtn.textContent = "Hide";
    //         console.log(showBtn.textContent);     
    //         showBtn.style.color = "#3498db";
    //     } else {
    //         pass_field.type = "password";
    //         showBtn.textContent = "Show";
    //         showBtn.style.color = "#222"
    //     }
    // });
  return (
    <div className='FormBg'>
        <style>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' />
        </style>
        <div className='bg-img'>
            <div className="content">
                <header>Login Examiner</header>
                <form action="http://localhost:5000//ExaminerLogin" method='post'>
                    <div className="field">
                        <span className="fa fa-user"></span>
                        <input type="text" name='email' placeholder='Enter Email' required />
                    </div>
                    <div className="field space">
                        <span className='fa fa-lock'></span>
                        <input type="password" className='pass-key' name='password' required placeholder='Password' />
                        <span className='show'>Show</span>
                    </div>
                    <div className="pass">
                        <a href="/">Forgot Password? Get Lost.</a>
                    </div>
                    <div className="field">
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login