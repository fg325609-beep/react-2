import React from "react";
import "./Sectionone.scss"; 
import SnappyIcon from "../assets/icon-snappy.svg";
import AffordableIcon from "../assets/icon-affordable.svg";
import PeopleIcon from "../assets/icon-people.svg";

function Sectionone() {
    return (
        <>
       <section>
      <div className="container">
        <div className="two">
          <div className="title">
            <span></span>
            <h1>We’re different</h1>
          </div>
          <div className="cards">
            <div className="card">
              <img src={SnappyIcon} alt="Snappy Process" />
              <h1>Snappy Process</h1>
              <p>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
            </div>
            <div className="card">
              <img src={AffordableIcon} alt="Affordable Prices" />
              <h1>Affordable Prices</h1>
              <p>We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
            </div>
            <div className="card">
              <img src={PeopleIcon} alt="People First" />
              <h1>People First</h1>
              <h1>People First</h1>
              <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    );
}

export default Sectionone;