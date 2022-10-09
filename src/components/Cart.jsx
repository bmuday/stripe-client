import { Link } from "react-router-dom";
import MiniCardsList from "./MiniCardsList";

const Cart = ({ total, selectedProducts }) => {
  return (
    <div className="cart__container">
      <MiniCardsList selectedProducts={selectedProducts} />
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
