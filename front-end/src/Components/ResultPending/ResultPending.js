import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import './resultPending.css'
import { useNavigate } from 'react-router-dom';

const ResultPending = () => {
    const [dataList, setDataList] = useState([]);
    const [Duty_ID, setId] = useState('');
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('access_token');
    const headers = {
      'Authorization': `Bearer ${accessToken}`,
    };
    const handleDutyID = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('duty_id', Duty_ID);
        try {
            const response = await axios.post('http://127.0.0.1:5000/getRequestRecievedId', formData, { headers: headers });
            
            // Redirect the user to the protected route
           return navigate('/UploadResult');
        } catch (error) {
            console.error("error: ", error);
        }
    };
    useEffect(() => {
        if (!accessToken) {
          return navigate("/"); // Render the Login component if access token doesn't exist
        }
        fetchData();
    }, []); 
    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/ResultUploadPending', { headers: headers });
            setDataList(response.data);
            console.log(response.data);
        } catch (error) {
            
        }
    };
    return (
        <>
        <Navbar></Navbar>
        <div className='My-body3'>
            <div className="subject3-box">
                <h2 className="subject3-name">Result Pending</h2>
                <box-icon name='receipt' animation='' size='90px' color="#ffffff"></box-icon>
                <box-icon name='search-alt-2' animation='tada' size='120px' color="#ffffff"></box-icon>
                <box-icon name='math' animation='tada' size='120px' color="#ffffff"></box-icon>
                <box-icon name='book-open' animation='tada' size='100px' color="#ffffff"></box-icon>
                <div className="subject3-description">
                    <p>description if needed.</p>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    <div className='adjustment4'>
                        {dataList.map(item => (
                            <form onSubmit={handleDutyID}>
                                <div className="notification_block4">
                                    <div className='CourseTitle4'>{item[1]}</div>
                                    <div className='papertype4'>
                                        {item[3]}
                                        <button className='detail-btn' type="deatils" onClick={() => {
                                                const id = item[0];
                                                const type = item[3]
                                                navigate("/UploadResult?id=" + id + "&type=" + type);
                                            }}>See Details</button>
                                    </div>
                                    <div className='date4'>{item[2]}</div>
                                </div>
                            </form>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ResultPending