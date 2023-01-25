import React from 'react'

export default function SignupPersonalInfo() {
  return (
    <div className='FormBg'>
        <style>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' />
        </style>
        <div className='bg-img'>
            <div className="content" style={{height: "590px", width: "510px"}} >
            <h1 style={{marginBottom:"25px", color:"white", fontFamily: "'Poppins', sans-serif", fontWeight:"900"}}>Sign Up form</h1>
                <header type="PI"> Put your Personal Information to Sign Up!</header>
                <form action="http://localhost:5000//SignUpPersonalInfo" method='post'>    
                    
                    
                <div className="maindiv">
                        <span className="fa fa-user"></span>
                        <input type="text" className="input-box"  placeholder='Enter User Name' name='usr_name' required />                
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
                        <span className="fa fa-home"></span>
                        {/* <FontAwesomeIcon icon="fa-solid fa-location-dot" /> */}
                        <input type="text" className="input-box" placeholder='Enter Address' name='usr_address' required />
                    </div>    
                <div className="maindiv"> 
                        <span className="fa fa-male"></span>
                        <span style={{width:"fit-content"}} className="input-box" > Gender: </span>
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
                        <input type="password" className="input-box" placeholder='Enter Password' name='usr_password' required />
                    </div>
                <div className="maindiv">
                        <span className="fa fa-lock"></span>
                        <input type="password" className="input-box" placeholder='Confirm Password' required />
                    </div>                    
                    
                        <button type="submit" className="submit-btn" >Next</button>
                    
                </form>
                <div className="pass">
                    <a href="/">Already have an account? Log in</a>
                </div>  
            </div>
        </div>
    </div>
  )
}
