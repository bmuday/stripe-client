import MiniCardsList from "./MiniCardsList";

const CheckoutCart = ({ total }) => {
  return (
    <div className="checkout__cart__container">
      <div className="checkout__cart__list">
        <MiniCardsList />
      </div>
      <div className="checkout__cart__footer">
        <div className="checkout__cart__total">
          <span>TOTAL</span>
          <span>${total}</span>
        </div>
        <div className="checkout__cart__button__div">
          <button className="checkout__cart__button">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;
