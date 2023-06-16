<<<<<<< HEAD
profile.js
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Avatar from "./avatar"
import ExperienceDetails from "./experience-details"
import QualificationDetails from "./qualification-details"
import UserDetails from "./user-details"
import axios from 'axios';
import QuaTable from './Qua_table';
=======
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Avatar from "./avatar";
import ExperienceDetails from "./experience-details";
import QualificationDetails from "./qualification-details";
import UserDetails from "./user-details";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import QuaTable from "./Qua_table";
>>>>>>> d26ae21142088f779a8aed2bf579ca1255a96791
import ExpTable from "./Exp_table";

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
      // document.getElementById("msj").textContent = error;
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
    < >
      <Navbar></Navbar>
<<<<<<< HEAD
      <div className="container py-5" style={{ marginTop: "100px" }}>
        <div className="row" style={{ marginTop: "50px 0 0 250px" }}>

=======
      <div className="container py-5">
        <div className="row">
>>>>>>> d26ae21142088f779a8aed2bf579ca1255a96791
          <div className="col-lg-3 col-md-6">
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
<<<<<<< HEAD
    </>
  )
}
=======
    </div>
  );
};
>>>>>>> d26ae21142088f779a8aed2bf579ca1255a96791

export default Profile;

{
  /* <QualificationDetails
                    data={userDetails?.qualification_details}
  />*/
}
