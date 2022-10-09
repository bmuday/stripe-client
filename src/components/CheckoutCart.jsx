import { Link } from "react-router-dom";
import MiniCardsList from "./MiniCardsList";

const CheckoutCart = ({ total, selectedProducts }) => {
  return (
    <div className="checkout__cart__container">
      <div className="checkout__cart__list">
        <MiniCardsList selectedProducts={selectedProducts} />
      </div>
      <div className="checkout__cart__link__container">
        {selectedProducts.length > 4 && <p>More items...</p>}
        <Link className="checkout__cart__link" to="/checkout">
          Checkout
        </Link>
      </div>
      <div className="checkout__cart__footer">
        <div className="checkout__cart__total">
          <div>TOTAL</div>
          <div>${total}</div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;
