import { FOOD_URL } from "../Utils/constants";

const ResCard = (props) => {
    const {resData} = props;
    // const {name, avgRating, cuisines, costForTwo, deliveryTime} = resData?.data;
    const {name, imageID, cuisines, rating, cost} = resData?.data;

    return (
      <div className='res-card'>          
        <h3>{name}</h3>
        <div className='res-card-image-container'>
          <img className='res-image' src={FOOD_URL} alt='hotel-dish' />
        </div>
        <h4>{cuisines}</h4>
        <h4>{rating} stars</h4>
        <h4>Rs. {cost/100} for two</h4>
      </div>
    );
  }

  export default ResCard;