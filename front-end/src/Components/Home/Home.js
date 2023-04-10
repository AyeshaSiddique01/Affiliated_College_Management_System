import React, { useState, useEffect } from 'react'
import './home.css';

const Home = () => {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/home')
            .then(response => response.json())
            .then(data => setDataList(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='My-body1'>
            <div class="subject1-box" >
                <h2 class="subject1-name">HOME</h2>
                <box-icon name='home-smile' animation='tada' size='190px' color="#202124"></box-icon>
                <div class="subject1-description">
                    <p>description if needed.</p>
                 </div>
            </div>
            <div className='container'>
                <div className="row">
                    <div className='adjustment1'>
                        {dataList.map(item => (
                            <a href='http://localhost:3000/UploadPaper'>
                            <div className="notification_block1">
                                <div className='CourseTitle1'>{item[1]}</div>
                                <div className='papertype1'>
                                    {item[3]}
                                    <button className='detail-btn' type="deatils" >Open</button>
                                </div>
                                <div className='date1'>{item[2]}</div>
                            </div>
                        </a>  
                        ))}                                              
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home