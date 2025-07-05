import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tripcard from "~/components/Tripcard";
import { Trips } from "~/assets/data";

const TripsPage = () => {
  return (
    <Box sx={{ py: 5, px: { xs: 2, md: 6 } }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Explore Our Trips
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {Trips.map((trip) => (
          <Box
            key={trip.id}
            sx={{
              width: {
                xs: "100%",
                sm: "48%",
                md: "30%",
              },
            }}
          >
            <Tripcard trip={trip} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TripsPage;
