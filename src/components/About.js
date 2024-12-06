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
  slider: {
    marginBottom: "40px",
  },
  sliderImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  divider: {
    width: "80%",
    height: "5px",
    backgroundColor: "#333",
    margin: "30px auto",
  },
  container: {
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
    padding: "100px",
    backgroundColor: "#f8f9fa",
    color: "#333",
  },
  missionSection: {
    display: "flex",
    alignItems: "center",
    marginBottom: "40px",
    gap: "20px",
  },
  missionImage: {
    width: "20%",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  missionContent: {
    flex: 1,
    textAlign: "left",
  },
  section: {
    marginBottom: "40px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2em",
    marginBottom: "10px",
    color: "#1B1833",
  },
  text: {
    fontSize: "1.2em",
  },
  members: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  memberCard: {
    position: "relative",
    width: "300px",
    height: "400px",
    textAlign: "center",
    overflow: "hidden",
    boxShadow: "0 6px 10px rgba(0,0,0,0.15)",
    cursor: "pointer",
    backgroundColor: "#fff",
    transition: "transform 0.3s, box-shadow 0.3s",
    borderRadius: "8px",
  },
  memberCardHovered: {
    transform: "scale(1.1)",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
    zIndex: 2,
  },
  memberImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s",
  },
  memberImageHovered: {
    transform: "scale(1.2)",
  },
  memberInfo: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "#fff",
    padding: "10px",
    opacity: 0,
    transition: "opacity 0.3s",
  },
  memberInfoHovered: {
    opacity: 1,
  },
  memberName: {
    fontSize: "1.5em",
    margin: "10px 0",
    fontWeight: "bold",
  },
  memberRole: {
    fontSize: "1em",
    fontWeight: "bold",
  },
  memberDescription: {
    fontSize: "0.9em",
    marginTop: "10px",
  },
};

export default About;
