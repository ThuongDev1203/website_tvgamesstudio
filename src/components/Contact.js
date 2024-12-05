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
        <h1 style={styles.heading}>Liên hệ với chúng tôi</h1>
        <p style={styles.subHeading}>
          Bạn có câu hỏi nào không? Hãy liên hệ với chúng tôi qua biểu mẫu dưới
          đây!
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
            Gửi
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
    height: "100vh",
    backgroundColor: "#f9f9f9",
    padding: "0 20px",
  },
  innerContainer: {
    maxWidth: "500px",
    width: "100%",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  heading: {
    fontSize: "2em",
    marginBottom: "10px",
    color: "#333",
  },
  subHeading: {
    fontSize: "1.1em",
    marginBottom: "20px",
    color: "#666",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1em",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1.2em",
    boxSizing: "border-box",
    textAlign: "center",
  },
  button: {
    padding: "12px 20px",
    fontSize: "1em",
    color: "#fff",
    backgroundColor: "#FF8000",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#F29F58",
  },
};

export default Contact;
