import React, { useEffect, useState } from "react";
import Slideshow from "./Slideshow";
import AboutUs from "../views/AboutUs";
import GameInfo from "../views/GameInfo";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      {/* Slideshow Section */}
      <section style={styles.slideshowSection}>
        <Slideshow />
      </section>

      {/* About Section */}
      <section
        style={{
          ...styles.aboutSection,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(0.95)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        <h2 style={styles.aboutTitle}>KHÁM PHÁ VT GAME STUDIO</h2>
        <p style={styles.aboutText}>
          VT Game Studio - nơi đam mê hội tụ, sáng tạo bùng nổ! Thành lập tại
          TP. Hồ Chí Minh bởi những sinh viên đầy nhiệt huyết, chúng tôi mang
          đến những tựa game đa nền tảng đột phá, kết nối cộng đồng game thủ qua
          từng trải nghiệm độc đáo.
        </p>
      </section>

      {/* Giữ nguyên các phần khác */}
      <div style={styles.divider}></div>
      <AboutUs />
      <div style={styles.divider}></div>
      <GameInfo />
    </div>
  );
};

const styles = {
  container: {
    paddingTop: "80px",
    textAlign: "center",
  },
  slideshowSection: {
    position: "relative",
    zIndex: 1,
    background:
      "linear-gradient(135deg, rgba(13, 11, 31, 0.8), rgba(30, 23, 71, 0.8))", // Gradient tím đậm
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
    borderRadius: "0 0 20px 20px",
    overflow: "hidden",
  },
  aboutSection: {
    padding: "60px 40px",
    background: "rgba(0, 212, 255, 0.1)", // Xanh cyan nhạt làm nền
    borderRadius: "20px",
    maxWidth: "1000px",
    margin: "40px auto",
    boxShadow:
      "0 10px 40px rgba(0, 212, 255, 0.3), 0 0 20px rgba(0, 212, 255, 0.1)",
    border: "1px solid rgba(0, 212, 255, 0.4)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    position: "relative",
    overflow: "hidden",
  },
  aboutTitle: {
    fontSize: "3rem",
    fontWeight: "700",
    textTransform: "uppercase",
    background: "linear-gradient(90deg, #8a2be2, #ff007a)", // Gradient tím-hồng
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 0 20px rgba(138, 43, 226, 0.8)", // Shadow tím
    marginBottom: "25px",
    letterSpacing: "2px",
    fontFamily: "'Quicksand', sans-serif",
  },
  aboutText: {
    fontSize: "1.3rem",
    color: "#000", // Trắng để tương phản với nền xanh
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.8",
    opacity: 0.9,
    textShadow: "0 0 5px rgba(3, 142, 188, 0.4)", // Shadow xanh nhạt
    fontFamily: "'Quicksand', sans-serif",
  },
  divider: {
    width: "60%",
    height: "4px",
    backgroundColor: "#444",
    margin: "40px auto",
    borderRadius: "5px",
  },
};

export default Home;
