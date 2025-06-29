import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import About from "~/components/About";
import Hero from "~/components/Hero";
import Topdestinations from "~/components/Topdestinations";
import { theme } from "~/context/Themes";

const home = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Hero />
      <Topdestinations />
      <About />
      <Stack
        component="section"
        sx={{
          backgroundColor: theme.palette.secondary.light,
          mt: 3,
          py: 6,
          px: 2,
          textAlign: "center",
          alignItems: "center",
          borderRadius: 1,
        }}
      >
        <Box sx={{ maxWidth: 700, width: "100%" }}>
          <Typography
            sx={{
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              color: theme.palette.primary.dark,
              fontWeight: 700,
              mb: 2,
            }}
          >
            Subscribe to our Newsletter
          </Typography>
          <Typography sx={{ mb: 4, color: theme.palette.text.primary }}>
            Stay updated with our latest news, articles, and updates delivered
            straight to your inbox.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <TextField
              placeholder="Enter your email address"
              variant="outlined"
              sx={{
                flex: 1,
                minWidth: { xs: "100%", sm: "300px" },
                backgroundColor: "#fff",
                borderRadius: 1,
              }}
            />
            <Button
              variant="contained"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 1,
                whiteSpace: "nowrap",
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default home;
