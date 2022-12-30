import React from 'react'

function SignupExaminerInfo() {
  return (
    <div className='FormBg'>
        <div className='bg-img'>
            <div className="content" style={{width:"510px"}}>
                <header>Examiner Information</header>
                <form action="http://localhost:5000//SignUpExaminerInfo" method='post' enctype="multipart/form-data">    
                    <div className="field">
                        <span></span>
                        <input type="text" placeholder='Enter Your Institution Name' name='institution' required />
                    </div>                    
                    <div className="field">
                        <span></span>
                        <input type="file" name="resume" className="form-control" required />
                    </div>      
                    <div className="field">
                        <input type="submit" value="Next" />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignupExaminerInfo