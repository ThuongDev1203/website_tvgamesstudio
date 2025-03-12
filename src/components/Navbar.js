import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <Nav isScrolled={isScrolled}>
      {/* Logo */}
      <LogoContainer isMobile={isMobile}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <Logo
            src={process.env.PUBLIC_URL + "/assets/LogoNew.png"}
            alt="Logo"
          />
        </Link>
      </LogoContainer>

      {/* Hamburger Menu cho điện thoại */}
      {isMobile && (
        <HamburgerMenu onClick={toggleMenu}>
          <Bar isMenuOpen={isMenuOpen} top />
          <Bar isMenuOpen={isMenuOpen} middle />
          <Bar isMenuOpen={isMenuOpen} bottom />
        </HamburgerMenu>
      )}

      {/* Menu */}
      <NavList isMobile={isMobile} isMenuOpen={isMenuOpen}>
        <NavItem>
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            TRANG CHỦ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
            VỀ CHÚNG TÔI
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
            LIÊN HỆ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/careers" onClick={() => setIsMenuOpen(false)}>
            TUYỂN DỤNG
          </NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

// Styled Components
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999; // Tăng z-index để nổi lên trên tất cả
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255, 77, 166, 0.2);
  backdrop-filter: ${({ isScrolled }) =>
    isScrolled ? "blur(15px)" : "blur(5px)"};
  background-color: ${({ isScrolled }) =>
    isScrolled ? "rgba(10, 25, 47, 0.9)" : "rgba(10, 25, 47, 1)"};
  box-shadow: ${({ isScrolled }) =>
    isScrolled
      ? "0 5px 20px rgba(255, 77, 166, 0.5)"
      : "0 2px 10px rgba(0, 212, 255, 0.3)"};
`;

const LogoContainer = styled.div`
  flex: 0 1 auto;
  margin-left: ${({ isMobile }) => (isMobile ? "15px" : "30px")};
  z-index: 10000; // Đảm bảo logo nổi trên menu mobile
`;

const Logo = styled.img`
  width: 65px;
  object-fit: cover;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const HamburgerMenu = styled.div`
  display: block;
  cursor: pointer;
  margin-right: 50px;
  z-index: 10000; // Đảm bảo hamburger nổi trên menu
`;

const Bar = styled.div`
  width: 28px;
  height: 3px;
  background: linear-gradient(90deg, #ff4da6, #00d4ff);
  margin: 6px 0;
  transition: all 0.3s ease;
  border-radius: 2px;
  ${({ isMenuOpen, top, middle, bottom }) => {
    if (top)
      return isMenuOpen
        ? "transform: rotate(-45deg) translate(-5px, 6px);"
        : "";
    if (middle) return isMenuOpen ? "opacity: 0;" : "";
    if (bottom)
      return isMenuOpen
        ? "transform: rotate(45deg) translate(-5px, -6px);"
        : "";
  }}
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin-right: ${({ isMobile }) => (isMobile ? "0" : "30px")};
  padding: 0;
  transition: all 0.3s ease;
  z-index: 9998; // Menu nằm dưới logo và hamburger nhưng trên nội dung khác

  ${({ isMobile, isMenuOpen }) =>
    isMobile &&
    `
    position: absolute;
    top: 80px;
    left: 0;
    flex-direction: column;
    background: linear-gradient(135deg, rgba(10, 25, 47, 0.95), rgba(0, 212, 255, 0.15));
    width: 100%;
    padding: ${isMenuOpen ? "20px 0" : "0"};
    height: ${isMenuOpen ? "auto" : "0"};
    overflow: hidden;
    opacity: ${isMenuOpen ? "1" : "0"};
    box-shadow: 0 5px 15px rgba(255, 77, 166, 0.3);
    transform: ${isMenuOpen ? "translateY(0)" : "translateY(-10px)"};
  `}
`;

const NavItem = styled.li`
  perspective: 1000px; // Không gian 3D cho hiệu ứng
  margin: 0 10px;
`;

const NavLink = styled(Link)`
  color: #e0e0e0;
  text-decoration: none;
  font-size: 17px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px 15px;
  display: block;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  position: relative;

  &:hover {
    color: #ff4da6;
    transform: rotateX(15deg) rotateY(15deg) translateZ(20px); // Hiệu ứng 3D
    text-shadow: 0 0 10px rgba(255, 77, 166, 0.8);
  }

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 5px;
    left: 15px;
    background: linear-gradient(90deg, #ff4da6, #00d4ff);
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: calc(100% - 30px);
  }

  ${({ isMobile }) =>
    isMobile &&
    `
    margin: 15px 20px;
    font-size: 19px;
    padding: 12px 0;
    text-shadow: 0 0 5px rgba(0, 212, 255, 0.5);
    &:hover {
      transform: none; // Bỏ 3D trên mobile
    }
    &:after {
      left: 20px;
    }
    &:hover:after {
      width: calc(100% - 40px);
    }
  `}
`;

export default Navbar;
