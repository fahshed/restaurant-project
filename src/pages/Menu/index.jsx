import { Navbar, Card } from "../../components";

import { Grid } from "@mui/material";

export default function Menu() {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <Grid container style={{ marginTop: 200 }}>
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
      </Grid>
    </div>
  );
}
