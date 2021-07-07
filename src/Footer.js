import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-details">
          <img
            className="img"
            src="https://finder.createx.studio/img/real-estate/illustrations/mobile.svg"
            alt="#"
            width="200"
          />
          <div className="footer-text">
            <h2>Download Our App</h2>
            <p>
              Find everything you need for buying, selling & renting property in
              our new Finder App!
            </p>
          </div>
        </div>
      </div>
      <div className="tags">
        <div className="column">
          <h3>Our Links</h3>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Contract</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3>Join Here</h3>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Sales</a>
            </li>
            <li>
              <a href="#">Tickets</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Contract</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
