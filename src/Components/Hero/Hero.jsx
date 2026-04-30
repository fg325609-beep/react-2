import React from "react";
import "./Hero.scss";
import heroImg from "../../assets/hero.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="circles">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="0" cy="200" r="80"  stroke="rgba(195,150,196,0.25)" strokeWidth="1"/>
              <circle cx="0" cy="200" r="110" stroke="rgba(195,150,196,0.2)"  strokeWidth="1"/>
              <circle cx="0" cy="200" r="140" stroke="rgba(195,150,196,0.15)" strokeWidth="1"/>
              <circle cx="0" cy="200" r="170" stroke="rgba(195,150,196,0.1)"  strokeWidth="1"/>
            </svg>
          </div>

          <div className="hero-content">
            <span className="line"></span>
            <h1>Humanizing<br />your insurance.</h1>
            <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
            <a href="#">VIEW PLANS</a>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="Happy family" />
        </div>
      </div>
    </section>
  );
}

export default Hero;