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

const resList = [{}, {}];

const ResCard = (props) => {
  const biryaniImage = "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01-750x750.jpg";
  // const {resData} = props;
  // const {name, avgRating, cuisines, costForTwo, deliveryTime} = resData?.data;
  return (
    <div className='res-card'>          
      <h3>Zaffran</h3>
      <div className='res-card-image-container'>
        <img className='res-image' src={biryaniImage} alt='hotel-dish' />
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
        {/* {
          resList.map((restaurant) => {
            <ResCard key={restaurant.data.id} resData={resList} />
          })
        } */}
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