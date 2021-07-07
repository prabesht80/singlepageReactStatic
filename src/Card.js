import React from "react";
import "./Card.css";

export default function Card({ name }) {
  return (
    <div className="full-container">
      <div className="card-container">
        <div className="images-container">
          <img
            src="https://img.icons8.com/emoji/48/000000/person.png"
            alt="person"
          />
        </div>
        <div className="card-details">
          <h4>{name}</h4>
          <p>trying front-end somehow.. nothing else</p>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
}
