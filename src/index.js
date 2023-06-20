import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import appLogo from './AppLogo.png'
import foodImage from './ChickenBiryani.jpg'


const Heading = () => {
  // const imageSrc = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20220719%2Foriginal%2Fpngtree-food-logo-png-image_8367537.png&tbnid=cmigpE0JiI4WSM&vet=12ahUKEwjSr6uP28__AhXQltgFHQAPAtcQMyheegUIARCvAQ..i&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Ffood-logo&docid=y3W4ZkIkZ59XqM&w=1200&h=1200&q=food%20icon%20images%20for%20home%20banner&ved=2ahUKEwjSr6uP28__AhXQltgFHQAPAtcQMyheegUIARCvAQ";
  return (
    <div className='header'>
      <div className='image-container'>
        <img className='app-logo' src={appLogo} alt='Food-Ordering-App-Logo' />
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

const ResCard = () => {
  // const biryaniImage = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.licious.in%2Fblog%2Fwp-content%2Fuploads%2F2022%2F06%2Fchicken-hyderabadi-biryani-01.jpg&tbnid=WDeZeD4Aq11VEM&vet=12ahUKEwjYqf-X4c__AhWCg9gFHcaMC9sQMygLegUIARCtAg..i&imgrefurl=https%3A%2F%2Fwww.licious.in%2Fblog%2Frecipe%2Fhyderabadi-chicken-biryani-recipe-2&docid=hhSRDS503Q7lYM&w=900&h=900&q=chicken%20biryani&ved=2ahUKEwjYqf-X4c__AhWCg9gFHcaMC9sQMygLegUIARCtAg";
  return (
    <div className='res-card'>          
      <h3>Zaffran</h3>
      <div className='res-card-image-container'>
        <img className='res-image' src={foodImage} alt='hotel-dish' />
      </div>
      <h4>North Indian, Italian</h4>
      <h4>4.3 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
}

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
      </div>
    </div>
  );
}

const AppLayout = () => { 
  return (
    <>
      <Heading />
      <Body />
    </> 
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <AppLayout /> );