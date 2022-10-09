import Preview from "./Preview";
const Card = ({ product, mini }) => {
  const { name, category, price } = product;
  if (name.length > 9) {
    console.log(`${name.substring(0, 8)}...`);
  } else {
    console.log(name);
  }
  const addToCart = () => {};
  return mini ? (
    <div className="mini__card__container">
      <Preview product={product} mini />
      <div className="mini__card__footer">
        <span className="card__name">
          {name.length > 7 ? `${name.substring(0, 7)}...` : name}
        </span>
        <span className="card__price">${price}</span>
      </div>
    </div>
  ) : (
    <div className="card__container">
      <Preview product={product} />
      <span className="card__category">{category}</span>
      <span className="card__name">
        {name.length > 12 ? `${name.substring(0, 12)}...` : name}
      </span>
      <span className="card__price">${price}</span>
      <button className="card__button" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
