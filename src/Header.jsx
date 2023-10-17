import React from "react";
import { BsJustify } from "react-icons/bs";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify onClick={OpenSidebar} className="icon" />
      </div>
      <div className="header-left">
        <h4
          className="head-title"
          style={{ fontFamily: "Montserrat, sans-serif", color: "black" }}
        >
          Hello Sharukh 👋{" "}
        </h4>
      </div>
      <div className="header-left">
        <input type="text" placeholder="Search" className="input-text" />
      </div>
    </header>
  );
}

export default Header;
