import React from "react";
import "./Styles/Greetings.css";

const Greeting = () => {
  return (
    <section className="greeting">
      <h2>Good Evening,</h2>
      <h1>Aadharsh Srinivas R</h1>
      <div className="cta">
        <div>
          <strong>Struggling with Problems?</strong>
          <p>Schedule your appointment today!</p>
        </div>
        <button className="arrow-button">→</button>
      </div>
    </section>
  );
};

export default Greeting;
