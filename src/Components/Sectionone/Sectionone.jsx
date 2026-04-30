import React from "react";
import "./Sectionone.scss";

const SnappyIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <circle cx="36" cy="36" r="36" fill="#2D2641" opacity="0.08"/>
    <path d="M36 20 L50 28 L50 40 C50 48 43 54 36 56 C29 54 22 48 22 40 L22 28 Z" fill="#2D2641"/>
    <path d="M30 36 L34 40 L42 32" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AffordableIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <circle cx="36" cy="36" r="36" fill="#2D2641" opacity="0.08"/>
    <circle cx="36" cy="36" r="14" fill="#2D2641"/>
    <path d="M36 22 L36 18 M36 54 L36 50 M22 36 L18 36 M54 36 L50 36" stroke="#2D2641" strokeWidth="2.5" strokeLinecap="round"/>
    <text x="36" y="41" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">$</text>
  </svg>
);

const PeopleIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <circle cx="36" cy="36" r="36" fill="#2D2641" opacity="0.08"/>
    <circle cx="36" cy="28" r="8" fill="#2D2641"/>
    <circle cx="22" cy="32" r="6" fill="#2D2641" opacity="0.6"/>
    <circle cx="50" cy="32" r="6" fill="#2D2641" opacity="0.6"/>
    <path d="M18 54 Q36 44 54 54" fill="#2D2641"/>
  </svg>
);

function Sectionone() {
  return (
    <section className="section-one">
      <div className="container">
        <div className="two">
          <div className="title">
            <span></span>
            <h1>We're different</h1>
          </div>
          <div className="cards">
            <div className="card">
              <SnappyIcon />
              <h2>Snappy Process</h2>
              <p>Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.</p>
            </div>
            <div className="card">
              <AffordableIcon />
              <h2>Affordable Prices</h2>
              <p>We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage.</p>
            </div>
            <div className="card">
              <PeopleIcon />
              <h2>People First</h2>
              <p>Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sectionone;