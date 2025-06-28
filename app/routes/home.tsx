import { Box, Stack } from "@mui/material";
import React from "react";
import About from "~/components/About";
import Hero from "~/components/Hero";
import Topdestinations from "~/components/Topdestinations";

const home = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Hero />
      <Topdestinations />
      <About />
    </Box>
  );
};

export default home;
