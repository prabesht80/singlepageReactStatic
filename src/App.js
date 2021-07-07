import React from "react";
import "./styles.css";
import Hero from "./Hero";
import CardItem from "./CardItem";
import Wordscards from "./Wordscars";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Hero />
      <Wordscards />
      <CardItem />
      <Footer />
    </div>
  );
}
