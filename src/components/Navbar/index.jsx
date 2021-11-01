import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { Grid, IconButton, Collapse } from "@mui/material";
import { ShoppingCartRounded, Menu } from "@mui/icons-material";

import "./style.css";
import useWidth from "../../hooks/useWidth";

export default function Navbar({ page }) {
  const color = Array(7).fill("transparent");
  const screenWidth = useWidth();

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    if (screenWidth === "xs" || screenWidth === "sm") {
      console.log("pressed");
      setChecked((prev) => !prev);
    }
  };

  // console.log(checked);
  // console.log(page);

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
    case "checkout-back.jpg":
      color[5] = "#daa520";
      break;
    case "about-back.jpg":
      color[6] = "#daa520";
      break;
    default:
      break;
  }

  return (
    <Grid container justifyContent="center" className="container">
      {(screenWidth === "xs" || screenWidth === "sm") && (
        <Grid item xs={2}>
          <div className="item">
            <IconButton onClick={handleChange}>
              <Menu style={{ color: "white" }} />
            </IconButton>
          </div>
        </Grid>
      )}

      <Grid item md={4} xs={8}>
        <Link
          to="/"
          className="item"
          style={{ paddingLeft: 10, paddingRight: 10 }}
        >
          <div style={{ borderBottom: `2px solid ${color[0]}` }}>
            <img
              src="images/white-logo.svg"
              alt="logo"
              height={screenWidth === "xs" ? "30px" : "40px"}
            />
          </div>
        </Link>
      </Grid>

      {screenWidth !== "xs" && screenWidth !== "sm" && (
        <Grid item md={4}>
          <Link onClick={handleChange} to="/indian" className="item">
            <div style={{ borderBottom: `2px solid ${color[1]}` }}>Indian</div>
          </Link>
          <Link to="/pizza" className="item">
            <div style={{ borderBottom: `2px solid ${color[2]}` }}>Pizza</div>
          </Link>
          <Link to="/burger" className="item">
            <div style={{ borderBottom: `2px solid ${color[3]}` }}>Burger</div>
          </Link>
          <Link to="/dessert" className="item">
            <div style={{ borderBottom: `2px solid ${color[4]}` }}>Dessert</div>
          </Link>
        </Grid>
      )}

      <Grid item md={4} xs={2}>
        {screenWidth !== "xs" && screenWidth !== "sm" && (
          <Link to="/about" className="item">
            <div style={{ borderBottom: `2px solid ${color[6]}` }}>About</div>
          </Link>
        )}
        <Link to="/checkout" className="item">
          <div
            style={{
              borderBottom: `2px solid ${color[5]}`,
            }}
          >
            <ShoppingCartRounded />
          </div>
        </Link>
      </Grid>

      {(screenWidth === "xs" || screenWidth === "sm") && (
        <Grid item xs={12}>
          <Collapse in={checked} style={{ width: "100%" }}>
            <Divider />
            <Link to="/indian" className="item">
              <div style={{ borderBottom: `2px solid ${color[1]}` }}>
                Indian
              </div>
            </Link>
            <Divider />
            <Link to="/pizza" className="item">
              <div style={{ borderBottom: `2px solid ${color[2]}` }}>Pizza</div>
            </Link>
            <Divider />
            <Link to="/burger" className="item">
              <div style={{ borderBottom: `2px solid ${color[3]}` }}>
                Burger
              </div>
            </Link>
            <Divider />
            <Link to="/dessert" className="item">
              <div style={{ borderBottom: `2px solid ${color[4]}` }}>
                Dessert
              </div>
            </Link>
            <Divider />
            <Link to="/about" className="item">
              <div style={{ borderBottom: `2px solid ${color[6]}` }}>About</div>
            </Link>
          </Collapse>
        </Grid>
      )}
    </Grid>
  );
}

function Divider() {
  return (
    <div style={{ height: "1px", backgroundColor: "grey", width: "100%" }} />
  );
}
