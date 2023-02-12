import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Network from "./pages/Network";
import Landingpage from "./pages/landingpage/landingpage.jsx";
import Login from "./pages/login/loginpage.jsx";
import Register from "./pages/login/register.jsx";

import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landingpage" element={<Landingpage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/network" element={<Network/>} />
      </Routes>
    </div>
  );
}

export default App;
