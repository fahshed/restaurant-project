import { Typography, IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

export default function OrderCard({
  name,
  price,
  picture,
  count,
  onIncrese,
  onDecrease,
}) {
  return (
    <div
      style={{
        marginBottom: 10,
        padding: 10,
        height: 100,
        backgroundColor: "#eee",
        display: "flex",
      }}
    >
      <img src={`./images/${picture}`} alt="food" height="100%" width="100px" />
      <div
        style={{
          marginLeft: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body1">{price}$</Typography>
        <div>
          <IconButton
            style={{
              backgroundColor: "#daa520",
              color: "white",
              borderRadius: 8,
              padding: 5,
              boxShadow: "0 2px 2px rgb(0 0 0 / 0.5)",
              marginRight: 8,
            }}
            onClick={onIncrese}
          >
            <Add />
          </IconButton>
          {count}
          <IconButton
            style={{
              backgroundColor: "#daa520",
              color: "white",
              borderRadius: 8,
              padding: 5,
              boxShadow: "0 2px 2px rgb(0 0 0 / 0.5)",
              marginLeft: 8,
            }}
            onClick={onDecrease}
          >
            <Remove />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
