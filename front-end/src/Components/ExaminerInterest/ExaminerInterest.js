import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ExaminerInterest.css';
// import { useHistory } from "react-router-dom";

const ExaminerInterest = () => {

    // const [dataList, setDataList] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [textInput, setTextInput] = useState('');
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('access_token');
    const header = {
        'Authorization': `Bearer ${accessToken}`,
    };
    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get('http://127.0.0.1:5000/AllCourses', { headers: header });
    //         setDataList(response.data);
    //     } catch (error) {

    //     }
    // };
    if (!accessToken) {
        return navigate("/"); // Render the Login component if access token doesn't exist
    }
    const GoNext = () => {
        return navigate("/home");
    }

    const handleOptionChange = (event) => {
        const selectedOption = event.target.value;
        setTextInput((prevText) => prevText + ", " + selectedOption);
    };

    const handleTextChange = (event) => {
        setTextInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process the selected option and text input here
        console.log(selectedOption, textInput);
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
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                            </select>
                            <br />
                            <input type="text" value={textInput} onChange={handleTextChange} readOnly />
                            <br />
                            <div className='NextBtnEE'>
                                <button type="submit" style={{ width: "190px" }}>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className='NextBtnEE'>
                        <button style={{ width: "190px" }} onClick={GoNext}>Next Page</button>
                    </div>
                </div>
            </div >
        </div >
    )
}
export default ExaminerInterest