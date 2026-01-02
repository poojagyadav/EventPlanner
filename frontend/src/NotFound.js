import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center mt-5">
      <h1 className="fw-bold">404</h1>
      <p>Page not found</p>
      <Link to="/" className="btn btn-dark">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
