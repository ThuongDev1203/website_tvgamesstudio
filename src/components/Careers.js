import React from "react";

function Careers() {
  return (
    <div style={styles.careersContainer}>
      <h1 style={styles.heading}>THAM GIA NHÓM CỦA CHÚNG TÔI</h1>
      <p style={styles.message}>
        Chúng tôi luôn tìm kiếm những cá nhân tài năng để tham gia nhóm của
        chúng tôi. Hiện tại, không có việc làm nào đang tuyển dụng, nhưng hãy
        liên hệ với chúng tôi!
      </p>
      <img
        style={styles.image}
        src="/assets/job-seeker.png" // Replace with your image path
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
    fontFamily: "Arial, sans-serif",
    padding: "100px 20px",
    backgroundColor: "#f8f9fa",
    color: "#333",
  },
  heading: {
    fontSize: "2.2em",
    margin: "20px 0",
    color: "#1B1833",
  },
  message: {
    fontSize: "1.3em",
    margin: "50px 0",
    color: "#555",
  },
  image: {
    maxWidth: "300px",
    height: "auto",
    margin: "20px auto",
    display: "block",
  },
  contactButton: {
    backgroundColor: "#FF8000",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontSize: "1em",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "20px",
    transition: "background-color 0.3s ease",
  },
  contactButtonHover: {
    backgroundColor: "#333",
  },
};

export default Careers;
