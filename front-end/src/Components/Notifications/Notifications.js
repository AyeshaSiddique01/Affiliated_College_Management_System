import React, { useState, useEffect } from 'react'
import './notifications.css';

const Notifications = () => {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/notifications')
            .then(response => response.json())
            .then(data => setDataList(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='My-body4'>
            <div className="subject4-box">
                <h2 class="subject4-name">Requests</h2>

                <box-icon type='solid' name='message-rounded-detail' animation='burst' size='80px' color="#ffffff"></box-icon>
                <box-icon name='message-rounded-dots' animation='burst' size='180px' color="#ffffff"></box-icon>
                <box-icon type='solid' name='comment-dots' animation='burst' size='40px' color="#ffffff"></box-icon>
                <div className="subject4-description">
                    <p>description if needed.</p>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    <div className='adjustment4'>
                        {dataList.map(item => (
                            <a href='http://localhost:3000/RequestRecieved'>
                                <div className="notification_block4">
                                    <div className='CourseTitle4'>{item[1]}</div>
                                    <div className='papertype4'>
                                        {item[3]}
                                        <button className='detail-btn' type="deatils" >See Details</button>
                                    </div>
                                    <div className='date4'>{item[2]}</div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications