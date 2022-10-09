import Card from "./Card";

const MiniCardsList = ({ selectedProducts }) => {
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
