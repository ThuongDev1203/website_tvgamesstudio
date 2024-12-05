import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        ...styles.navbar,
        backdropFilter: isScrolled ? "blur(15px)" : "blur(5px)",
        backgroundColor: isScrolled
          ? "rgba(0, 31, 63, 0.8)" // Màu tối hơn khi cuộn
          : "rgba(0, 31, 63, 1)", // Màu bình thường
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <div style={styles.logoContainer}>
        <img
          src={process.env.PUBLIC_URL + "/assets/logo.png"} // Use relative path from public folder
          alt="Logo"
          style={styles.logo}
        />
      </div>

      {/* Menu */}
      <ul style={styles.navList}>
        <li>
          <Link to="/" style={styles.navLink}>
            TRANG CHỦ
          </Link>
        </li>
        <li>
          <Link to="/about" style={styles.navLink}>
            VỀ CHÚNG TÔI
          </Link>
        </li>
        <li>
          <Link to="/contact" style={styles.navLink}>
            LIÊN HỆ
          </Link>
        </li>
        <li>
          <Link to="/careers" style={styles.navLink}>
            TUYỂN DỤNG
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
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    backdropFilter: "blur(5px)", // Mờ nhẹ mặc định
    WebkitBackdropFilter: "blur(5px)", // Hỗ trợ cho Safari
  },
  logoContainer: {
    flex: "0 1 auto",
    marginLeft: "200px",
  },
  logo: {
    width: "60px",
    objectFit: "cover",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    marginRight: "200px",
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
};

export default Navbar;
