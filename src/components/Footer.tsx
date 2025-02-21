import React from "react";
import {
  Facebook,
  Twitter,
  DiscIcon as Discord,
  Youtube,
  Instagram,
} from "lucide-react";
import "./Footer.css"; // Import the CSS file for styling

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="background-overlay"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <h3 className="footer-title">Your Life RP</h3>
            <p className="footer-rights">
              © 2023 Your Life RP. All rights reserved.
            </p>
          </div>
          <div className="social-icons">
            {[
              { icon: Facebook, color: "blue" },
              { icon: Twitter, color: "sky" },
              { icon: Discord, color: "indigo" },
              { icon: Youtube, color: "red" },
              { icon: Instagram, color: "pink" },
            ].map((social, index) => (
              <a key={index} href="#" className={`social-icon ${social.color}`}>
                <social.icon className="icon" />
                <span className="sr-only">{social.icon.name}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="footer-footer">
          <p className="footer-powered">
            Powered by FiveM | Not affiliated with Rockstar Games
          </p>
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link">
            Privacy Policy
          </a>
          <a href="#" className="footer-link">
            Terms of Service
          </a>
          <a href="#" className="footer-link">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
