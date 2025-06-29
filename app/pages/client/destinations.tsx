import React from "react";
import { Box, Container, Typography, Fade, Slide, Button } from "@mui/material";
import { Link } from "react-router";

import DestinationCard from "~/components/DestinationCard";
import { useDestinations } from "~/context/Destination";

const Destinations = () => {
  const { destinations } = useDestinations();
  return (
    <Box>
      <Container maxWidth="lg">
        <Fade in timeout={800}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 700,
                color: "primary.main",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -15,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 80,
                  height: 4,
                  background: "linear-gradient(135deg, #1976d2, #42a5f5)",
                  borderRadius: 2,
                },
              }}
            >
              Expore our Destinations
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1.1rem", md: "1.4rem" },
                fontWeight: 300,
                maxWidth: 600,
                mx: "auto",
              }}
            >
              Get the best experince you would like
            </Typography>
          </Box>
        </Fade>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {destinations.map((destination, index) => (
            <Slide
              direction="up"
              in
              timeout={1000 + index * 200}
              key={destination.id}
            >
              <Box sx={{ width: { xs: "100%", sm: "80%", md: "30%" } }}>
                <DestinationCard
                  id={destination.id}
                  name={destination.name}
                  image={destination.images[0]}
                  description={destination.description}
                />
              </Box>
            </Slide>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Destinations;
