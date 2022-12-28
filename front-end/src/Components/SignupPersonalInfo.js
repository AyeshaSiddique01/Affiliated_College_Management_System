import React from 'react'

export default function SignupPersonalInfo() {
  return (
    <div className='loginExaminer'>
        <style>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' />
        </style>
        <div className='bg-img'>
            <div className="content">
                <header>Personal Info</header>
                <form action="http://localhost:5000//SignUpPersonalInfo" method='post'>
                    <div className="field">
                        <span className="fa fa-user"></span>
                        <input type="text" placeholder='Enter Email' required />
                    </div>
                    <div className="field space">
                        <span className='fa fa-lock'></span>
                        <input type="password" className='pass-key' required placeholder='Password' />
                        <span className='show'>Show</span>
                    </div>
                    <div className="pas">
                        <a href="#">Forgot Password? Get Lost.</a>
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
