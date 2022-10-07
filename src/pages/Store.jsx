import CardsList from "../components/CardsList";
import CheckoutCart from "../components/CheckoutCart";
import CheckoutIcon from "../components/CheckoutIcon";

const Store = () => {
  return (
    <div className="store__container">
      <CheckoutIcon quantity={5} />
      <CheckoutCart total={100} />
      <CardsList />
    </div>
  );
};

export default Store;
