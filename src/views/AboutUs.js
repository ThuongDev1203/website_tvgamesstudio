import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function AboutUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div style={styles.aboutUs}>
      <div style={styles.container}>
        {/* Text Section */}
        <div style={styles.textSection}>
          <h1 style={styles.mainHeading}>CHINH PHỤC ĐỈNH CAO</h1>
          <div style={styles.stats} ref={ref}>
            <div style={styles.stat}>
              <h3 style={styles.statNumber}>
                {inView ? (
                  <CountUp end={1.1} decimals={1} duration={2.5} />
                ) : (
                  "0"
                )}
                K+
              </h3>
              <p style={styles.statText}>Game Thủ</p>
            </div>
            <div style={styles.stat}>
              <h3 style={styles.statNumber}>
                {inView ? <CountUp end={5} duration={2.5} /> : "0"}+
              </h3>
              <p style={styles.statText}>Danh Hiệu</p>
            </div>
            <div style={styles.stat}>
              <h3 style={styles.statNumber}>
                {inView ? (
                  <CountUp end={1.1} decimals={1} duration={2.5} />
                ) : (
                  "0"
                )}
                K
              </h3>
              <p style={styles.statText}>Người Dùng</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div style={styles.imageSection}>
          <div style={styles.imageWrapper}>
            <img
              style={{
                ...styles.image,
                transform: inView
                  ? "scale(1) rotate(0deg)"
                  : "scale(0.9) rotate(5deg)",
                opacity: inView ? 1 : 0,
                transition: "transform 1s ease-out, opacity 1s ease-out",
              }}
              src="/assets/LogoNew.png"
              alt="VT Game Studio"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  aboutUs: {
    background: "linear-gradient(135deg, #0d0b1f 0%, #1e1747 100%)",
    color: "#fff",
    padding: "60px 20px",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Quicksand', sans-serif", // Thay bằng Quicksand
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },
  textSection: {
    flex: "1 1 50%",
    minWidth: "300px",
    padding: "0 20px",
  },
  mainHeading: {
    fontSize: "3em",
    fontWeight: "700", // Quicksand không có 900, dùng 700 thay thế
    textTransform: "uppercase",
    background: "linear-gradient(90deg, #ff007a, #00d4ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 0 15px rgba(255, 0, 122, 0.7)",
    marginBottom: "40px",
    letterSpacing: "2px",
  },
  stats: {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  stat: {
    padding: "20px",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "15px",
    border: "1px solid rgba(255, 0, 122, 0.3)",
    boxShadow: "0 0 20px rgba(0, 212, 255, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    ":hover": {
      transform: "translateY(-10px)",
      boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)",
    },
  },
  statNumber: {
    color: "#00d4ff",
    fontSize: "2.5em",
    fontWeight: "700",
    margin: "0",
    textShadow: "0 0 10px rgba(0, 212, 255, 0.8)",
  },
  statText: {
    margin: "5px 0 0",
    fontSize: "1.2em",
    color: "#fff",
    opacity: 0.9,
  },
  imageSection: {
    flex: "1 1 50%",
    minWidth: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  imageWrapper: {
    position: "relative",
    padding: "20px",
    background:
      "radial-gradient(circle, rgba(255,0,122,0.2) 0%, transparent 70%)",
    borderRadius: "50%",
    animation: "pulse 4s infinite",
  },
  image: {
    maxWidth: "350px",
    height: "auto",
    borderRadius: "15px",
    boxShadow: "0 0 30px rgba(255, 0, 122, 0.5)",
  },
};

// Thêm keyframes cho animation pulse
const keyframes = `
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.05);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0.8;
    }
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = keyframes;
  document.head.appendChild(styleSheet);
}

export default AboutUs;
