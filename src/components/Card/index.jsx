import "./style.css";

import { Typography } from "@mui/material";

export default function Card() {
  return (
    <div
      className="card"
      style={{
        backgroundImage: "url('./images/home.jpg')",
        backgroundSize: "cover",
      }}
    >
      <Typography variant="h4" color="white" style={{ marginBottom: 10 }}>
        Hello
      </Typography>
    </div>
  );
}
