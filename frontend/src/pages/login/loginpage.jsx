import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import './loginpage.css'


function App() {

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
<div className="admin_page_Maincontent">
  <div className="admin_page_Helloadmin">Hello Inventor!!</div>
  <div className="admin_page_InputContainer">
    <Input type="text" placeholder="Email" />
    <Input type="password" placeholder="Password" />
  </div>
  <div className="admin_page_Forgotpassword">forgot password?</div>
  <div className="admin_page_buttoncontainer">
    <Button content="Login" />
  </div>
  <HorizontalRule />
  <div className="admin_page_Register">Register Here</div>
  <div className="admin_page_buttoncontainer">
    <Button content="Sign Up" />
  </div>
</div>
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