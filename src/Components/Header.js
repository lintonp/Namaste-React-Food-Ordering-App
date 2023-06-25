import { useState } from "react";
import { Logo_URL } from "../Utils/constants";

import { Link } from "react-router-dom";

const Header = () => {    
  const [loginbtn, setLoginbtn] = useState("Login");

  console.log("Header Rendered");

    return (
      <div className='header'>
        <div className='image-container'>
          <img className='app-logo' src={Logo_URL} alt='Food-Ordering-App-Logo' />
        </div>
        <div className='navbar'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
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