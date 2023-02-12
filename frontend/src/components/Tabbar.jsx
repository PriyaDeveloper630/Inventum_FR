import React from 'react'
import styled from "styled-components";
import logo from '../images/logo.png';
import name from '../images/name.png';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const Navbar = () => {
  const navigate = useNavigate();

  async function handleLogOut() {
    const res = await fetch("/api/auth/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      credentials: "include",
    });
    toast.success("Logout Successful");
    navigate("/login");
  }
  
  return (
    <Container>
        <LogoContainer>
            <img src={logo} alt="logo"  className="homeLogo" />
        </LogoContainer>
        <NameContainer>
            <img src={name} alt="logo"  className="name" />
        </NameContainer>
        <TabContainer className="tab">
        <nav className="nav">
          <ul>
          <li class="dropdown">
          <a href="/profile">My Profile <i class="fa fa-caret-down"></i></a>
          <ul class="dropdown-content">
            <li><a href="/profile">My Profile</a></li><hr />
            <li><a href="/">Home</a></li><hr />
            <li><a href="#">Ideas</a></li><hr />
            <li><a href="/network">Network</a></li><hr />
            <li><a href="#">Funding Aid</a></li><hr />
            <li><a href="#">Patent</a></li><hr />
            <li><button onClick={handleLogOut} >Logout</button></li>
          </ul>
    </li>
              
          </ul>
        </nav>
        
        </TabContainer>
    </Container>
    
  );
};
const Container=styled.div`
    width:100%;
    background:white;
    height:80px;
    position:fixed;
    z-index:5;

`;
const LogoContainer=styled.div`
    
`;
const NameContainer=styled.div`
    
`;
const TabContainer=styled.div`

`;
export default Navbar