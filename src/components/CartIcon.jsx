const CartIcon = ({ quantity }) => {
  return (
    <div>
      <img className="cart__icon" src="./media/cart.png" alt="Cart Icon"></img>
      <span className="cart__icon__quantity">{quantity}</span>
    </div>
  );
};

export default CartIcon;
