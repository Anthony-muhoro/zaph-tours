import { Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import Header from "~/components/Header";

const clientLayout = () => {
  return (
    <div>
      <Header />
      <Stack sx={{ pt: 10 }}>
        <Outlet />
      </Stack>
    </div>
  );
};

export default clientLayout;
