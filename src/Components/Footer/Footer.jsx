import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <div className="waves-bg">
              <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-10 30 C30 30, 50 70, 80 70 C110 70, 130 30, 160 30" stroke="rgba(0,0,0,0.08)" strokeWidth="1" fill="none"/>
                <path d="M-10 55 C30 55, 50 95, 80 95 C110 95, 130 55, 160 55" stroke="rgba(0,0,0,0.08)" strokeWidth="1" fill="none"/>
                <path d="M-10 80 C30 80, 50 115, 80 115 C110 115, 130 80, 160 80" stroke="rgba(0,0,0,0.08)" strokeWidth="1" fill="none"/>
                <path d="M-20 10 C20 10, 40 50, 70 50 C100 50, 120 10, 150 10" stroke="rgba(0,0,0,0.06)" strokeWidth="1" fill="none"/>
              </svg>
            </div>
            <h2>INSURE</h2>
          </div>

          <div className="social-icons">
            {/* Facebook */}
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* Twitter */}
            <a href="#" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
            {/* Pinterest */}
            <a href="#" aria-label="Pinterest">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.641 1.267 1.408 0 .858-.546 2.141-.828 3.329-.236.995.499 1.806 1.476 1.806 1.771 0 3.133-1.867 3.133-4.562 0-2.387-1.715-4.052-4.164-4.052-2.837 0-4.5 2.127-4.5 4.326 0 .856.33 1.775.741 2.276a.3.3 0 0 1 .07.285c-.076.313-.244.995-.277 1.134-.044.183-.145.222-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-links">
          <div className="col">
            <h3>OUR COMPANY</h3>
            <ul>
              <li><a href="#">HOW WE WORK</a></li>
              <li><a href="#">WHY INSURE?</a></li>
              <li><a href="#">CHECK PRICE</a></li>
              <li><a href="#">REVIEWS</a></li>
            </ul>
          </div>
          <div className="col">
            <h3>HELP ME</h3>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">TERMS OF USE</a></li>
              <li><a href="#">PRIVACY POLICY</a></li>
              <li><a href="#">COOKIES</a></li>
            </ul>
          </div>
          <div className="col">
            <h3>CONTACT</h3>
            <ul>
              <li><a href="#">SALES</a></li>
              <li><a href="#">SUPPORT</a></li>
              <li><a href="#">LIVE CHAT</a></li>
            </ul>
          </div>
          <div className="col">
            <h3>OTHERS</h3>
            <ul>
              <li><a href="#">CAREERS</a></li>
              <li><a href="#">PRESS</a></li>
              <li><a href="#">LICENSES</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;