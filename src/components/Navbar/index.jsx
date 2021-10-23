import { Link } from "react-router-dom";

import "./style.css";

export default function Navbar({ page }) {
  const color = Array(6).fill("transparent");

  switch (page) {
    case "home-back.jpg":
      color[0] = "#daa520";
      break;
    case "indian-back.jpg":
      color[1] = "#daa520";
      break;
    case "pizza-back.jpg":
      color[2] = "#daa520";
      break;
    case "burger-back.jpg":
      color[3] = "#daa520";
      break;
    case "dessert-back.jpg":
      color[4] = "#daa520";
      break;
    default:
      color[5] = "#daa520";
      break;
  }

  return (
    <div className="container">
      <Link to="/">
        <div style={{ borderBottom: `2px solid ${color[0]}` }}>Home</div>
      </Link>
      <Link to="/indian">
        <div style={{ borderBottom: `2px solid ${color[1]}` }}>Indian</div>
      </Link>
      <Link to="/pizza">
        <div style={{ borderBottom: `2px solid ${color[2]}` }}>Pizza</div>
      </Link>
      <Link to="/burger">
        <div style={{ borderBottom: `2px solid ${color[3]}` }}>Burger</div>
      </Link>
      <Link to="/dessert">
        <div style={{ borderBottom: `2px solid ${color[4]}` }}>Dessert</div>
      </Link>
      <Link to="/about">
        <div style={{ borderBottom: `2px solid ${color[5]}` }}>About</div>
      </Link>
    </div>
  );
}
