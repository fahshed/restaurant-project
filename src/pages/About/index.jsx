import { Grid, Typography } from "@mui/material";

import { Layout } from "../../components";

export default function About() {
  window.scrollTo(0, 0);

  return (
    <Layout imageName="about-back.jpg">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{
          // minHeight: "60vh",
          paddingTop: "20px",
          paddingBottom: "20px",
          background: "rgba(0, 0, 0,  .5)",
        }}
      >
        <Grid item lg={7} xs={11}>
          <Typography
            variant="h4"
            color="#daa520"
            style={{ textShadow: "3px 3px #000" }}
          >
            About us
          </Typography>

          <Typography
            variant="h6"
            color="white"
            marginTop="10px"
            marginBottom="10px"
          >
            Since our modest beginnings in 2005 with a little space in Toronto’s
            stylish Yorkville locale, Taj Mahal's development has been enlivened
            with the energy to cook and serve solid, Indian-roused takeout food.
          </Typography>

          <Typography
            variant="h6"
            color="white"
            marginTop="10px"
            marginBottom="10px"
          >
            In contrast to other Indian eateries, Taj Mahal was made with the
            explicit expectation to appear as something else.
          </Typography>

          <Typography
            variant="h6"
            color="white"
            marginTop="10px"
            marginBottom="10px"
          >
            Our menu highlights things that utilization the sound and fragrant
            flavors, however, forgets the stuffing ghee, spread, oil, and
            overwhelming cream.
          </Typography>

          <Typography
            variant="h6"
            color="white"
            marginTop="10px"
            marginBottom="10px"
          >
            Taj Mahal has developed to incorporate four superb takeout areas in
            Toronto with additional to come sooner rather than later. Our group
            takes pride in the way that we can furnish our new and faithful
            clients with extraordinary tasting Indian-roused nourishment that is
            not normal for that at some other Indian eatery you visit.
          </Typography>

          <Typography
            variant="h6"
            color="white"
            marginTop="10px"
            marginBottom="10px"
          >
            Our expectation is that you’ll join the developing pattern that such
            a large number of others have officially found and you will attempt
            Taj Mahal as a remarkable option to other Indian eateries as well as
            to all other solid sustenance alternatives out there!
          </Typography>

          <Typography
            variant="h4"
            color="#daa520"
            marginTop="30px"
            style={{ textShadow: "3px 3px #000" }}
          >
            Contact us
          </Typography>
          <Typography
            variant="h6"
            color="white"
            style={{ textShadow: "3px 3px #000" }}
          >
            Address: 163 SPADINA AVE., THIRD FLOOR, TORONTO, ONT.
          </Typography>
          <Typography
            variant="h6"
            color="white"
            style={{ textShadow: "3px 3px #000" }}
          >
            Email: info@tajmahal.com
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}
