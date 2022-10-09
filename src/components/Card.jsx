import Preview from "./Preview";
const Card = ({ product, mini }) => {
  const { name, category, price } = product;
  const addToCart = () => {};
  return mini ? (
    <div className="mini__card__container">
      <Preview product={product} mini />
      <div>
        <div className="mini__card__infos">
          <div>
            <span className="mini__card__name">
              {name.length > 5 ? `${name.substring(0, 5)}...` : name}
            </span>
            <span className="mini__card__count"> x{5}</span>
          </div>
          <div>
            <span className="mini__card__price"> ${price}</span>
          </div>
        </div>
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
