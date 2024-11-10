import React from "react";
import "./App.css";
function HomePage() {
  return (
    <div className="home">
      <div
        style={{
          color: "orange",
          textAlign: "center",
          fontSize: "60px",
          fontWeight: "bold",
        }}
      >
        Frequently Asked Questions
      </div>
      <button className="orange">Services</button>
      <button className="orange">Offers</button>
      <button className="orange">Payment</button>
    </div>
  );
}

export default HomePage;
