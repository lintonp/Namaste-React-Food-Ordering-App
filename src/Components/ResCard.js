import { SWIGGY_ClaudinaryImage_URL } from "../Utils/constants";

const ResCard = (props) => {
    const {resData} = props;
    // const {name, avgRating, cuisines, costForTwo, deliveryTime} = resData?.data;
    const {name, cloudinaryImageId, cuisines, avgRating, costForTwoString} = resData?.data;

    return (
      <div className='res-card'>          
        <h3>{name}</h3>
        <div className='res-card-image-container'>
          <img className='res-image' src={SWIGGY_ClaudinaryImage_URL+cloudinaryImageId} alt='hotel-dish' />
        </div>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwoString}</h4>
      </div>
    );
  }

  export default ResCard;