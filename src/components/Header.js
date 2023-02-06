import React from "react";

export default function Header() {
  return (
    <header>
      <div>
        <img
          className="header-img"
          src={require("../images/header-icon.png")}
        />
      </div>

      <h2 className="header-name">Random Recipe Selector</h2>
    </header>
  );
}
