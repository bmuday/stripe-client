import Preview from "./Preview";

const Card = ({ product, mini, onCount, onRemoveFromCart }) => {
  const { id, name, category, price, count } = product;
  return mini ? (
    <div className="mini__card__container">
      <Preview product={product} mini onRemoveFromCart={onRemoveFromCart} />
      <div>
        <div className="mini__card__infos">
          <div>
            <span className="mini__card__name">
              {name.length > 5 ? `${name.substring(0, 5)}...` : name}
            </span>
            <span className="mini__card__count"> x{count}</span>
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
      <div className="card__category">{category}</div>
      <div className="card__footer">
        <div className="card__infos">
          <span className="card__name">
            {name.length > 12 ? `${name.substring(0, 12)}...` : name}
          </span>
          <span className="card__price">${price}</span>
        </div>
        <button className="card__button" onClick={() => onCount(id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
