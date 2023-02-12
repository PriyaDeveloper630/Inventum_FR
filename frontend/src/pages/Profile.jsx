import React from "react";
import './Profile.css';
import Tabbar from "../components/Tabbar";
import Dashboard from "../components/Dashboard";
import Inventions from "../components/inventions";
import Profile1 from "../components/profile";
function Profile () {
  return (
    <div className="homePage">
      <Tabbar></Tabbar>
      <Dashboard></Dashboard>
      <Profile1></Profile1>
      <Inventions></Inventions>
      
    </div>
  );
};

export default Profile;