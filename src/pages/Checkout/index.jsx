import { useState, useEffect } from "react";

import {
  Grid,
  Typography,
  TextField,
  styled,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import { Layout, OrderCard } from "../../components";

import "./style.css";

const customTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#daa520",
      light: "#daa520",
      dark: "#daa520",
    },
  },
});

export default function Checkout() {
  const [itemCounts, setItemCounts] = useState({
    one: 1,
    two: 1,
    three: 1,
    four: 1,
  });

  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmailError(!re.test(String(email).toLowerCase()));
  };

  const validatePhone = (phone) => {
    const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    setPhoneError(!re.test(String(phone)));
  };

  const subTotal =
    Math.round(
      (10.55 * itemCounts.one +
        6.65 * itemCounts.two +
        15.55 * itemCounts.three +
        7.85 * itemCounts.four) *
        100
    ) / 100;
  const tax = subTotal * 0.075;
  const total = subTotal + tax + 7;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout imageName="checkout-back.jpg">
      <div style={{ minHeight: "90vh" }}>
        <Grid container justifyContent="center">
          <Grid item lg={6} xs={11}>
            <div style={{ padding: 15, background: "rgba(0, 0, 0,  .7)" }}>
              <Typography
                variant="h4"
                color="#daa520"
                marginBottom="20px"
                style={{ textShadow: "1px 1px #000" }}
                align="center"
              >
                Order Summery
              </Typography>

              <Grid container justifyContent="center">
                <Grid item lg={8} xs={12}>
                  <OrderCard
                    name="American Favourite Feast"
                    price={10.55}
                    picture="pizza/american_fav_feast.jpg"
                    count={itemCounts.one}
                    onIncrese={() =>
                      setItemCounts({ ...itemCounts, one: itemCounts.one + 1 })
                    }
                    onDecrease={() =>
                      setItemCounts({
                        ...itemCounts,
                        one: itemCounts.one === 0 ? 0 : itemCounts.one - 1,
                      })
                    }
                  />
                  <OrderCard
                    name="Chocolate Indulgance"
                    price={6.65}
                    picture="dessert/CHOCOLATE-INDULGENCE-CAKE-600x0.jpg"
                    count={itemCounts.two}
                    onIncrese={() =>
                      setItemCounts({ ...itemCounts, two: itemCounts.two + 1 })
                    }
                    onDecrease={() =>
                      setItemCounts({
                        ...itemCounts,
                        two: itemCounts.two === 0 ? 0 : itemCounts.two - 1,
                      })
                    }
                  />
                  <OrderCard
                    name="Tikka Masala"
                    price={15.55}
                    picture="indian/tikka-masala.png"
                    count={itemCounts.three}
                    onIncrese={() =>
                      setItemCounts({
                        ...itemCounts,
                        three: itemCounts.three + 1,
                      })
                    }
                    onDecrease={() =>
                      setItemCounts({
                        ...itemCounts,
                        three:
                          itemCounts.three === 0 ? 0 : itemCounts.three - 1,
                      })
                    }
                  />
                  <OrderCard
                    name="Impossible Whopper"
                    price={7.85}
                    picture="burger/impossible_whopper.png"
                    count={itemCounts.four}
                    onIncrese={() =>
                      setItemCounts({
                        ...itemCounts,
                        four: itemCounts.four + 1,
                      })
                    }
                    onDecrease={() =>
                      setItemCounts({
                        ...itemCounts,
                        four: itemCounts.four === 0 ? 0 : itemCounts.four - 1,
                      })
                    }
                  />
                  <ul className="leaders">
                    <li>
                      <span>Subtotal</span>
                      <span>{subTotal.toFixed(2)}$</span>
                    </li>
                    <li>
                      <span>Tax (7.5%)</span>
                      <span>{tax.toFixed(2)}$</span>
                    </li>
                    <li>
                      <span>Delivery</span>
                      <span>7.00$</span>
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Total</span>
                      <span style={{ fontWeight: "bold" }}>
                        {total.toFixed(2)}$
                      </span>
                    </li>
                  </ul>
                </Grid>
              </Grid>

              <Typography
                variant="h4"
                color="#daa520"
                marginBottom="20px"
                marginTop="20px"
                align="center"
                style={{ textShadow: "1px 1px #000" }}
              >
                Your Information
              </Typography>

              <ThemeProvider theme={customTheme}>
                <CssTextField
                  fullWidth
                  style={{ marginBottom: 20 }}
                  label="Name"
                />
                <CssTextField
                  fullWidth
                  style={{ marginBottom: 20 }}
                  label="Address"
                />
                <CssTextField
                  placeholder="XXX-XXX-XXXX"
                  fullWidth
                  style={{ marginBottom: 20 }}
                  label="Phone Number"
                  onChange={(e) => validatePhone(e.target.value)}
                  error={phoneError}
                  helperText={phoneError ? "Invalid or No Phone Number" : ""}
                />
                <CssTextField
                  fullWidth
                  style={{ marginBottom: 20 }}
                  label="Email"
                  onChange={(e) => validateEmail(e.target.value)}
                  error={emailError}
                  helperText={emailError ? "Invalid or No Email" : ""}
                />
              </ThemeProvider>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  size="large"
                  style={{ backgroundColor: "#daa520", marginBottom: 20 }}
                >
                  Confirm Order
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}

const CssTextField = styled(TextField)({
  "& label.Mui-error": {
    color: "red",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-error fieldset": {
      borderColor: "red",
    },
  },
});
