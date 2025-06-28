import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Drawer,
  ListItem,
  List,
  ListItemText,
  Link,
} from "@mui/material";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "Destinations", path: "/destinations" },
    { label: "Trips", path: "/trips" },
    { label: "Contacts", path: "/contacts" },
  ];

  const cta = { label: "Login / Signup", path: "/login" };

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const isActivePath = (path: string) => location.pathname === path;

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ boxShadow: "none", bgcolor: theme.palette.secondary.dark }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: theme.palette.text.primary,
              fontWeight: theme.typography.fontWeightBold,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            ZaphTravels
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ color: "text.primary" }}
            >
              <Menu />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              {navigationItems.map((item) => {
                const isActive = isActivePath(item.path);
                return (
                  <Link
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      fontSize: 20,
                      fontWeight: isActive
                        ? 800
                        : theme.typography.fontWeightRegular,
                      color: theme.palette.primary.light,
                      textDecoration: "none",
                      position: "relative",
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        bottom: -4,
                        left: 0,
                        width: isActive ? "100%" : "0%",
                        height: 2,
                        bgcolor: "primary.main",
                        transition: "width 0.3s ease",
                      },
                      "&:hover:after": {
                        width: "100%",
                      },
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Button
                variant="contained"
                component={RouterLink}
                to={cta.path}
                sx={{
                  fontSize: theme.typography.pxToRem(14),
                  fontWeight: theme.typography.fontWeightMedium,
                  borderRadius: 20,
                  px: 3,
                  py: 1,
                  ml: 2,
                  textTransform: "none",
                }}
              >
                {cta.label}
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            pt: 2,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, pb: 1 }}>
          <IconButton onClick={toggleDrawer}>
            <X />
          </IconButton>
        </Box>
        <List>
          {[...navigationItems, cta].map((item) => (
            <ListItem
              key={item.path}
              component={RouterLink}
              to={item.path}
              onClick={toggleDrawer}
              sx={{
                textDecoration: "none",
                color: theme.palette.text.primary,
                backgroundColor: isActivePath(item.path)
                  ? theme.palette.action.selected
                  : "transparent",
                py: 1.5,
                px: 3,
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  fontWeight: isActivePath(item.path)
                    ? theme.typography.fontWeightMedium
                    : theme.typography.fontWeightRegular,
                  fontSize: theme.typography.pxToRem(16),
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
