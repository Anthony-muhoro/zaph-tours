import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Tripcard from "~/components/Tripcard";
import { Trips } from "~/assets/data";

const TripsPage = () => {
  return (
    <Box sx={{ py: 5, px: { xs: 2, md: 6 } }}>
      <Typography variant="h4" gutterBottom>
        Explore Our Trips
      </Typography>

      <Grid container spacing={4}>
        {Trips.map((trip) => (
          <Grid item xs={12} sm={6} md={4} key={trip.id}>
            <Tripcard trip={trip} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TripsPage;
