import React from "react";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";

import logoSrc from "../Img/tranveler_logo.png";

export default function Navbar() {
  return (
    <nav>
      <span className="logo_span">
        <Link to="/">
          <img src={logoSrc} alt="tranveler_logo" />
        </Link>
      </span>
      <span className="navigate_span"></span>
    </nav>
  );
}
