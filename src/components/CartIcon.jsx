const CartIcon = ({ totalCount, onDisplayCart }) => {
  return (
    <div>
      <img
        className={"cart__icon"}
        onClick={onDisplayCart}
        src="./media/cart.png"
        alt="Cart Icon"
      ></img>
      <span className="cart__icon__total">{totalCount}</span>
    </div>
  );
};

export default CartIcon;
