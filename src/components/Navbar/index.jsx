import { Link } from "react-router-dom";

import "./style.css";

export default function Navbar({ page }) {
  const color = Array(4).fill("transparent");
  console.log(page);

  switch (page) {
    case "home-back.jpg":
      color[0] = "#daa520";
      break;
    case "pizza-back.jpg":
      color[1] = "#daa520";
      break;
    case "burger-back.jpg":
      color[2] = "#daa520";
      break;
    default:
      color[3] = "#daa520";
      break;
  }

  return (
    <div className="container">
      <Link to="/">
        <div style={{ borderBottom: `2px solid ${color[0]}` }}>Home</div>
      </Link>
      <Link to="/pizza">
        <div style={{ borderBottom: `2px solid ${color[1]}` }}>Pizza</div>
      </Link>
      <Link to="/burger">
        <div style={{ borderBottom: `2px solid ${color[2]}` }}>Burger</div>
      </Link>
      <Link to="/about">
        <div style={{ borderBottom: `2px solid ${color[3]}` }}>About</div>
      </Link>
    </div>
  );
}
