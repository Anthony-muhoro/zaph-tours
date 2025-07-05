import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("layouts/clientLayout.tsx", [
    route("/", "routes/home.tsx"),
    route("/destinations", "pages/client/destinations.tsx"),
    route("/trips", "pages/client/trips.tsx"),
    route("/contacts", "pages/client/contact.tsx"),
    route("/destinations/:id", "pages/client/destinationsdetails.tsx"),
    route("/trips/:id/blog", "pages/client/tripblog.tsx"),
  ]),
  route("/sign-up", "pages/client/Signup.tsx"),
  route("/sign-in", "pages/client/Signin.tsx"),
  layout("layouts/clientDashboardLayout.tsx", [
    route("/dashboard", "pages/clientdashboard/dashboard.tsx"),
  ]),
] satisfies RouteConfig;
