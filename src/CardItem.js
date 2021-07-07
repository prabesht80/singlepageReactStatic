import React from "react";
import "./CardItem.css";
import Card from "./Card";

export default function CardItem() {
  return (
    <div className="cards">
      <Card name="Ramesh" />
      <Card name="Prabesh" />
      <Card name="Suresh" />
    </div>
  );
}
