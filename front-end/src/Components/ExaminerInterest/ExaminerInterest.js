import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ExaminerInterest.css';
// import { useHistory } from "react-router-dom";

const ExaminerInterest = () => {

    const [dataList, setDataList] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [textInput, setTextInput] = useState('');
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('access_token');
    const header = {
        'Authorization': `Bearer ${accessToken}`,
    };
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/AllCourses', { headers: header });
            setDataList(response.data);
        } catch (error) {

        }
    };
    if (!accessToken) {
        return navigate("/"); // Render the Login component if access token doesn't exist
    }

    const handleOptionChange = (event) => {
        const selectedOption = event.target.value;
        setTextInput((prevText) => prevText + ", " + selectedOption);
    };

    const handleTextChange = (event) => {
        setTextInput(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(textInput)
        try {
            const response = await axios.post('http://127.0.0.1:5000/AddExaminerCourse',{data: textInput} , { headers: header });
            navigate("/home");
        } catch (error) {
            console.error("error: ", error);
        }
    };

    return (
        <div className='FormBgEE'>
            <div className='bg-imgEE'>
                <div className="contentEE" style={{ width: "fit-content", height: "fit-content" }}>
                    <header>
                        <h1 style={{ color: "#d7e7ec", fontFamily: "'Poppins'", fontWeight: "500" }}>Interest</h1>
                    </header>
                    <div className='option_'>
                        <form onSubmit={handleSubmit}>
                            <select value={selectedOption} onChange={handleOptionChange}>
                                <option value="">Select an option</option>
                                {dataList.map((item, index) => (
                                <option value={item}>{item}</option>
                                ))}
                            </select>
                            <br />
                            <input className='input-box' type="text" value={textInput} onChange={handleTextChange} readOnly />
                            <br />
                            <div className='NextBtnEE'>
                                <button type="submit" style={{ width: "190px" }}>Next</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}
export default ExaminerInterest