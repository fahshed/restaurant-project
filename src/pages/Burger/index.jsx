import Card from "../../components/Card";

import { Typography } from "@mui/material";

export default function Burger() {
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
          Burgers
        </Typography>

        <Typography
          color="white"
          marginTop="10px"
          align="center"
          fontStyle="italic"
          style={{ textShadow: "1px 1px #000000" }}
        >
          Burgers are life, and life is good at Taj Mahal, thanks to our
          impeccable burgers. Taj Mahal is no stranger to excellence, and, since
          we have no chill when it comes to promotion, we’re going to share just
          how much others love our burgers. We’re awesome and we know it—now you
          do too!
        </Typography>
      </div>

      <Card
        itemName="Whopper"
        calory={90}
        itemDescription="Is a ¼ lb* of savory flame-grilled beef topped with juicy tomatoes, fresh lettuce."
        price="9.55"
        imageName="burger/whopper.png"
      />
      <Card
        itemName="Whopper Jr."
        calory={80}
        itemDescription="Features one savory flame-grilled beef patty topped with juicy tomatoes, fresh lettuce."
        price="12.55"
        imageName="burger/whopper_jr.png"
      />
      <Card
        itemName="Impossible Whopper"
        calory={70}
        itemDescription="Features a flame-grilled patty made from plants topped with tomatoes, lettuce, pickles, and onions."
        price="7.85"
        imageName="burger/impossible_whopper.png"
      />
      <Card
        itemName="Bacon King"
        calory={110}
        itemDescription="Features two ¼ lb* savory flame-grilled beef patties, topped a with hearty portion of thick-cut smoked bacon."
        price="8.65"
        imageName="burger/bacon_king.png"
      />
    </div>
  );
}
