import { Logo_URL } from "../Utils/constants";

const Header = () => {    
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
          </ul>
        </div>
      </div>
    );
  }

  export default Header;