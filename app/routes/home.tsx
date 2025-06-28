import { Box, Stack } from "@mui/material";
import React from "react";
import About from "~/components/About";
import Hero from "~/components/Hero";

const home = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Hero />
      <About />
    </Box>
  );
};

export default home;
