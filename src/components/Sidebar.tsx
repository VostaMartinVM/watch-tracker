import React from "react";
import "../css/Sidebar.css";
import SidebarButtons from "./SidebarButtons";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarButtons.map((val, key) => (
          <li
            key={key}
            className="row"
            id={window.location.pathname === val.link ? "active" : ""}
            onClick={() => {
              window.location.pathname = val.link;
            }}
          >
            {""}
            <div className="icon" id="iconSidebar">
              {val.icon}
            </div>
            <div id="name">{val.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
