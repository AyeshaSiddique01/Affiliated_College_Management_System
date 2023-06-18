import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Avatar from "./avatar";
import ExperienceDetails from "./experience-details";
import QualificationDetails from "./qualification-details";
import UserDetails from "./user-details";
import axios from 'axios';
import QuaTable from './Qua_table';
import ExpTable from "./Exp_table";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userDetails, setUserDetails] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('access_token');
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
  };
  
  const getData = async () => {
    try {
      console.log("in try");
      const response = await axios.get('http://127.0.0.1:5000/profile', { headers: headers });
      setUserDetails(response.data)
      console.log("response-----------", response);
    } catch (error) {
      console.error(error);
      setError("Error loading data");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  
  if (!accessToken) {
    return navigate("/"); // Render the Login component if access token doesn't exist
  }

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 col-lg-6 mt-5">
            <Avatar
              src={userDetails?.personal_details?.usr_profile_pic}
              name={userDetails?.personal_details?.usr_name}
            />
          </div>
          <div className="col-lg-9 col-md-6">
            <h2 className="mb-4 mt-4 mt-md-0">User Details</h2>
            <div className="card mb-4">
              <UserDetails data={userDetails?.personal_details} />
            </div>
            <div className="row">
              <div className="col-12">
                <h2 className="mb-4">Qualification Details</h2>
                <div className="card">
                  <QuaTable data={userDetails?.qualification_details} />
                </div>
              </div>
              <div className="col-12">
                <h2 className="mb-4 mt-4 mt-md-0">Experience Details</h2>
                <div className="card">
                  <ExpTable data={userDetails?.experience_details} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;