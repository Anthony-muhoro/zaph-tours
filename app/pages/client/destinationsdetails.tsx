import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useParams, useNavigate } from "react-router";
import { destinations } from "~/assets/data";

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find((d) => d.id === Number(id));

  if (!destination) {
    return (
      <Container sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h4" color="error">
          Destination not found
        </Typography>
        <Button sx={{ mt: 4 }} onClick={() => navigate("/destinations")}>
          Back to Destinations
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Stack spacing={4}>
        <Typography variant="h3" fontWeight={700} color="primary.main">
          {destination.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            pb: 2,
          }}
        >
          {destination.images.map((img, index) => (
            <Box
              key={index}
              component="img"
              src={img}
              alt={`img-${index}`}
              sx={{
                height: 250,
                borderRadius: 2,
                boxShadow: 2,
                objectFit: "cover",
              }}
            />
          ))}
        </Box>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.2rem", lineHeight: 1.8 }}
        >
          {destination.description}
        </Typography>
        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, color: "text.primary", mb: 2 }}
          >
            Individual Cost:
          </Typography>
          <Chip
            label={`KSH ${destination.individualCost}`}
            color="primary"
            sx={{ fontSize: "1rem", px: 2, py: 1 }}
          />

          <Typography
            variant="h5"
            sx={{ mt: 4, fontWeight: 600, color: "text.primary", mb: 1 }}
          >
            Group Prices:
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            {Object.entries(destination.groupPrices).map(
              ([groupSize, price]) => (
                <Chip
                  key={groupSize}
                  label={`Group of ${groupSize}: KSH ${price}`}
                  sx={{
                    fontSize: "1rem",
                    bgcolor: "secondary.light",
                    color: "black",
                  }}
                />
              )
            )}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default DestinationDetails;
