import { Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

import { Layout } from "../../components";
import useWidth from "../../hooks/useWidth";

export default function Home() {
  const screenWidth = useWidth();

  window.scrollTo(0, 0);

  return (
    <Layout imageName="home-back.jpg">
      <div
        style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "5vh",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{
            paddingTop: "50px",
            paddingBottom: "50px",
            background: "rgba(0, 0, 0,  .5)",
          }}
        >
          <Grid item lg={5} xs={11}>
            <img
              src="images/gold-logo.svg"
              alt="logo"
              height={screenWidth === "xs" ? "80px" : "150px"}
            />
            <Typography
              variant="h5"
              color="white"
              marginTop="10px"
              marginBottom="10px"
            >
              Unexpected flavour forged and mingled with flourish.
            </Typography>
            <Typography variant="button" color="#daa520">
              Breakfast | Lunch | Dinner
            </Typography>
          </Grid>

          <Grid item lg={1} xs={0}></Grid>

          <Grid item lg={4} xs={11}>
            <Typography
              variant="h6"
              color="white"
              marginTop={screenWidth === "xs" ? "30px" : "0px"}
              style={{ textShadow: "1px 1px #000" }}
            >
              Welcome to Taj Mahal, where we are dedicated to provide you with
              the best dining experience. Come join us for breakfast, lunch or
              dinner and dine on our outdoor patio or in the newly remodeled
              dining room. Take a look at our menu items, find what you like.
            </Typography>

            <Typography variant="h6" color="#daa520" marginBottom="30px">
              Happy Cuisine!
            </Typography>

            <Button
              variant="contained"
              style={{ backgroundColor: "#daa520" }}
              size="large"
              component={Link}
              to="/booking"
            >
              Book a table
            </Button>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
