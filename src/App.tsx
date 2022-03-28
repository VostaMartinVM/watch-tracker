import React from "react";
import { Outlet, Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Upcoming from "./routes/Upcoming";
import "./css/List.css";

export default function App() {
  return (
    <div>
      <div className="App">
        <Topbar />
        <div className="body">
          <Sidebar />
          <Upcoming />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
