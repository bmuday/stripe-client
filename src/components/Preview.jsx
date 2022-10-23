import { Link } from "react-router-dom";

const Preview = ({ product, mini, onRemoveFromCart }) => {
  const { id, value } = product;
  return mini ? (
    <div className="mini__preview" style={{ backgroundColor: `${value}` }}>
      <button
        className="mini__preview__delete"
        onClick={() => onRemoveFromCart(id)}
      >
        X
      </button>
    </div>
  ) : (
    <Link to={`/card-details/${id}`}>
      <div className="preview" style={{ backgroundColor: `${value}` }}></div>
    </Link>
  );
};

export default Preview;
