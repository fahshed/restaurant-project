import { Typography } from "@mui/material";

import Card from "../../components/Card";

export default function Pizza() {
  window.scrollTo(0, 0);

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
          Pizza
        </Typography>

        <Typography
          color="white"
          marginTop="10px"
          align="center"
          fontStyle="italic"
          style={{ textShadow: "1px 1px #000000" }}
        >
          We make fresh handcrafted pizza that people connect over. That's our
          thing. We source only the freshest and highest quality ingredients. We
          use only the best spring wheat that money can buy.
        </Typography>
      </div>

      <Card
        itemName="American Favourite Feast"
        calory={100}
        itemDescription="Chicken sausage, Beef pepperoni come together with seasoned mushrooms
              to deliver meaty mouthfeel."
        price="10.55"
        imageName="pizza/american_fav_feast.jpg"
      />

      <Card
        itemName="Hariyali Chicken"
        calory={90}
        itemDescription="A pizza for kebab lovers with thick chunks of Hariyali Kebab, Capsicum & Green Chilies."
        price="15.55"
        imageName="pizza/Hariyali_Chicken_4156.jpg"
      />

      <Card
        itemName="Sausage & Pepperoni"
        calory={120}
        itemDescription="Beef Pepperoni, Chicken Sausage and just a subtle hint of tangy and spicy jalapeno."
        price="12.55"
        imageName="pizza/Pepperoni.jpg"
      />

      <Card
        itemName="Spicy Chicken"
        calory={150}
        itemDescription="A classic spicy chicken pizza with spicy chicken, crispy capsicum and red onion."
        price="8.65"
        imageName="pizza/spicy_chicken.jpg"
      />
    </div>
  );
}
