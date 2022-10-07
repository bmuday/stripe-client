import React from "react";
import MiniCardsList from "./MiniCardsList";

const CheckoutCart = ({ total }) => {
  return (
    <div className="checkout__cart__container">
      <div className="checkout__cart__list">
        <MiniCardsList />
      </div>
      <div className="checkout__cart__footer">
        <span>TOTAL</span>
        <span>${total}</span>
        <button className="checkout__cart__button">Checkout</button>
      </div>
    </div>
  );
};

export default CheckoutCart;
