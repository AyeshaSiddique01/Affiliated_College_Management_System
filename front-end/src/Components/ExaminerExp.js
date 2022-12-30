import React from 'react'

function ExaminerExp() {
  return (
    <div className='FormBg'>
        <div className='bg-img'>
            <div className="content" style={{width:"510px"}}>
                <header>Experience</header>  
                <div>              
                <form action="http://localhost:5000//ExaminerExperience" method='post'> 
                    <div className="field">
                        <span></span>
                        <input type="text" placeholder='Enter Job Title' name='job_title' required />
                    </div>    
                    <div className="field">
                        <span></span>
                        <input type="text" placeholder='Enter Organization Name' name='organization' required />
                    </div>
                    <div className="field">
                        <span></span>
                        <input type="text" placeholder='Enter Reference Email' name='reference_email' defaultValue={""} />
                    </div>    
                    <div className="field">
                        <span></span>
                        <label className='label_' for="starting_date">Starting Date:</label>
                        <input class="form-control" type="date" name="starting_date" runat="server" value="<%=DateTime.Now%>" 
                        style={{height: "30px", width: "fit-content"}}/>
                    </div>    
                    <div className="field">
                        <span></span>
                        <label className='label_' for="ending_date">Ending Date:</label>
                        <input class="form-control" type="date" name="ending_date" runat="server" value="<%=DateTime.Now%>" 
                        style={{height: "30px", width: "fit-content"}}/>
                    </div>    
                    <div className="AddBtn">
                        <input type="submit" value="Add" />
                    </div>
                </form>
                </div>
                <div>                          
                    <form action='http://localhost:3000/Profile'>                                        
                        <div className='NextBtn'>
                            <button type="submit">Next Page</button>
                        </div>
                    </form>
                </div>
            </div>             
        </div>
    </div>
  )
}

export default ExaminerExp