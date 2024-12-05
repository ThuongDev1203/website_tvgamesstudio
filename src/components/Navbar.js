import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>

      {/* Menu */}
      <ul style={styles.navList}>
        <li>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={styles.navLink}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" style={styles.navLink}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/careers" style={styles.navLink}>
            Careers
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "rgba(51, 51, 51, 0.8)",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
  },
  logoContainer: {
    flex: "0 1 auto",
    marginLeft: "100px",
  },
  logo: {
    width: "100px",
    objectFit: "cover",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    marginRight: "100px",
    padding: 0,
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "16px",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
  navLinkHover: {
    color: "#4CAF50",
  },
};

export default Navbar;
