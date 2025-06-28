import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Icon,
  Stack,
  Typography,
} from "@mui/material";
import { MapPin } from "lucide-react";
import React from "react";

interface DestinationCardProps {
  name: string;
  image: string;
  price: number;
  description: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  name,
  image,
  price,
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
            sx={{
              width: "full",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
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
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "secondary.main",
            fontSize: { xs: "1.4rem", md: "1.6rem" },
            mb: 2,
          }}
        >
          KSH. {price}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            lineHeight: 1.7,
            fontSize: { xs: "0.95rem", md: "1.1rem" },
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
