import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTiktok,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const handleJobAlertSubmit = (event) => {
    event.preventDefault();
    alert("Cảm ơn bạn đã đăng ký nhận thông báo tuyển dụng!");
  };

  const styles = {
    pageContainer: {
      display: "flex",
      flexDirection: "column",
      minHeight: "35vh",
    },
    footer: {
      backgroundColor: "#2d2d2d",
      color: "#fff",
      padding: "20px 20px", // Giảm padding ngang trên mobile
      fontSize: "14px",
      marginTop: "auto",
    },
    footerContainer: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "20px", // Thêm khoảng cách giữa các section
      maxWidth: "1200px",
      margin: "0 auto",
      "@media (max-width: 768px)": {
        flexDirection: "column", // Chuyển sang cột trên mobile
        alignItems: "center", // Căn giữa
        textAlign: "center",
      },
    },
    section: {
      margin: "10px",
      minWidth: "200px", // Đảm bảo section không quá nhỏ
      "@media (max-width: 768px)": {
        margin: "15px 0", // Tăng khoảng cách dọc trên mobile
        minWidth: "auto",
        width: "100%", // Chiếm toàn bộ chiều rộng
      },
    },
    ul: {
      listStyleType: "none",
      padding: "0",
      margin: "0",
    },
    li: {
      marginBottom: "10px",
      "@media (max-width: 768px)": {
        fontSize: "16px", // Tăng kích thước chữ cho dễ đọc
      },
    },
    socialIcons: {
      display: "flex",
      gap: "10px",
      "@media (max-width: 768px)": {
        justifyContent: "center", // Căn giữa icon trên mobile
        gap: "15px", // Tăng khoảng cách giữa các icon
      },
    },
    icon: {
      fontSize: "24px",
      cursor: "pointer",
      color: "#fff",
      transition: "color 0.3s",
      ":hover": {
        color: "#FF8000", // Màu cam khi hover
      },
    },
    iconLink: {
      color: "inherit",
      textDecoration: "none",
    },
    jobAlertForm: {
      display: "flex",
      "@media (max-width: 768px)": {
        flexDirection: "column", // Chuyển sang cột trên mobile
        alignItems: "center",
        gap: "10px",
      },
    },
    input: {
      padding: "5px",
      marginRight: "10px",
      border: "none",
      borderRadius: "4px",
      width: "100%", // Chiếm toàn bộ chiều rộng
      boxSizing: "border-box",
      "@media (max-width: 768px)": {
        marginRight: "0",
        padding: "8px", // Tăng padding cho dễ nhập
      },
    },
    button: {
      padding: "5px 15px",
      backgroundColor: "#FF8000",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "background-color 0.3s",
      ":hover": {
        backgroundColor: "#e07b00", // Tối hơn khi hover
      },
    },
    footerBottom: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "1px solid #444",
      marginTop: "20px",
      paddingTop: "10px",
      "@media (max-width: 768px)": {
        flexDirection: "column", // Chuyển sang cột trên mobile
        gap: "10px",
        textAlign: "center",
      },
    },
    logo: {
      fontWeight: "bold",
      fontSize: "16px",
      "@media (max-width: 768px)": {
        fontSize: "18px", // Tăng kích thước logo
      },
    },
    links: {
      display: "flex",
      gap: "15px",
      "@media (max-width: 768px)": {
        flexDirection: "column", // Chuyển sang cột
        gap: "8px",
      },
    },
    link: {
      color: "#fff",
      textDecoration: "none",
      transition: "color 0.3s",
      ":hover": {
        color: "#FF8000", // Màu cam khi hover
      },
    },
    contactText: {
      marginBottom: "10px",
      "@media (max-width: 768px)": {
        fontSize: "16px", // Tăng kích thước chữ
      },
    },
  };

  return (
    <div style={styles.pageContainer}>
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          {/* Social Channel Section */}
          <div style={styles.section}>
            <h2>Kênh Xã Hội</h2>
            <div style={styles.socialIcons}>
              <a
                href="https://www.facebook.com/profile.php?id=61567654960765"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconLink}
              >
                <FontAwesomeIcon icon={faFacebook} style={styles.icon} />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconLink}
              >
                <FontAwesomeIcon icon={faLinkedin} style={styles.icon} />
              </a>
              <a
                href="https://www.tiktok.com/@thuongdev?_t=8rz2ebcbFDD&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconLink}
              >
                <FontAwesomeIcon icon={faTiktok} style={styles.icon} />
              </a>
              <a
                href="https://www.instagram.com/thuongdev/profilecard/?igsh=bHdoZDRlazVuMWtw"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconLink}
              >
                <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCxbt0uq0qGP4NvlIdXIDiiQ"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconLink}
              >
                <FontAwesomeIcon icon={faYoutube} style={styles.icon} />
              </a>
            </div>
          </div>

          {/* Contact Info Section */}
          <div style={styles.section}>
            <h2>Thông Tin Liên Hệ</h2>
            <p style={styles.contactText}>
              <FontAwesomeIcon icon={faEnvelope} /> thuongdev1203@gmail.com
            </p>
            <p style={styles.contactText}>
              <FontAwesomeIcon icon={faPhone} /> +84 76 5012 192
            </p>
          </div>

          {/* Job Alert Section */}
          <div style={styles.section}>
            <h2>Cơ Hội Nghề Nghiệp</h2>
            <form onSubmit={handleJobAlertSubmit} style={styles.jobAlertForm}>
              <input
                type="email"
                placeholder="Nhập email của bạn"
                style={styles.input}
                required
              />
              <button type="submit" style={styles.button}>
                Gửi
              </button>
            </form>
          </div>

          {/* More About Us Section */}
          <div style={styles.section}>
            <h2>Thông Tin Thêm Về Chúng Tôi</h2>
            <ul style={styles.ul}>
              <li style={styles.li}>Trang Chủ</li>
              <li style={styles.li}>Về Chúng Tôi</li>
              <li style={styles.li}>Liên Hệ</li>
              <li style={styles.li}>Tuyển Dụng</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={styles.footerBottom}>
          <div style={styles.logo}>VT GAME STUDIO</div>
          <div style={styles.links}>
            <span href="" style={styles.link}>
              Privacy Policy
            </span>
            <span href="#" style={styles.link}>
              Terms & Conditions
            </span>
          </div>
          <div>© 2024 by VT Game Studio</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
