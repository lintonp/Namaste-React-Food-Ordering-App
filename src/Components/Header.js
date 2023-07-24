import { useState } from "react";
import { Logo_URL } from "../Utils/constants";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Header = () => {    
  const [loginbtn, setLoginbtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  console.log("Header Rendered");

    return (
      <div className='header'>
        <div className='image-container'>
          <img className='app-logo' src={Logo_URL} alt='Food-Ordering-App-Logo' />
        </div>
        <div className='navbar'>
          <ul>
            <li>Online Status: {onlineStatus?"On":"Off"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li>Cart</li>
            <button onClick={()=>{
              loginbtn === "Login" ?
              setLoginbtn("Logout") : 
              setLoginbtn("Login");
            }}>{loginbtn}</button>
          </ul>
        </div>
      </div>
    );
  }

  export default Header;