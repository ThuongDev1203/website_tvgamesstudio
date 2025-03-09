import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Kiểm tra nếu đang ở chế độ điện thoại
  const isMobile = window.innerWidth <= 768;

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
      <div
        style={
          isMobile
            ? { ...styles.logoContainer, marginLeft: "20px" }
            : styles.logoContainer
        }
      >
        <img
          src={process.env.PUBLIC_URL + "/assets/LogoNew.png"}
          alt="Logo"
          style={styles.logo}
        />
      </div>

      {/* Hamburger Menu cho điện thoại */}
      {isMobile && (
        <div style={styles.hamburgerMenu} onClick={toggleMenu}>
          <div
            style={{
              ...styles.bar,
              transform: isMenuOpen
                ? "rotate(-45deg) translate(-5px, 6px)"
                : "none",
            }}
          ></div>
          <div
            style={{
              ...styles.bar,
              opacity: isMenuOpen ? 0 : 1,
            }}
          ></div>
          <div
            style={{
              ...styles.bar,
              transform: isMenuOpen
                ? "rotate(45deg) translate(-5px, -6px)"
                : "none",
            }}
          ></div>
        </div>
      )}

      {/* Menu */}
      <ul
        style={
          isMobile
            ? {
                ...styles.navList,
                position: "absolute",
                top: "80px",
                left: 0,
                flexDirection: "column",
                backgroundColor: "rgba(0, 31, 63, 0.95)",
                width: "100%",
                marginRight: 0,
                padding: isMenuOpen ? "20px 0" : 0,
                height: isMenuOpen ? "auto" : 0,
                overflow: "hidden",
                opacity: isMenuOpen ? 1 : 0,
                transition: "all 0.3s ease",
              }
            : styles.navList
        }
      >
        <li>
          <Link
            to="/"
            style={
              isMobile
                ? {
                    ...styles.navLink,
                    display: "block",
                    margin: "15px 20px",
                    fontSize: "18px",
                    padding: "10px 0",
                  }
                : styles.navLink
            }
            onClick={() => setIsMenuOpen(false)}
          >
            TRANG CHỦ
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={
              isMobile
                ? {
                    ...styles.navLink,
                    display: "block",
                    margin: "15px 20px",
                    fontSize: "18px",
                    padding: "10px 0",
                  }
                : styles.navLink
            }
            onClick={() => setIsMenuOpen(false)}
          >
            VỀ CHÚNG TÔI
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={
              isMobile
                ? {
                    ...styles.navLink,
                    display: "block",
                    margin: "15px 20px",
                    fontSize: "18px",
                    padding: "10px 0",
                  }
                : styles.navLink
            }
            onClick={() => setIsMenuOpen(false)}
          >
            LIÊN HỆ
          </Link>
        </li>
        <li>
          <Link
            to="/careers"
            style={
              isMobile
                ? {
                    ...styles.navLink,
                    display: "block",
                    margin: "15px 20px",
                    fontSize: "18px",
                    padding: "10px 0",
                  }
                : styles.navLink
            }
            onClick={() => setIsMenuOpen(false)}
          >
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
    padding: "10px 30px",
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
    marginLeft: "100px",
  },
  logo: {
    width: "60px",
    objectFit: "cover",
  },
  hamburgerMenu: {
    display: "block",
    cursor: "pointer",
    marginRight: "90px",
    zIndex: 1100,
  },
  bar: {
    width: "25px",
    height: "3px",
    backgroundColor: "white",
    margin: "5px 0",
    transition: "all 0.3s ease",
    borderRadius: "2px",
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
};

export default Navbar;
