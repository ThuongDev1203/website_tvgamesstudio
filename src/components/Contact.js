import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Cảm ơn bạn, ${formData.name}! Chúng tôi sẽ sớm liên hệ lại.`);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div style={styles.contactContainer}>
      <div style={styles.innerContainer}>
        <h1 style={styles.heading}>LIÊN HỆ VỚI CHÚNG TÔI</h1>
        <p style={styles.subHeading}>
          Bạn có thắc mắc? Đừng ngại, hãy gửi tin nhắn cho chúng tôi ngay!
        </p>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Tên của bạn"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Email của bạn"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            style={styles.textarea}
            name="message"
            placeholder="Lời nhắn của bạn"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
          <button style={styles.button} type="submit">
            GỬI TIN NHẮN
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  contactContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0d0b1f, #1e1747)", // Gradient tím đậm
    padding: "20px",
    fontFamily: "'Quicksand', sans-serif",
  },
  innerContainer: {
    maxWidth: "600px",
    width: "100%",
    background: "rgba(255, 0, 122, 0.1)", // Nền hồng nhạt
    padding: "40px",
    borderRadius: "20px",
    boxShadow:
      "0 10px 40px rgba(255, 0, 122, 0.3), 0 0 20px rgba(0, 212, 255, 0.1)",
    border: "2px solid",
    borderImage: "linear-gradient(90deg, #ff007a, #00d4ff) 1", // Viền gradient neon
    textAlign: "center",
    backdropFilter: "blur(10px)", // Hiệu ứng mờ
    WebkitBackdropFilter: "blur(10px)",
    animation: "fadeIn 1s ease-in-out",
  },
  heading: {
    fontSize: "2.5em",
    fontWeight: "700",
    textTransform: "uppercase",
    background: "linear-gradient(90deg, #ff007a, #00d4ff)", // Gradient hồng-xanh
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 0 20px rgba(255, 0, 122, 0.8)",
    marginBottom: "15px",
  },
  subHeading: {
    fontSize: "1.3em",
    color: "#fff",
    textShadow: "0 0 5px rgba(0, 212, 255, 0.4)",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "2px solid #00d4ff", // Viền xanh neon
    borderRadius: "25px",
    background: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
    fontSize: "1.1em",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    ":focus": {
      borderColor: "#ff007a", // Hồng khi focus
      boxShadow: "0 0 15px rgba(255, 0, 122, 0.5)",
    },
  },
  textarea: {
    width: "100%",
    padding: "12px",
    border: "2px solid #00d4ff",
    borderRadius: "15px",
    background: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
    fontSize: "1.1em",
    boxSizing: "border-box",
    textAlign: "left",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    ":focus": {
      borderColor: "#ff007a",
      boxShadow: "0 0 15px rgba(255, 0, 122, 0.5)",
    },
  },
  button: {
    padding: "14px 30px",
    fontSize: "1.2em",
    fontWeight: "700",
    color: "#fff",
    background: "linear-gradient(90deg, #ff007a, #00d4ff)", // Gradient hồng-xanh
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 0 20px rgba(255, 0, 122, 0.5)",
    textTransform: "uppercase",
    ":hover": {
      transform: "scale(1.1)",
      boxShadow: "0 0 30px rgba(255, 0, 122, 0.8)",
    },
  },
};

// Thêm keyframes cho animation
const keyframes = `
  @keyframes fadeIn {
    0% { opacity: 0; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1); }
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = keyframes;
  document.head.appendChild(styleSheet);
}

export default Contact;
