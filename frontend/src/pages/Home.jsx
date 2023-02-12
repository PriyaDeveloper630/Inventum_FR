import React from "react";
import './Home.css';
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import ViewPost from "../components/ViewPost";
import TrendingNews from "../components/TrendingNews";



function Home () {
  return (
    <div className="homePage">
      <Navbar></Navbar>
      <Dashboard></Dashboard>
      <ViewPost></ViewPost>
      <TrendingNews></TrendingNews>
      
    </div>
  );
};

export default Home;