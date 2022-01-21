import { Layout } from "..";

import { Grid } from "@mui/material";

export default function Menu({ pageBackground, pageContent }) {
  return (
    <Layout imageName={pageBackground}>
      <Grid container justifyContent="center">
        <Grid item lg={6} xs={11}>
          {pageContent}
        </Grid>
      </Grid>
    </Layout>
  );
}
