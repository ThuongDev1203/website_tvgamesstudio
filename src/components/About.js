import React, { useState } from "react";

function About() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Nguyễn Cao Thượng",
      role: "Trưởng nhóm",
      description: "Có 2 năm kinh nghiệm về Unity Dev và ReactJs.",
      image: "/assets/avt.jpg",
    },
    {
      id: 2,
      name: "Nguyễn Văn Việt",
      role: "Phó nhóm",
      description: "Có 1+ năm kinh nghiệm về Unity và Data.",
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

  return (
    <div style={styles.container}>
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

      <section style={styles.section}>
        <h2 style={styles.heading}>THÀNH VIÊN</h2>
        <div style={styles.members}>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              style={styles.memberCard}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <img
                src={member.image}
                alt={member.name}
                style={styles.memberImage}
              />
              <h3 style={styles.memberName}>{member.name}</h3>
              {hoveredMember === member.id && (
                <div style={styles.memberInfo}>
                  <p style={styles.memberRole}>{member.role}</p>
                  <p style={styles.memberDescription}>{member.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  divider: {
    width: "80%",
    height: "5px",
    backgroundColor: "#333", // Dark color for the divider
    margin: "30px auto", // Space around the divider
  },
  container: {
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
    padding: "20px",
    backgroundColor: "#f8f9fa",
    color: "#333",
    // eslint-disable-next-line no-dupe-keys
    padding: "100px",
  },
  missionSection: {
    display: "flex",
    alignItems: "center",
    marginBottom: "40px",
    gap: "20px",
  },
  missionImage: {
    width: "30%",
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
    width: "330px",
    textAlign: "center",
    //borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 6px 10px rgba(0,0,0,0.15)", // Tăng bóng mềm mại hơn
    cursor: "pointer",
    backgroundColor: "#fff",
    transition: "transform 0.3s, box-shadow 0.3s",
    padding: "20px", // Khoảng cách bên trong
  },

  memberImage: {
    width: "100%", // Tăng kích thước ảnh
    height: "400px", // Điều chỉnh chiều cao ảnh
    objectFit: "cover",
    //borderRadius: "50%", // Làm ảnh dạng hình tròn
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Thêm hiệu ứng đổ bóng
  },
  memberName: {
    fontSize: "1.5em", // Tăng kích cỡ chữ
    margin: "10px 0",
    fontWeight: "bold", // Làm chữ đậm
  },
  memberInfo: {
    position: "absolute",
    bottom: "0",
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "#fff",
    padding: "10px",
    width: "310px",
    //height: "auto",
    textAlign: "center",
    transition: "opacity 1s",
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
