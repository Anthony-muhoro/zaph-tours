import React from "react";
import { useParams } from "react-router";
import {
  Box,
  Typography,
  Container,
  Stack,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import { Trips } from "~/assets/data";
import { theme } from "~/context/Themes";

const TripBlog = () => {
  const { id } = useParams();
  const trip = Trips.find((t) => t.id === Number(id));

  if (!trip) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" align="center">
          Trip not found.
        </Typography>
      </Container>
    );
  }

  const { category, images, description, detailed_description, price } = trip;

  return (
    <Container sx={{ py: 6 }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ color: theme.palette.primary.dark }}
      >
        {category}
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {images.map((src, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={2} sx={{ overflow: "hidden", borderRadius: 2 }}>
              <Box
                component="img"
                src={src}
                alt={`${category} image ${index + 1}`}
                sx={{ width: "100%", height: 250, objectFit: "cover" }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Stack spacing={3}>
        <Typography variant="h6">{description}</Typography>
        <Typography variant="body1" color="text.secondary">
          {detailed_description}
        </Typography>
        <Typography variant="h5" color="primary">
          Price: KSH. {price}
        </Typography>
        <Button variant="contained" size="large" sx={{ alignSelf: "start" }}>
          Book Now
        </Button>
      </Stack>
    </Container>
  );
};

export default TripBlog;
