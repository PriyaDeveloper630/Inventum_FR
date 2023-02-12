import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import './loginpage.css';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


function App() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const registerHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:7171/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //"Access-Control-Allow-Origin": "*", // Required for CORS support to work
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
        credentials: "include",
        mode: "cors",
      });
      const data = await res.json();
      if (data.success === true) {
        toast.success("Registration Successful");
        setError(null);
        navigate("/login");
      } if (data.success !== true) {
        setError(data.message);
        toast.error(data.message);
      }
    } catch (error) {
      setError('An unexpected error occurred');
      toast.error("Registration Failed-An unexpected error occurred");
    }
  };

  return (
    <div className="admin_page_student">

<div className="admin_page_leftside">
  <div className="admin_page_content">
    <h1 className="admin_page_text">Are you</h1>
    <h1 className="admin_page_text">a new user?</h1>
    <button className="admin_page_admin">Sign up</button>
  </div>
</div>
<div>

<form method="POST" onSubmit={registerHandler}>
<div className="admin_page_Maincontent">
  <div className="admin_page_Helloadmin">Hello Inventor!!</div>
  <div className="admin_page_InputContainer">
    <Input type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
    <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
  </div>
  <div className="admin_page_buttoncontainer">
    <Button content="Register" type="submit" />
  </div>
  <HorizontalRule />
  <div className="admin_page_Register">Already have a account?</div>
  <Link to="/login">
  <div className="admin_page_buttoncontainer">
    <Button content="Login" />
  </div>
  </Link>
  {error && <p>{error}</p>}
</div>
</form>
</div>
    </div>  

  );
}
const HorizontalRule = styled.hr`
         position:relative;
         width:90%;
         height:0.5rem;
         border-radius:black;
         background:#24014E;
  `;
export default App;