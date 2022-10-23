import { Link } from "react-router-dom";
import MiniCardsList from "./MiniCardsList";

const Cart = ({ total, selectedProducts, onRemoveFromCart, displayCart }) => {
  console.log("displayCart", displayCart);
  return (
    <div className={`${displayCart ? "cart__container" : "cart__hidden"}`}>
      <MiniCardsList
        selectedProducts={selectedProducts}
        onRemoveFromCart={onRemoveFromCart}
      />
      <div className="cart__footer">
        <div className="cart__total">
          <span>TOTAL</span>
          <span>${total}</span>
        </div>
        <div className="cart__link__container">
          <Link className="cart__link" to="/checkout">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
