import React, { useState, useEffect } from 'react'
import './resultPending.css'

const ResultPending = () => {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/dueResultRequests')
            .then(response => response.json())
            .then(data => setDataList(data))
            .catch(error => console.error(error));
    }, []);
    return (
        <div className='My-body3'>
            <div class="subject3-box">
                <h2 class="subject3-name">Result Pending</h2>
                <box-icon name='receipt' animation='' size='90px' color="#ffffff"></box-icon>
                <box-icon name='search-alt-2' animation='tada' size='120px' color="#ffffff"></box-icon>
                <box-icon name='math' animation='tada' size='120px' color="#ffffff"></box-icon>
                <box-icon name='book-open' animation='tada' size='100px' color="#ffffff"></box-icon>
                <div class="subject3-description">
                    <p>description if needed.</p>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    <div className='adjustment3'>
                        {dataList.map(item => (
                            <a href='http://localhost:3000/UploadResult'>
                                <div className="notification_block3">
                                    <div className='CourseTitle3'>{item[1]}</div>
                                    <div className='papertype3'>
                                        {item[3]}
                                        <button className='detail-btn' type="deatils" >Open</button>
                                    </div>
                                    <div className='date3'>{item[2]}</div>

                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultPending