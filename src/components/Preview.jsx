import { Link } from "react-router-dom";

const Preview = ({ product, mini }) => {
  const { id, value } = product;
  return mini ? (
    <div className="mini__preview" style={{ backgroundColor: `${value}` }}>
      <div className="mini__preview__delete">X</div>
    </div>
  ) : (
    <Link to={`/card-details/${id}`}>
      <div className="preview" style={{ backgroundColor: `${value}` }}>
        {value}
      </div>
    </Link>
  );
};

export default Preview;
