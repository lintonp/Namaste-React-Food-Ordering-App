import { useDispatch, useSelector } from "react-redux";

import RestaurantCategoryFoodItems from "./RestaurantCategoryFoodItems";
import { useEffect, useState } from "react";

import { clearCart } from "../Store/CartSlice";

const Cart = () => {
  const [cartTotal, setCartTotal] = useState(0);

  const cartItems = useSelector((state) => state.cart.items);
  const cartIDs = useSelector((state) => state.cart.itemsIds);
  console.log("cartItems", cartItems);
  console.log(cartIDs);

  const dispath = useDispatch();

  const handleClearCart = () => {
    dispath(clearCart());
  };

  useEffect(() => {
    calculateCartTotal();
  }, [cartIDs]);

  const calculateCartTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      console.log("item.price", item.price);
      console.log("cartIDs[item.id]", cartIDs[item.id]);
      total += parseFloat((item.price / 100).toFixed(2)) * cartIDs[item.id];
      console.log("total", total);
    });
    setCartTotal(parseFloat(total.toFixed(2)));
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
    <div className="m-4 p-2">
      <div className="text-right mx-16">
        <button className="font-semibold" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
      <div className="m-4 p-2 flex place-self-center">
        <div className="items-center place-items-center w-8/12">
          {cartItems.map((item) => (
            <RestaurantCategoryFoodItems key={item.id} food={item} />
          ))}
          <div className="">
            <h1 className="font-bold text-end">Cart Total: {cartTotal}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;