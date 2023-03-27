import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="/">
            <Logo className="logo" />
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"} style={{marginTop:-5}}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to={'/'}>Home</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link to={'/gallery'}>Gallery</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link to={'/contacts'}>Contact Us</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link to={'/tools'}>Tools</Link>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
