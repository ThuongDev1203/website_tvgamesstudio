import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Nguyễn Cao Thượng",
      role: "Trưởng nhóm",
      description: "Unity Dev và ReactJs.",
      image: "/assets/avt.jpg",
    },
    {
      id: 2,
      name: "Nguyễn Văn Việt",
      role: "Phó nhóm",
      description: "Unity Dev và Data.",
      image: "/assets/avt1.jpg",
    },
  ];

  const missionData = [
    {
      id: 1,
      title: "SỨ MỆNH",
      content:
        "Mang đến giải pháp công nghệ tiên tiến, tối ưu hóa trải nghiệm của khách hàng.",
      image: "/assets/project-status.png",
    },
    {
      id: 2,
      title: "TẦM NHÌN",
      content:
        "Trở thành công ty công nghệ hàng đầu, dẫn đầu xu hướng chuyển đổi số tại Việt Nam.",
      image: "/assets/exploration.png",
    },
    {
      id: 3,
      title: "GIÁ TRỊ CỐT LÕI",
      content: "Sáng tạo, Chất lượng, Khách hàng là trung tâm.",
      image: "/assets/jobs.png",
    },
  ];

  const sliderImages = ["/assets/s3.png", "/assets/s4.png", "/assets/s5.png"];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div style={styles.container}>
      {/* Slideshow Section */}
      <Slider {...sliderSettings} style={styles.slider}>
        {sliderImages.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={styles.sliderImage}
            />
          </div>
        ))}
      </Slider>

      {/* Mission Section */}
      {missionData.map((item, index) => (
        <section
          key={item.id}
          style={{
            ...styles.missionSection,
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
          }}
        >
          <img src={item.image} alt={item.title} style={styles.missionImage} />
          <div style={styles.missionContent}>
            <h2 style={styles.heading}>{item.title}</h2>
            <p style={styles.text}>{item.content}</p>
          </div>
        </section>
      ))}

      {/* Divider Line */}
      <div style={styles.divider}></div>

      {/* Team Members Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>THÀNH VIÊN</h2>
        <div style={styles.members}>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              style={{
                ...styles.memberCard,
                ...(hoveredMember === member.id && styles.memberCardHovered),
              }}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{
                  ...styles.memberImage,
                  ...(hoveredMember === member.id && styles.memberImageHovered),
                }}
              />
              <div
                style={{
                  ...styles.memberInfo,
                  ...(hoveredMember === member.id && styles.memberInfoHovered),
                }}
              >
                <h3 style={styles.memberName}>{member.name}</h3>
                <p style={styles.memberRole}>{member.role}</p>
                <p style={styles.memberDescription}>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Quicksand', sans-serif",
    lineHeight: 1.6,
    padding: "80px 20px",
    background: "linear-gradient(135deg, #0d0b1f, #1e1747)", // Gradient tím đậm
    color: "#fff",
    minHeight: "100vh",
    overflow: "hidden",
  },
  slider: {
    marginBottom: "60px",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(255, 0, 122, 0.3)",
    border: "2px solid #00d4ff",
  },
  sliderImage: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    maxHeight: "500px",
  },
  divider: {
    width: "80%",
    height: "3px",
    background:
      "linear-gradient(90deg, transparent, #ff007a, #00d4ff, transparent)",
    margin: "60px auto",
    borderRadius: "5px",
    boxShadow: "0 0 15px rgba(255, 0, 122, 0.5)",
  },
  missionSection: {
    display: "flex",
    alignItems: "center",
    marginBottom: "50px",
    gap: "30px",
    background: "rgba(255, 0, 122, 0.1)",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(255, 0, 122, 0.2)",
    border: "1px solid rgba(255, 0, 122, 0.4)",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "scale(1.02)",
    },
  },
  missionImage: {
    width: "25%",
    height: "auto",
    borderRadius: "15px",
    boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
    border: "2px solid #00d4ff",
    transform: "rotate(5deg)", // Góc nghiêng kiểu hoạt hình
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "rotate(0deg) scale(1.1)",
    },
  },
  missionContent: {
    flex: 1,
    textAlign: "left",
  },
  section: {
    marginBottom: "60px",
    textAlign: "center",
    perspective: "1000px", // Không gian 3D cho member cards
  },
  heading: {
    fontSize: "3em",
    fontWeight: "700",
    textTransform: "uppercase",
    background: "linear-gradient(90deg, #ff007a, #00d4ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 0 20px rgba(255, 0, 122, 0.8)",
    marginBottom: "30px",
    animation: "bounce 2s infinite",
  },
  text: {
    fontSize: "1.4em",
    color: "#fff",
    textShadow: "0 0 5px rgba(0, 212, 255, 0.4)",
  },
  members: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  memberCard: {
    position: "relative",
    width: "320px",
    height: "420px",
    textAlign: "center",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
    cursor: "pointer",
    background: "rgba(0, 212, 255, 0.1)",
    borderRadius: "20px",
    border: "2px solid #ff007a",
    transition: "transform 0.5s ease, box-shadow 0.5s ease",
    transformStyle: "preserve-3d",
  },
  memberCardHovered: {
    transform: "rotateY(10deg) rotateX(5deg) scale(1.1)", // Hiệu ứng 3D nghiêng
    boxShadow:
      "0 20px 50px rgba(255, 0, 122, 0.7), 0 0 30px rgba(0, 212, 255, 0.5)",
    zIndex: 2,
  },
  memberImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "18px",
    transition: "transform 0.5s ease",
  },
  memberImageHovered: {
    transform: "scale(1.15)",
  },
  memberInfo: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    background:
      "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 31, 63, 0.7))",
    color: "#fff",
    padding: "15px",
    opacity: 0,
    transition: "opacity 0.3s ease",
    transform: "translateZ(20px)", // Chiều sâu 3D
  },
  memberInfoHovered: {
    opacity: 1,
  },
  memberName: {
    fontSize: "1.8em",
    margin: "10px 0",
    fontWeight: "700",
    color: "#ff007a",
    textShadow: "0 0 10px rgba(255, 0, 122, 0.8)",
  },
  memberRole: {
    fontSize: "1.2em",
    fontWeight: "700",
    color: "#00d4ff",
  },
  memberDescription: {
    fontSize: "1em",
    marginTop: "10px",
    color: "#fff",
  },
};

// Thêm keyframes cho animation
const keyframes = `
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-20px); }
    60% { transform: translateY(-10px); }
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = keyframes;
  document.head.appendChild(styleSheet);
}

export default About;
