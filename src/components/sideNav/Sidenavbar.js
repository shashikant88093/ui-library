import React from "react";
import "./Sidenavbar.css";
import logo from '../../icons/avyay_logo.svg'
export default function Sidenavbar() {
  return (
    <div className="side-menu">
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="logo" />
                
        </div>
        <div className="logo-text">
            <h1>Avyay</h1>
            <p>solutions</p>
          </div>
      </div>
    </div>
  );
}
