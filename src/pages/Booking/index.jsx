import { useState, useEffect } from "react";

import {
  Grid,
  Typography,
  TextField,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";

import { MobileDatePicker, MobileTimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import { Layout } from "../../components";

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

export default function Booking() {
  const [value, setValue] = useState(new Date());

  const [phoneError, setPhoneError] = useState(false);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const validatePhone = (phone) => {
    const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    setPhoneError(!re.test(String(phone)));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout imageName="booking-back.jpg">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div style={{ minHeight: "90vh" }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{
              minHeight: "90vh",
              paddingTop: "20px",
              paddingBottom: "20px",
              background: "rgba(0, 0, 0,  .8)",
            }}
          >
            <Grid item lg={7} xs={11}>
              <Typography
                variant="h3"
                color="#daa520"
                style={{ textShadow: "3px 3px #000" }}
                align="center"
              >
                Dine, Drink and Enjoy Food With Your Loved Ones
              </Typography>
              <Typography
                variant="h6"
                color="white"
                marginTop="10px"
                marginBottom="50px"
                align="center"
              >
                Food tastes better with family and friends.
              </Typography>

              <ThemeProvider theme={customTheme}>
                <Grid container justifyContent="center">
                  <Grid item sm={6} xs={12}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 20,
                      }}
                    >
                      <Typography
                        variant="h5"
                        color="#daa520"
                        marginRight="15px"
                      >
                        Pick a date
                      </Typography>
                      <MobileDatePicker
                        label="Date"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 20,
                      }}
                    >
                      <Typography
                        variant="h5"
                        color="#daa520"
                        marginRight="15px"
                      >
                        Pick a time
                      </Typography>
                      <MobileTimePicker
                        label="Time"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 20,
                      }}
                    >
                      <Typography
                        variant="h5"
                        color="#daa520"
                        marginRight="15px"
                      >
                        Table for
                      </Typography>
                      <TextField
                        type="number"
                        label="Persons"
                        defaultValue={2}
                      />
                    </div>
                    <TextField
                      fullWidth
                      placeholder="XXX-XXX-XXXX"
                      label="Enter Your Phone Number"
                      onChange={(e) => validatePhone(e.target.value)}
                      error={phoneError}
                      helperText={
                        phoneError ? "Invalid or No Phone Number" : ""
                      }
                      style={{ marginBottom: 20 }}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: 20,
                      }}
                    >
                      <Button
                        variant="contained"
                        size="large"
                        //
                      >
                        Book
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </ThemeProvider>
            </Grid>
          </Grid>
        </div>
      </LocalizationProvider>
    </Layout>
  );
}
