import "./style.css";

import { Typography, Button } from "@mui/material";

import useWidth from "../../hooks/useWidth";

export default function Card({
  itemName,
  calory,
  itemDescription,
  price,
  imageName,
}) {
  const screenWidth = useWidth();

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
        <div>
          <Typography variant={screenWidth === "xs" ? "h6" : "h4"}>
            {itemName}
          </Typography>

          <Typography variant={screenWidth === "xs" ? "body2" : "body1"}>
            {calory} Cal
          </Typography>
        </div>

        <Typography
          variant={screenWidth === "xs" ? "body2" : "h6"}
          color="#808080"
        >
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
