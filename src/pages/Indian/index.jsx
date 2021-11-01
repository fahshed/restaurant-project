import { Typography } from "@mui/material";

import Card from "../../components/Card";

export default function Indian() {
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
          Indian
        </Typography>

        <Typography
          color="white"
          marginTop="10px"
          align="center"
          fontStyle="italic"
          style={{ textShadow: "1px 1px #000000" }}
        >
          Indian food is always hailed for its colorful curries and complex
          flavors. With its use of cumin, tamarind, pepper, and other powerful
          spicy ingredients ensuing taste combinations unlike anything found
          around the globe. There is a reason why Indian food is so tasty—it is
          the fewer numbers of overlapping flavors in ingredients that bring out
          a unique flavor.
        </Typography>
      </div>

      <Card
        itemName="Tikka Masala"
        calory={200}
        itemDescription="Small chunk chicken/beef are cooked in a sauce with a particular spice blend, it is called Tikka Masala."
        price="15.55"
        imageName="indian/tikka-masala.png"
      />

      <Card
        itemName="Matar Paneer"
        calory={150}
        itemDescription="It’s made up of a yummy tomato sauce over paneer (farmer’s cheese) and peas, and spiced with garam masala."
        price="10.55"
        imageName="indian/panir.png"
      />

      <Card
        itemName="Samosas"
        calory={100}
        itemDescription="Spicy potato or meat filling that are wrapped in dough and deep fried until crispy and flaky."
        price="8.55"
        imageName="indian/samosas.jpg"
      />

      <Card
        itemName="Naan"
        calory={80}
        itemDescription="Naan is a leavened, oven-baked flatbread."
        price="1.65"
        imageName="indian/garlic-naan.jpg"
      />
    </div>
  );
}
