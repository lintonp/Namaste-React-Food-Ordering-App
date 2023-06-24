import { useState } from "react";
import { Logo_URL } from "../Utils/constants";

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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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