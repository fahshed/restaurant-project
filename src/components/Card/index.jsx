import "./style.css";

import { Typography, Button } from "@mui/material";

import useWidth from "../../hooks/useWidth";

export default function Card({ itemName, itemDescription, price, imageName }) {
  const screenWidth = useWidth();

  console.log(screenWidth);

  const imageDimension = screenWidth === "xs" ? "100px" : "200px";

  return (
    <div className="card">
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: screenWidth === "xs" ? "space-between" : "flex-start",
        }}
      >
        <Typography
          variant={screenWidth === "xs" ? "h6" : "h4"}
          marginBottom="10px"
        >
          {itemName}
        </Typography>

        <Typography variant={screenWidth === "xs" ? "body2" : "h6"}>
          {itemDescription}
        </Typography>

        <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#daa520", marginRight: 8 }}
          >
            Add to Cart
          </Button>
          <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
            {price}$
          </Typography>
        </div>
      </div>

      <img
        src={"./images/" + imageName}
        alt="food"
        height={imageDimension}
        width={imageDimension}
        style={{
          borderRadius: screenWidth === "xs" ? "10px" : "20px",
          marginLeft: screenWidth === "xs" ? "8px" : "16px",
        }}
      />
    </div>
  );
}
