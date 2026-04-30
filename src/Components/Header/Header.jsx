import "./Header.scss"; 
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <h1>INSURE</h1>
          
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>

          <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
            <li><a href="#">HOW WE WORK</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">ACCOUNT</a></li>
            <li><a className="nav-a" href="#">VIEW PLANS</a></li> 
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;