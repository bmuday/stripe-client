import React from "react";

const CheckoutIcon = ({ quantity }) => {
  return (
    <div>
      <img
        className="checkout__icon"
        src="./media/cart.png"
        alt="Checkout Icon"
      ></img>
      <span className="checkout__icon__quantity">{quantity}</span>
    </div>
  );
};

export default CheckoutIcon;
