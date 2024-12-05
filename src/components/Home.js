import React, { useEffect, useState } from "react";
import Slideshow from "./Slideshow";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fade-in effect for About section
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay to trigger the fade-in animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ paddingTop: "85px" }}>
      {/* Slideshow Component */}
      <Slideshow />

      {/* Divider Line */}
      <div style={styles.divider}></div>

      {/* About Section */}
      <section
        style={{
          ...styles.aboutSection,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <h2 style={styles.aboutTitle}>About Us</h2>
        <p style={styles.aboutText}>
          Welcome to our website! We are a company focused on delivering the
          best products to our customers. Our team is dedicated to providing
          exceptional services and quality products that meet your needs. Stay
          tuned for more updates!
        </p>
      </section>
    </div>
  );
};

const styles = {
  // Divider style
  divider: {
    width: "100%",
    height: "2px",
    backgroundColor: "#333", // Dark color for the divider
    margin: "30px 0", // Space around the divider
  },

  // About Section styles
  aboutSection: {
    padding: "10px",
    backgroundColor: "#f4f4f4", // Light gray background color for the about section
    textAlign: "center",
    transition: "opacity 1s ease, transform 1s ease",
    zIndex: 1, // Ensure about section is on top of the slideshow
    position: "relative", // Position relative to avoid overlapping
  },

  aboutTitle: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
  },

  aboutText: {
    fontSize: "1.2rem",
    color: "#555",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
};

export default Home;
