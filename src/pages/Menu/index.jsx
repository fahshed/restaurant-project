import { Card, Layout } from "../../components";

import { Grid } from "@mui/material";

export default function Menu() {
  return (
    <div>
      <Layout imageName="pizza-back.jpg">
        <Grid container justifyContent="center">
          <Grid item lg={6} xs={11}>
            <Card
              itemName="American Favourite Feast"
              itemDescription="Chicken sausage, Beef pepperoni come together with seasoned mushrooms
              and green chilli to deliver a spicy and meaty mouthfeel."
              price="10.55"
              imageName="pizza/american_fav_feast.jpg"
            />

            <Card
              itemName="Hariyali Chicken"
              itemDescription="A pizza for kebab lovers with thick chunks of Hariyali Kebab, Capsicum & Green Chilies."
              price="15.55"
              imageName="pizza/Hariyali_Chicken_4156.jpg"
            />

            <Card
              itemName="Sausage & Pepperoni"
              itemDescription="Beef Pepperoni, Chicken Sausage and just a subtle hint of tangy and spicy jalapeno."
              price="12.55"
              imageName="pizza/Pepperoni.jpg"
            />

            <Card
              itemName="Spicy Chicken"
              itemDescription="A classic spicy chicken pizza with spicy chicken, crispy capsicum and red onion."
              price="8.65"
              imageName="pizza/spicy_chicken.jpg"
            />
          </Grid>
        </Grid>

        {/* <Grid container>
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Card />
          </Grid>

          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Card />
          </Grid>

          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Card />
          </Grid>

          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Card />
          </Grid>

          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Card />
          </Grid>

          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Card />
          </Grid>

          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Card />
          </Grid>

          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Card />
          </Grid>

          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Card />
          </Grid>
        </Grid> */}
      </Layout>
    </div>
  );
}
