import React from 'react'
import '../App.css';

function RequestRecieved() {

    return (
        <div className='Mybody'>
            <div className='container'>
                <div className="row Requestheader">
                    <div className="courseTitle col-9">
                        CMP-100 Introduction to Computing
                    </div>
                    <div className="deadline col-3">
                        Tuesday, 13th faburary, 2023
                    </div>
                </div>
                <div className="row">
                    <div className="requestBody">
                        <div className="bookRecomended">
                            <label className='outlineTitle'>Book recomended: </label>
                            Nell Dale, John Lewis, Computer Science Illuminated, 5th Edition,
                            Jones & Bartlett Learning, 2012, ISBN-10: 1449672841,
                            ISBN-13: 978-1449672843.
                        </div>
                        <div className="CourseOutline">
                            <label className='outlineTitle'>Outline:</label>
                            Introduction to Information Technology, The Internet and World
                            Wide Web, Software, Types of software, Application Software, Productivity
                            Software, System Software, Digital Logic Design, Computer Organization,
                            Operating System, Utility Programs, Hardware, Storage, Computer
                            Networks, Software development, Command Line, Little Man Computer,
                            Database Systems, Software Engineering Problem Solving, Algorithms,
                            HTML.
                        </div>
                    </div>
                </div>
                <div className="row requestFooter">
                    <button className='col-4 AcceptBtn'>Accept</button>
                    <button className='col-4 AcceptBtn'>Reject</button>
                </div>
            </div>
        </div>
    )
}

export default RequestRecieved