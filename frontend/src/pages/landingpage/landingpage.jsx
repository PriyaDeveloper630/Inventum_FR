import NavBar from "./Navbar";
import Content from "./content";
import Header from "./Header";

function landingpage(){
  return (
    <div className="landingPage">
    <Header/>
    <NavBar/>
    <Content/>
    </div>
  )
}

export default landingpage;