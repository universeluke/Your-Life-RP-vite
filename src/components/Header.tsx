import React, { useState, useEffect } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftNavItems = ["Features", "Showcase"];
  const rightNavItems = ["Community", "Join"];

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav>
          <ul className="nav-list left">
            {leftNavItems.map((item) => (
              <li key={item} className="nav-item">
                <a href={`#${item.toLowerCase()}`} className="nav-link">
                  {item}
                  <span className="underline"></span>
                </a>
              </li>
            ))}
          </ul>

          <a href="/" className="logo">
            <img
              src="/LS_LOGO.png"
              alt="Your Life RP Logo"
              width={150}
              height={150}
            />
          </a>

          <ul className="nav-list right">
            {rightNavItems.map((item) => (
              <li key={item} className="nav-item">
                <a href={`#${item.toLowerCase()}`} className="nav-link">
                  {item}
                  <span className="underline"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
