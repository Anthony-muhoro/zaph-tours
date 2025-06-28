import { Box, Button, Container, Fade, Slide, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router";
import DestinationCard from "./DestinationCard";
import { featuredDestinations } from "~/assets/data";

const Topdestinations = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
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
              Featured Destinations
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
              Handpicked locations for your perfect getaway
            </Typography>
          </Box>
        </Fade>

        {/* FLEX LAYOUT */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {featuredDestinations.map((destination, index) => (
            <Slide
              direction="up"
              in
              timeout={1000 + index * 200}
              key={destination.id}
            >
              <Box sx={{ width: { xs: "100%", sm: "80%", md: "30%" } }}>
                <DestinationCard
                  name={destination.name}
                  image={destination.image}
                  price={destination.price}
                  description={destination.description}
                />
              </Box>
            </Slide>
          ))}
        </Box>

        <Fade in timeout={1500}>
          <Box sx={{ textAlign: "center", mt: 8 }}>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/destinations"
              sx={{
                px: 5,
                py: 2,
                fontSize: "1.2rem",
                fontWeight: 600,
                borderWidth: 2,
                borderColor: "primary.main",
                color: "primary.main",
                borderRadius: 3,
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 20px rgba(25,118,210,0.3)",
                },
              }}
            >
              View All Destinations
            </Button>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Topdestinations;
