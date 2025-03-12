import React from "react";

function Careers() {
  return (
    <div style={styles.careersContainer}>
      <h1 style={styles.heading}>THAM GIA NHÓM CỦA CHÚNG TÔI</h1>
      <p style={styles.message}>
        Chúng tôi luôn chào đón những tài năng mới gia nhập đội ngũ. Hiện tại
        chưa có vị trí tuyển dụng, nhưng đừng ngần ngại liên hệ để cùng tạo nên
        điều tuyệt vời!
      </p>
      <img
        style={styles.image}
        src="/assets/job-seeker.png" // Đảm bảo đường dẫn chính xác
        alt="KHÔNG CÓ CÔNG VIỆC"
      />
      <button
        style={styles.contactButton}
        onClick={() => alert("Liên hệ với thuongdev1203@gmail.com!")}
      >
        Liên Hệ
      </button>
    </div>
  );
}

const styles = {
  careersContainer: {
    textAlign: "center",
    fontFamily: "'Quicksand', sans-serif",
    padding: "80px 20px",
    background: "linear-gradient(135deg, #1e1747, #2d2671)", // Gradient tím nhẹ nhàng hơn
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    margin: "20px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)", // Shadow nhẹ
    border: "1px solid rgba(255, 0, 122, 0.3)", // Viền hồng mờ
  },
  heading: {
    fontSize: "3em",
    fontWeight: "700",
    textTransform: "uppercase",
    background: "linear-gradient(90deg, #ff4da6, #00d4ff)", // Gradient hồng nhạt - xanh
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 0 15px rgba(255, 77, 166, 0.7)", // Shadow hồng nhạt
    margin: "20px 0",
  },
  message: {
    fontSize: "1.4em",
    margin: "40px 0",
    color: "#e0e0e0", // Trắng xám nhẹ
    maxWidth: "700px",
    textShadow: "0 0 5px rgba(0, 212, 255, 0.3)", // Shadow xanh nhẹ
    lineHeight: "1.6",
  },
  image: {
    maxWidth: "300px",
    height: "auto",
    margin: "30px auto",
    display: "block",
    borderRadius: "15px",
    boxShadow: "0 5px 20px rgba(0, 212, 255, 0.4)", // Shadow xanh nhẹ
    border: "1px solid #00d4ff", // Viền xanh nhạt
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "scale(1.05)", // Phóng to nhẹ khi hover
    },
  },
  contactButton: {
    background: "linear-gradient(90deg, #ff4da6, #00d4ff)", // Gradient hồng nhạt - xanh
    color: "#fff",
    border: "none",
    padding: "12px 25px",
    fontSize: "1.1em",
    fontWeight: "700",
    cursor: "pointer",
    borderRadius: "25px",
    marginTop: "30px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 0 15px rgba(255, 77, 166, 0.5)", // Shadow hồng nhạt
    textTransform: "uppercase",
    ":hover": {
      transform: "scale(1.05)",
      boxShadow: "0 0 25px rgba(255, 77, 166, 0.7)",
    },
  },
};

export default Careers;
