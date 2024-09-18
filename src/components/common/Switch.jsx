import React, { useState } from "react";
import "../../styles/switch.css";

const Switch = ({ label }) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="switch-container">
      <span className="switch-label">{label}</span>
      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;
