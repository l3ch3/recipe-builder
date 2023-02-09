import React from "react";

export default function Header() {
  return (
    <header>
      <img className="header-img" src={require("../images/header-icon.png")} />
      <h1 className="header-name">Random Recipe Selector</h1>
    </header>
  );
}
