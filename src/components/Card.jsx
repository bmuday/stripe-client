import Preview from "./Preview";
const Card = ({ product, mini }) => {
  const { name, category, price } = product;
  const addToCart = () => {};
  return mini ? (
    <div>
      <Preview product={product} mini />
      <p className="mini__card__name">{name}</p>
      <p className="mini__card__price">${price}</p>
    </div>
  ) : (
    <div className="card__container">
      <Preview product={product} />
      <p className="card__category">{category}</p>
      <p className="card__name">{name}</p>
      <p className="card__price">${price}</p>
      <button className="card__button" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
