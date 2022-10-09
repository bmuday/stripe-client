import CardsList from "../components/CardsList";
import CheckoutCart from "../components/CheckoutCart";
import CheckoutIcon from "../components/CheckoutIcon";

const Store = () => {
  // const selectedProducts = () => {};
  const selectedProducts = [
    {
      id: 8,
      name: "Pumpkin",
      price: 120,
      value: "#d35400",
      selectedItemCount: 0,
    },
    {
      id: 9,
      name: "Peter River",
      price: 10,
      value: "#3498db",
      selectedItemCount: 0,
    },
    {
      id: 10,
      name: "Belize Hole",
      price: 40,
      value: "#2980b9",
      selectedItemCount: 0,
    },
    {
      id: 11,
      name: "Alizarin",
      price: 60,
      value: "#e74c3c",
      selectedItemCount: 0,
    },
    {
      id: 12,
      name: "Pomegranate",
      price: 30,
      value: "#c0392b",
      selectedItemCount: 0,
    },
  ];

  return (
    <div className="store__container">
      <CheckoutIcon quantity={5} />
      <CardsList />
      <CheckoutCart total={100} selectedProducts={selectedProducts} />
    </div>
  );
};

export default Store;
