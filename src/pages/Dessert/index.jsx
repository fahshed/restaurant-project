import { Typography } from "@mui/material";

import Card from "../../components/Card";

export default function Dessert() {
  return (
    <div>
      <div
        style={{
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingTop: "25px",
          paddingBottom: "25px",
          marginBottom: "30px",
          borderRadius: "0px 0px 25px 25px",
          background: "rgba(0, 0, 0,  .5)",
        }}
      >
        <Typography
          variant="h3"
          color="#daa520"
          align="center"
          style={{ textShadow: "2px 2px #000000" }}
        >
          Dessert
        </Typography>

        <Typography
          color="white"
          marginTop="10px"
          align="center"
          fontStyle="italic"
          style={{ textShadow: "1px 1px #000000" }}
        >
          After a rich and tasty dinner, we usually ask for a bill so that we
          can go home as soon as possible. However, it is enough to wait just a
          moment for us to suddenly feel like something sweet. That is why it is
          also worth trying a tasty dessert that will be the perfect culmination
          of a successful meal. At Taj Mahal we have prepared a few interesting
          items that are impossible to pass by indifferently. A dessert for any
          weather.
        </Typography>
      </div>

      <Card
        itemName="Brownies Walnut"
        calory={50}
        itemDescription="Our very own soft brownies temptingly topped with melted chocolate and walnuts."
        price="5.55"
        imageName="dessert/brownies-walnut.jpg"
      />

      <Card
        itemName="New York Cheese"
        calory={60}
        itemDescription="Baked soft creamy cheese with chocolate cookie base."
        price="6.55"
        imageName="dessert/NEW-YORK-CHEESE.jpg"
      />

      <Card
        itemName="Classic Tiramisu"
        calory={100}
        itemDescription="It is made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, cheese, flavored with cocoa."
        price="8.55"
        imageName="dessert/tiramisu.png"
      />

      <Card
        itemName="Chocolate Indulgance"
        calory={80}
        itemDescription="Creamy and rich Belgian coverture chocolate and white chocolate filling."
        price="6.65"
        imageName="dessert/CHOCOLATE-INDULGENCE-CAKE-600x0.jpg"
      />
    </div>
  );
}
