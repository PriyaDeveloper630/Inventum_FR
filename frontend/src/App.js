import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Profile from "./pages/Profile";
import Network from "./pages/Network";
import Landingpage from "./pages/landingpage/landingpage.jsx";
import Login from "./pages/login/loginpage.jsx";
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landingpage" element={<Landingpage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/network" element={<Network/>} />
      </Routes>
    </div>
  );
}

export default App;
