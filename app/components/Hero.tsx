import {
  Box,
  Container,
  Fade,
  Typography,
  Slide,
  InputAdornment,
  TextField,
  Zoom,
  Button,
} from "@mui/material";
import { SearchIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://ruachsafaris.com/wp-content/uploads/2024/07/20200206-080357-largejpg-2-636x426.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: { md: "70vh", sm: "60vh" },
        display: "flex",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box>
            <Slide direction="down" in timeout={1200}>
              <Box>
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    mb: 2,
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    fontWeight: 700,
                  }}
                >
                  Discover Your Next Adventure
                </Typography>
              </Box>
            </Slide>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                opacity: 0.9,
              }}
            >
              Best safaris and adventures
            </Typography>

            <Slide direction="up" in timeout={1200}>
              <Box
                sx={{
                  maxWidth: 600,
                  mx: "auto",
                  mb: 4,
                }}
              >
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Where do you want to go?"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    sx: {
                      backgroundColor: "rgba(255,255,255,0.9)",
                      borderRadius: 2,
                    },
                  }}
                />
              </Box>
            </Slide>
            <Zoom in timeout={1500}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/destinations"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  backgroundColor: "secondary.main",
                  "&:hover": {
                    backgroundColor: "secondary.dark",
                  },
                }}
              >
                Explore Destinations
              </Button>
            </Zoom>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Hero;
