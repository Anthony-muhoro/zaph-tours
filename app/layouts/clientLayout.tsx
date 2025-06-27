import React from "react";
import { Outlet } from "react-router";
import Header from "~/components/Header";

const clientLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default clientLayout;
