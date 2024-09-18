import React from "react";
import Switch from "./common/Switch";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="content-header">
      <h1 className="header-title">Dashboard</h1>
      <div className="header-actions">
        <Switch label={"Dark mode"} />
        <Switch label={"Email notification"} />
      </div>
    </div>
  );
};

export default Header;
