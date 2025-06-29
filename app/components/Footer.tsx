import { Box, Container, Stack, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { theme } from "~/context/Themes";
import { Link } from "react-router";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.secondary.dark,
        mt: 8,
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
          spacing={4}
          flexWrap="wrap"
        >
          <Box maxWidth={350}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Zaph Tours
            </Typography>
            <Typography variant="body2" color="grey.400">
              Explore the world with us and create unforgettable memories.
            </Typography>
          </Box>

          <Stack spacing={1}>
            <Typography variant="subtitle1" fontWeight={600}>
              Quick Links
            </Typography>
            {[
              { to: "/", label: "Home" },
              { to: "/destinations", label: "Destinations" },
              { to: "/trips", label: "Trips" },
              { to: "/contacts", label: "Contacts" },
            ].map(({ to, label }) => (
              <Link key={label} to={to} style={{ textDecoration: "none" }}>
                {label}
              </Link>
            ))}
          </Stack>

          <Stack spacing={1}>
            <Typography variant="subtitle1" fontWeight={600}>
              Follow Us
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton color="inherit" aria-label="Facebook">
                <Facebook size={20} />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <Twitter size={20} />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <Instagram size={20} />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <Linkedin size={20} />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>

        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="grey.500">
            © {new Date().getFullYear()} Zaph Tours. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
