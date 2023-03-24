import React, { useEffect, useState } from 'react'

const ExaminerQualification = () => {
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
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //    fetch("http://127.0.0.1:3000/userdata") // or fetch("http://localhost:3000/userdata")
    //      .then((response) => response.json())
    //      .then((json) => {
    //        setData(json);
    //        alert("data = ", json);
    //        console.log(data.name);
    //      });
    //  }, []);
    return (
        <div className='FormBg'>
            <div className='bg-img'>
                <div className="content" style={{ width: "510px", height: "77%" }}>
                    <header>
                        <h1 style={{ color: "white", fontFamily: "'Poppins', sans-serif", fontWeight: "500" }}>Qualification</h1>
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
                            <div className='NextBtn'>
                                <button type="button" id='myBtn'>Add New</button>
                            </div>
                            <div id="AddNewQualification" class="modal">
                                <div class="modal-content">
                                    <span class="close">&times;</span>
                                    <div>
                                        <form action="http://localhost:5000//ExaminerQualification" method='post'  enctype="multipart/form-data">
                                            <div className="maindiv">
                                                <span></span>
                                                <input type="text" className='input-box' placeholder='Enter Degree Title' name='degree_title' required />
                                            </div>
                                            <div className="maindiv">
                                                <span></span>
                                                <input type="text" className='input-box' placeholder='Enter Institute Name' name='institution' required />
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
                                            <label className='label_' for="Certificate">Transcript: </label>
                                            <input type="file" name="Certificate" className="form-control" required />
                                            </div>
                                            <div className="AddBtn">
                                                <input type="submit" value="Add" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='NextBtn'>
                            <a href="http://localhost:3000/ExaminerExp">
                            <button type="submit">Next Page</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ExaminerQualification