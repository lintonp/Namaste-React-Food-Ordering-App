import { SWIGGY_ClaudinaryImage_URL } from "../Utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  // const {name, avgRating, cuisines, costForTwo, deliveryTime} = resData?.data;
  const { name, cloudinaryImageId, cuisines, avgRating, feeDetails } =
    resData?.info;

  // const { loggedinUser } = userContext(useContext);

  return (
    <div className="m-4 p-2 w-[200px] box-border border-solid rounded-lg bg-gray-100 hover:bg-gray-200">
      <div className="res-card-image-container">
        <img
          className="rounded-md"
          src={SWIGGY_ClaudinaryImage_URL + cloudinaryImageId}
          alt="hotel-dish"
        />
      </div>
      <h3 className="font-bold py-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>₹{feeDetails?.totalFee / 10}</h4>
      <h4>{avgRating} stars</h4>
      {/* <h3>For {loggedinUser}</h3> */}
    </div>
  );
};

//Higher Order Component
export const withVeg = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-400">Veg</label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
