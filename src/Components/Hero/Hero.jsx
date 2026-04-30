import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-left">
            <span></span>
            <h1>Humanizing<br />your insurance.</h1>
            <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you.</p>
            <a href="#">VIEW PLANS</a>
          </div>
          <div className="hero-right">
            {/* hero.png mavjud bo'lsa: */}
            {/* <img src={heroImg} alt="Hero" /> */}
            <div className="hero-placeholder">
              <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
                <circle cx="90" cy="70" r="40" fill="white"/>
                <path d="M20 160 Q90 100 160 160" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;