import React, { useState, useEffect }  from "react";
import './Profile.css';
import { useNavigate } from "react-router-dom";
import Tabbar from "../components/Tabbar";
import Dashboard from "../components/Dashboard";
import Inventions from "../components/inventions";
import Profile1 from "../components/profile";
function Profile () {

  const navigate = useNavigate();
  const [user, setUser] = useState();

  async function getUser() {
    const res = await fetch("http://localhost:7171/api/auth/whoami", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //"Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
    });
    const data = await res.json();
    //console.log(data);
    if (data.success === true) {
      setUser(data.user);
    }
    // } else {
    //   navigate("/login");
    // }
  }

  useEffect(() => {
    getUser();
    
  }, []);

  return (
    <div className="homePage">
      <Tabbar></Tabbar>
      <Dashboard></Dashboard>
      <Profile1
        //  name={user.name}
        //  bio={user.bio}
        //  email={user.email}
      />
      <Inventions></Inventions>
      
    </div>
  );
};

export default Profile;