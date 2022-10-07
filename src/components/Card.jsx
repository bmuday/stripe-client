import Preview from "./Preview";

const Card = ({ product }) => {
  const { name, category, price, value } = product;
  const handleClick = () => {};
  return (
    <div className="card__container">
      <Preview value={value} />
      <p className="card__category">{category}</p>
      <p className="card__name">{name}</p>
      <p className="card__price">${price}</p>
      <button className="card__button" onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
