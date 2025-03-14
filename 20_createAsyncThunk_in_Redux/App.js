import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
