import React from 'react'
import styled from "styled-components";
import logo from '../images/logo.png';
import name from '../images/name.png';



const navbar = () => {
  
  
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
          <a href="#">My Profile <i class="fa fa-caret-down"></i></a>
          <ul class="dropdown-content">
            <li><a href="#">My Profile</a></li><hr />
            <li><a href="#">Home</a></li><hr />
            <li><a href="#">Ideas</a></li><hr />
            <li><a href="#">Network</a></li><hr />
            <li><a href="#">Funding Aid</a></li><hr />
            <li><a href="#">Patent</a></li><hr />
            <li><a href="#">Logout</a></li>
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
export default navbar