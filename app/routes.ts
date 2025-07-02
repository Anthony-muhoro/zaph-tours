import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("layouts/clientLayout.tsx", [
    route("/", "routes/home.tsx"),
    route("/destinations", "pages/client/destinations.tsx"),
    route("/trips", "pages/client/trips.tsx"),
    route("/contacts", "pages/client/contact.tsx"),
    route("/destinations/:id", "pages/client/destinationsdetails.tsx"),
    route("/trips/:id/blog", "pages/client/tripblog.tsx"),
    route("/sign-up", "pages/client/Signup.tsx"),
    route("/sign-in", "pages/client/Signin.tsx"),
  ]),
  route("/api/register", "actions/register.ts"),
  route("/api/login", "actions/login.ts"),
  route("/api/verify-email?/:token", "actions/verifyEmail.ts"),
  route("/verify-email?/:token", "pages/client/verifyemail.tsx"),
  layout("layouts/clientDashboardLayout.tsx", [
    route("/dashboard", "pages/clientdasboard/dashboard.tsx"),
  ]),
] satisfies RouteConfig;
