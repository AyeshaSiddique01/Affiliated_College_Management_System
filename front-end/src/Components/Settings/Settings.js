// import React from 'react'

// const Settings = () => {
//   return (
//     <div className='FormBg'>
//         Settings       
//     </div>
//   )
// }

import React, { useState } from "react";
import './settings.css'

function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`settings-container ${darkMode ? "dark-mode" : ""}`}>
      <h1>Settings</h1>
      <form>
        <h2>Profile</h2>
        <label htmlFor="name">Name</label>
        <input type="texts" id="name" name="name" />

        <label htmlFor="email">Email</label>
        <input type="emails" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="passwords" id="password" name="password" />

        <label htmlFor="profile-pic">Profile Picture</label>
        <input type="files" id="profile-pic" name="profile-pic" />

        <h2>Notifications</h2>
        <div className="notification">
          <input type="checkbox" id="email-notif" name="email-notif" />
          <label htmlFor="email-notif">Email Notifications</label>
        </div>

        <div className="notification">
          <input type="checkbox" id="push-notif" name="push-notif" />
          <label htmlFor="push-notif">Push Notifications</label>
        </div>

        <h2>Examiner Settings</h2>
        <label htmlFor="examiner-id">Examiner ID</label>
        <input type="text" id="examiner-id" name="examiner-id" />

        <label htmlFor="examiner-name">Examiner Name</label>
        <input type="text" id="examiner-name" name="examiner-name" />

        <label htmlFor="examiner-email">Examiner Email</label>
        <input type="email" id="examiner-email" name="examiner-email" />

        <h2>Appearance</h2>
        <div className="appearance">
          <label htmlFor="dark-mode-toggle">Dark Mode</label>
          <input
            type="checkbox"
            id="dark-mode-toggle"
            name="dark-mode-toggle"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
        </div>

        <button type="submits">Save Settings</button>
      </form>
    </div>
  );
}

export default Settings;
