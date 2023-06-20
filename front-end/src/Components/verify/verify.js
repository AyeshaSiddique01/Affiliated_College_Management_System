import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const verify = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Make API request to your Flask backend
        fetch('/verify_email')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.redirect) {
                    navigate(data.redirect)
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);
    return (
        <></>
    )
    // ...
};
export default verify;