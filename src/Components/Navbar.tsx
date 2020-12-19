import React, { useRef, useState } from "react";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import logoSrc from "../Img/tranveler_logo.png";

export default function Navbar() {
  const nav = useRef<HTMLDivElement>(null);
  const originalNavStyle = {
    background: "none",
  };

  const [navStyle, setNavStyle] = useState<object>(originalNavStyle);

  useScrollPosition(({ prevPos, currPos }) => {
    if (-currPos.y > 150) {
      setNavStyle({
        backgroundColor: "#ffffff",
        boxShadow: "1px 1px 10px #b6b6b6"
      });
    } else {
      setNavStyle(originalNavStyle);
    }
  });

  return (
    <nav ref={nav} style={navStyle}>
      <span className="logo_span">
        <Link to="/">
          <img src={logoSrc} alt="tranveler_logo" />
        </Link>
      </span>
      <span className="navigate_span"></span>
    </nav>
  );
}
