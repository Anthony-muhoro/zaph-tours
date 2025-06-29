import { Stack } from "@mui/material";

import { Outlet } from "react-router";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

const clientLayout = () => {
  return (
    <div>
      <Header />
      <Stack
        sx={{ px: { xs: 2, sm: 3, md: 6, lg: 8 }, pt: 10, minHeight: "100vh" }}
      >
        <Outlet />
      </Stack>
      <Footer />
    </div>
  );
};

export default clientLayout;
