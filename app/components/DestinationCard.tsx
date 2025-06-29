import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Icon,
  Stack,
  Typography,
} from "@mui/material";
import { MapPin } from "lucide-react";
import React from "react";
import { Link } from "react-router";

interface DestinationCardProps {
  id: number | string;
  name: string;
  image: string;
  description: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  id,
  name,
  image,
  description,
}) => {
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
          image={image}
          alt={name}
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
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ width: "100%" }}
          >
            <Icon component={MapPin} />
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 600,
                color: "primary.main",
                fontSize: { xs: "1rem", md: "1.2rem" },
              }}
            >
              {name}
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
          to={`/destinations/${id}`}
          variant="contained"
          fullWidth
          sx={{
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1rem",
            borderRadius: 2,
          }}
        >
          View Destination
        </Button>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
