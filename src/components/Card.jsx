import Preview from "./Preview";

const Card = ({ product }) => {
  const { name, category, price, value } = product;
  const handleClick = () => {};
  return (
    <div>
      <Preview value={value} />
      <p>{category}</p>
      <p>{name}</p>
      <p>{price}</p>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
};

export default Card;
