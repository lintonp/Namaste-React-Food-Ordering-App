import { useContext, useState } from "react";
import { Logo_URL } from "../Utils/constants";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { Link } from "react-router-dom";

import userContext from "../Utils/useContext";

const Header = () => {
  const [loginbtn, setLoginbtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedinUser } = useContext(userContext);

  return (
    <div className="flex justify-between shadow-md bg-pink-50">
      <div className="image-container">
        <img className="w-24" src={Logo_URL} alt="Food-Ordering-App-Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-3">
          <li className="px-3">Online Status: {onlineStatus ? "On" : "Off"}</li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3">Cart</li>
          <li className="px-3">{loggedinUser}</li>
          <li className="px-3">
            <button
              onClick={() => {
                loginbtn === "Login"
                  ? setLoginbtn("Logout")
                  : setLoginbtn("Login");
              }}
            >
              {loginbtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
