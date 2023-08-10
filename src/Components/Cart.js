import { useSelector } from "react-redux";

import RestaurantCategoryFoodItems from "./RestaurantCategoryFoodItems";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cartTotal, setCartTotal] = useState(0);

  const cartItems = useSelector((state) => state.cart.items);
  const cartIDs = useSelector((state) => state.cart.itemsIds);
  console.log("cartItems", cartItems);
  console.log(cartIDs);

  useEffect(() => {
    calculateCartTotal();
  }, [cartIDs]);

  const calculateCartTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      console.log("item.price", item.price);
      console.log("cartIDs[item.id]", cartIDs[item.id]);
      total += (item.price / 100) * cartIDs[item.id];
      console.log("total", total);
    });
    setCartTotal(total);
  };

  //   items === []
  //     ? items.forEach((item) => {
  //         console.log(item.name + " - " + cartIDs[item.id]);
  //       })
  //     : console.log(items);

  // return <h1>Cart</h1>; //{cartItems.map(item => <RestaurantCategoryFoodItems key={item.id} food={item} />)};
  if (cartItems.length === 0) {
    return (
      <div className="place-items-center">
        <h1>Cart is empty, add items to checkout</h1>
      </div>
    );
  }

  return (
    <div className="place-content-center w-8/12">
      {cartItems.map((item) => (
        <RestaurantCategoryFoodItems key={item.id} food={item} />
      ))}
      <h1>Cart Total: {cartTotal}</h1>
    </div>
  );
};

export default Cart;
