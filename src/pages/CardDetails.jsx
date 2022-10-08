import { useParams, Link } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <div>CardDetails {id}</div>
      <Link to="/store">Back To Products</Link>
    </div>
  );
};

export default CardDetails;
