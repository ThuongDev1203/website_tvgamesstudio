import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
function AboutUs() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Chỉ chạy một lần khi vào khung nhìn
  });

  return (
    <div style={styles.aboutUs}>
      <div style={styles.container}>
        <div style={styles.textSection}>
          <h1 style={styles.mainHeading}>THÀNH TỰU CỦA CHÚNG TÔI</h1>
          <div style={styles.stats} ref={ref}>
            <div style={styles.stat}>
              <h3 style={styles.statNumber}>
                {inView ? <CountUp end={1} duration={2} /> : "0"}K+
              </h3>
              <p style={styles.statText}>Người chơi</p>
            </div>
            <div style={styles.stat}>
              <h3 style={styles.statNumber}>
                {inView ? <CountUp end={2} duration={2} /> : "0"}+
              </h3>
              <p style={styles.statText}>Danh hiệu</p>
            </div>
            <div style={styles.stat}>
              <h3 style={styles.statNumber}>
                {inView ? <CountUp end={1.1} decimals={1} duration={2} /> : "0"}
                K
              </h3>
              <p style={styles.statText}>Người dùng</p>
            </div>
          </div>
        </div>
        <div style={styles.imageSection}>
          <img
            style={{
              ...styles.image,
              transform: inView ? "translateX(0)" : "translateX(100px)",
              opacity: inView ? 1 : 0,
              transition: "transform 3s ease, opacity 3s ease",
            }}
            src="/assets/dataanalysis.png"
            alt="VT Game Studio"
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  aboutUs: {
    textAlign: "center",
    backgroundColor: "#1B1833",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap", // Cho phép phần tử xuống dòng nếu cần thiết
    margin: " 0 0 0 50px",
  },
  textSection: {
    maxWidth: "50%",
    flex: "1 1 50%", // Cho phép mở rộng linh hoạt
    minWidth: "300px", // Đảm bảo tối thiểu 300px
  },
  mainHeading: {
    fontSize: "2.5em",
    margin: "1em 0",
  },
  stats: {
    display: "flex",
    gap: "5px",
    justifyContent: "center",
    alignItems: "center",
  },
  stat: {
    padding: "20px 40px",
  },
  statNumber: {
    color: "#ff7f00",
    fontSize: "2em",
    margin: "0",
  },
  statText: {
    margin: "0",
  },
  imageSection: {
    maxWidth: "50%",
    flex: "1 1 50%", // Cho phép mở rộng linh hoạt
    minWidth: "300px", // Đảm bảo tối thiểu 300px
  },
  image: {
    maxWidth: "300px",
    height: "auto",
  },
};

export default AboutUs;
