import React, { useEffect } from 'react'
// import { useHistory } from "react-router-dom";

const ExaminerExp = () => {
    // alert("YES!!")
    // const history = useHistory();

    // const coursesPage = () => {
    //     history.push("/ExaminerExp")
    // }
    useEffect(() => {
        const modal = document.getElementById("AddNewQualification");

        const btn = document.getElementById("myBtn");

        const span = document.getElementsByClassName("close")[0];

        btn.onclick = function () {
            modal.style.display = "block";
        }

        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    });
    return (
        <div className='FormBg'>
            <div className='bg-img'>
                <div className="content" style={{ width: "510px", height: "77%" }}>
                    <header>
                        <h1 style={{ color: "white", fontFamily: "'Poppins', sans-serif", fontWeight: "500" }}>Experience</h1>
                    </header>
                    <table className='TableStyle' border="1">
                        <tr>
                            <th>Sr #</th>
                            <th>Degree Title</th>
                            <th>Institute Name</th>
                            <th>Starting Date</th>
                            <th>Ending Date</th>
                            <th className='EditBtn'>Edit</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>BSIT</td>
                            <td>Punjab Univerity College Of Information Technology</td>
                            <td>October, 2019</td>
                            <td>July, 2023</td>
                            <td className='EditBtn'>Edit</td>
                        </tr>
                    </table>
                    <div className="container Buttons">
                        <div>
                            {/* <form action='http://localhost:3000/Profile'> */}
                            <div className='NextBtn'>
                                <button type="button" id='myBtn'>Add New</button>
                                {/* <button type="submit"></button> */}
                            </div>
                            {/* </form> */}
                            <div id="AddNewQualification" class="modal">
                                <div class="modal-content">
                                    <span class="close">&times;</span>
                                    <div>
                                        <form action="http://localhost:5000//ExaminerExperience" method='post'>
                                            <div className="maindiv">
                                                <span></span>
                                                <input type="text" className='input-box' placeholder='Enter Job Title' name='job_title' required />
                                            </div>
                                            <div className="maindiv">
                                                <span></span>
                                                <input type="text" className='input-box' placeholder='Enter organization Name' name='organization' required />
                                            </div>
                                            <div className="maindiv">
                                                <span></span>
                                                <input type="text" className='input-box' placeholder='Enter Reference Email' name='reference_email' required />
                                            </div>
                                            <div className="maindiv">
                                                <span></span>
                                                <label className='label_' for="starting_date">Starting Date:</label>
                                                <input className="form-control input-box" type="date" name="starting_date" runat="server"
                                                    style={{ height: "30px", width: "fit-content" }} />
                                            </div>
                                            <div className="maindiv">
                                                <span></span>
                                                <label className='label_' for="ending_date">Ending Date:</label>
                                                <input className="form-control input-box" type="date" name="ending_date" runat="server"
                                                    style={{ height: "30px", width: "fit-content" }} />
                                            </div>
                                            <div className="maindiv">
                                                <label className='label_' for="ExperianceLetter">Experiance Letter: </label>
                                                <input type="file" name="ExperianceLetter" className="form-control" required />
                                            </div>
                                            <div className="AddBtn">
                                                <input type="submit" value="Add" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href='http://localhost:3000/Profile'>
                                <div className='NextBtn'>
                                    <button type="submit">Next Page</button>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ExaminerExp