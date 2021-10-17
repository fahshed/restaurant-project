import { Link } from "react-router-dom";

import "./style.css";

export default function Navbar() {
  return (
    <div className="container">
      <div>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Home
        </Link>
      </div>
      <div>
        <Link to="/menu" style={{ textDecoration: "none", color: "white" }}>
          Pizza
        </Link>
      </div>
      <div>
        <Link to="#" style={{ textDecoration: "none", color: "white" }}>
          About
        </Link>
      </div>
    </div>
  );
}
