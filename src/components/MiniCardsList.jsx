import Card from "./Card";

const MiniCardsList = ({ selectedProducts, onRemoveFromCart }) => {
  return (
    <div className="mini__cardslist__container">
      {selectedProducts &&
        selectedProducts.map((product) => (
          <Card
            key={product.id}
            product={product}
            mini={true}
            onRemoveFromCart={onRemoveFromCart}
          />
        ))}
    </div>
  );
};

export default MiniCardsList;
