import React, { useState, useEffect } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftNavItems = ["FEATURES", "SHOWCASE"];
  const rightNavItems = ["COMMUNITY", "CONNECT"];
  const allNavItems = [...leftNavItems, ...rightNavItems];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`header ${isScrolled ? "scrolled" : ""} ${
        isMobileMenuOpen ? "mobile-nav-open" : ""
      }`}
    >
      <div className="container">
        {/* Desktop Navigation */}
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

        {/* Mobile Navigation */}
        <div className="mobile-nav-container">
          <a href="/" className="logo">
            <img
              src="/LS_LOGO.png"
              alt="Your Life RP Logo"
              width={150}
              height={150}
            />
          </a>

          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? "✕" : "☰"}
          </div>

          {isMobileMenuOpen && (
            <ul className="mobile-nav">
              {allNavItems.map((item) => (
                <li key={item} className="mobile-nav-item">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="mobile-nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
