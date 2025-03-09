import React, { useEffect, useState } from "react";
import Slideshow from "./Slideshow";
import AboutUs from "../views/AboutUs";
import GameInfo from "../views/GameInfo";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      {/* Slideshow Section */}
      <Slideshow />

      {/* About Section */}
      <section
        style={{
          ...styles.aboutSection,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <h2 style={styles.aboutTitle}>VỀ CHÚNG TÔI</h2>
        <p style={styles.aboutText}>
          VT Game Studio là một studio game nhỏ phát triển trò chơi đa nền tảng
          tại TP Hồ Chí Minh, được sáng lập bởi những bạn sinh viên đầy nhiệt
          huyết và đam mê. Với sự sáng tạo và năng lực vượt trội, VT Game Studio
          không ngừng nỗ lực để mang đến những trò chơi thú vị và đột phá.
        </p>
      </section>

      {/* Divider */}
      <div style={styles.divider}></div>

      {/* AboutUs Section */}
      <AboutUs />

      {/* Divider */}
      <div style={styles.divider}></div>

      {/* GameInfo Section */}
      <GameInfo />
    </div>
  );
};

const styles = {
  container: {
    paddingTop: "80px",
    textAlign: "center",
  },

  divider: {
    width: "60%",
    height: "4px",
    backgroundColor: "#444",
    margin: "40px auto",
    borderRadius: "5px",
  },

  aboutSection: {
    padding: "40px",
    backgroundColor: "#f8f8f8",
    borderRadius: "10px",
    maxWidth: "900px",
    margin: "20px auto",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    transform: "translateY(20px)",
    opacity: 0,
    transition: "opacity 1s ease-out, transform 1s ease-out",
  },

  aboutTitle: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "15px",
  },

  aboutText: {
    fontSize: "1.2rem",
    color: "#555",
    maxWidth: "750px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
};

export default Home;
