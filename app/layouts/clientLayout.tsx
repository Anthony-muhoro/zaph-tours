import { Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import Header from "~/components/Header";

const clientLayout = () => {
  return (
    <div>
      <Header />
      <Stack sx={{ px: { xs: 2, sm: 3, md: 6, lg: 8 }, pt: 10 }}>
        <Outlet />
      </Stack>
    </div>
  );
};

export default clientLayout;
