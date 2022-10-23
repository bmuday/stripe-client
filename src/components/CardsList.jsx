import Card from "./Card";

const CardsList = ({ products, onCount }) => {
  return (
    <div className="cardslist__container">
      {products &&
        products.map((product) => (
          <Card key={product.id} product={product} onCount={onCount} />
        ))}
    </div>
  );
};

export default CardsList;
