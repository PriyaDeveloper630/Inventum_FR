import React from 'react';
import styled from "styled-components";
import logo from '../images/logo.png';
import name from '../images/name.png';


const Tabbar = () => {
  
  
  return (
    <Container>
        <LogoContainer>
            <img src={logo} alt="logo"  className="homeLogo" />
        </LogoContainer>
        <NameContainer>
            <img src={name} alt="logo"  className="name" />
        </NameContainer>
        <TabContainer className="tab">
        <nav className="navi">
          <div className='semicircle'>
          <ul>
          <li class="dropdown" id="active">
          <a href="#">Home</a>
          </li>
          <li class="dropdown">
          <a href="#">Ideas</a>
          </li>
          <li class="dropdown">
          <a href="#">Patent Aid</a>
          </li>
          <li class="dropdown">
          <a href="#">Network</a>
          </li> 
          <li class="dropdown">
          <a href="#">Funding Aid</a>
          </li>  
          </ul>
          </div>
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
export default Tabbar
