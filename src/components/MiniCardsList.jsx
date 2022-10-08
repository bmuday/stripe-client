import Card from "./Card";

const MiniCardsList = () => {
  const selectedProducts = [
    {
      id: 11,
      name: "Alizarin",
      category: "color",
      price: 60,
      value: "#e74c3c",
    },
    {
      id: 12,
      name: "Pomegranate",
      category: "color",
      price: 30,
      value: "#c0392b",
    },
  ];
  return (
    <div className="mini__cardslist__container">
      {selectedProducts &&
        selectedProducts.map((product) => (
          <Card key={product.id} product={product} mini={true} />
        ))}
    </div>
  );
};

export default MiniCardsList;
