import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router";

interface Trip {
  id: number | string;
  category: string;
  images: string[];
  description: string;
  price: number;
  detailed_description: string;
}

interface TripcardProps {
  trip: Trip;
}

const Tripcard: React.FC<TripcardProps> = ({ trip }) => {
  const { id, category, images, description } = trip;

  return (
    <Card
      sx={{
        height: "100%",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        cursor: "pointer",
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
        border: "1px solid rgba(25,118,210,0.1)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <CardMedia
          component="img"
          height="280"
          image={
            images.length > 0
              ? images[0]
              : "https://via.placeholder.com/636x408?text=Trip+Image"
          }
          alt={category}
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />
      </Box>
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Stack>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 600,
                color: "primary.main",
                fontSize: { xs: "1rem", md: "1.2rem" },
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Typography>
          </Stack>
        </Box>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            lineHeight: 1.7,
            fontSize: { xs: "0.95rem", md: "1.1rem" },
            mb: 3,
          }}
        >
          {description}
        </Typography>

        <Button
          component={Link}
          to={`/trips/${id}/blog`}
          variant="contained"
          fullWidth
          sx={{
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1rem",
            borderRadius: 2,
          }}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default Tripcard;
