import { Stack } from "@mui/material";

import { Outlet } from "react-router";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { DestinationProvider } from "~/context/Destination";

const clientLayout = () => {
  return (
    <DestinationProvider>
      <div>
        <Header />
        <Stack
          sx={{
            px: { xs: 2, sm: 3, md: 6, lg: 8 },
            pt: 10,
            minHeight: "100vh",
          }}
        >
          <Outlet />
        </Stack>
        <Footer />
      </div>
    </DestinationProvider>
  );
};

export default clientLayout;
