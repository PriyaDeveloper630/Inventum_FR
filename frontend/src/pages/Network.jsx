import React from 'react'
import './Network.css';
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Networks from "../components/networks";


function Network () {
  return (
    <div className="homePage">
      <Navbar></Navbar>
      <Dashboard></Dashboard>
      
      <Networks></Networks>
      
    </div>
  );
};

export default Network;