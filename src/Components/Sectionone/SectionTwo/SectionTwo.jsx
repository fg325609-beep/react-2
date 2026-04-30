import React from "react";
import "./SectionTwo.scss";
 
function SectionTwo() {
  return (
    <section className="section-two">
      <div className="container">
        <div className="cta-banner">
          <h2>Find out more<br />about how we work</h2>
          <div className="waves">
            <svg viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
              <path d="M280 10 C240 10, 220 50, 200 50 C180 50, 160 10, 140 10" stroke="rgba(195,150,196,0.4)" strokeWidth="1" fill="none"/>
              <path d="M300 30 C260 30, 240 70, 220 70 C200 70, 180 30, 160 30" stroke="rgba(195,150,196,0.4)" strokeWidth="1" fill="none"/>
              <path d="M310 55 C270 55, 250 95, 230 95 C210 95, 190 55, 170 55" stroke="rgba(195,150,196,0.4)" strokeWidth="1" fill="none"/>
              <path d="M320 80 C280 80, 260 115, 240 115 C220 115, 200 80, 180 80" stroke="rgba(195,150,196,0.4)" strokeWidth="1" fill="none"/>
            </svg>
          </div>
          <a href="#" className="cta-btn">HOW WE WORK</a>
        </div>
      </div>
    </section>
  );
}
 
export default SectionTwo;