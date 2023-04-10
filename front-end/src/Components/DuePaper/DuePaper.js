import React, { useState, useEffect } from 'react'
import './duePaper.css'

const DuePaper = () => {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/duePaperRequests')
            .then(response => response.json())
            .then(data => setDataList(data))
            .catch(error => console.error(error));
    }, []);
    return (
        <div className='My-body2'>
            <div class="subject2-box">
                <h2 class="subject2-name">Due Paper</h2>
                <box-icon name='sort-a-z' animation='tada' size='120px' color="#ffffff"></box-icon>
                <box-icon name='time-five' animation='tada' size='50px' color="#ffffff"></box-icon>
                <box-icon name='task' animation='flashing' size='90px' color="#ffffff"></box-icon>
                <box-icon name='pencil' animation='tada' size='90px' color="#ffffff"></box-icon>
                <box-icon name='calculator' animation='' size='70px' color="#ffffff"></box-icon>
                <box-icon name='detail' animation='' size='70px' color="#ffffff"></box-icon>
                <box-icon type='solid' name='graduation' animation='tada' size='110px' color="#ffffff"></box-icon>
                {/* <box-icon type='logo' name='deezer' animation='flashing' size='70px' color="#ffffff"></box-icon> */}
                <div class="subject2-description">
                    <p>description if needed.</p>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    <div className='adjustment2'>
                        {dataList.map(item => (
                            <a href='http://localhost:3000/AcceptedRequest'>
                                <div className="notification_block2">
                                    <div className='CourseTitle2'>{item[1]}</div>
                                    <div className='papertype2'>
                                        {item[3]}
                                        <button className='detail-btn' type="deatils" >Open</button>
                                    </div>
                                    <div className='date2'>{item[2]}</div>

                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DuePaper