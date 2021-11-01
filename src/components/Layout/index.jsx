import { Instagram, Facebook, Twitter, YouTube } from "@mui/icons-material";

import { Grid, IconButton, Typography } from "@mui/material";

import Navbar from "../Navbar";

export default function Layout({ children, imageName }) {
  return (
    <div
      style={{
        backgroundImage: `url('./images/${imageName}')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar page={imageName} />

      <div style={{ paddingTop: "70px", paddingBottom: "5vh" }}>{children}</div>

      <Grid
        container
        justifyContent="center"
        // alignItems="center"
        style={{
          paddingTop: 40,
          paddingBottom: 20,
          backgroundColor: "black",
        }}
      >
        <Grid item lg={7} xs={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: 20,
            }}
          >
            <IconButton size="large" style={{ color: "#fff" }}>
              <Facebook fontSize="large" />
            </IconButton>
            <IconButton size="large" style={{ color: "#fff" }}>
              <Instagram fontSize="large" />
            </IconButton>
            <IconButton size="large" style={{ color: "#fff" }}>
              <Twitter fontSize="large" />
            </IconButton>
            <IconButton size="large" style={{ color: "#fff" }}>
              <YouTube fontSize="large" />
            </IconButton>
          </div>
          <Typography color="white" align="center" marginBottom="10px">
            info@tajmahal.com
          </Typography>
          <Typography color="white" align="center">
            All contents ©Team TajMahal, 2021
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
