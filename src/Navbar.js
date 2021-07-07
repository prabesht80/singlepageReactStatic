import React, { useState } from "react";
import "./Navbar.css";
import { FcMinus, FcMenu } from "react-icons/fc";

export default function Navbar() {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    var x = document.querySelector("ul");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
    setClick(!click);
  };
  return (
    <div className="header">
      <div className="header-component">
        <h2 className="logo">THAPA</h2>

        <div className="mobileIcon" onClick={handleClick}>
          {click ? <FcMinus /> : <FcMenu />}
        </div>

        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
        </ul>
        <button className="singup">Sing Up</button>
      </div>
    </div>
  );
}
