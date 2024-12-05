import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTiktok,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const handleJobAlertSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for subscribing to job alerts!");
  };

  const styles = {
    footer: {
      backgroundColor: "#2d2d2d",
      color: "#fff",
      padding: "20px 50px",
      fontSize: "14px",
    },
    footerContainer: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    section: {
      margin: "10px",
    },
    socialIcons: {
      display: "flex",
      gap: "10px",
    },
    icon: {
      fontSize: "24px",
      cursor: "pointer",
      color: "#fff",
      transition: "color 0.3s",
    },
    iconHover: {
      color: "#f60",
    },
    jobAlertForm: {
      display: "flex",
    },
    input: {
      padding: "5px",
      marginRight: "10px",
      border: "none",
      borderRadius: "4px",
    },
    button: {
      padding: "5px 15px",
      backgroundColor: "#f60",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    footerBottom: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "1px solid #444",
      marginTop: "20px",
      paddingTop: "10px",
    },
    logo: {
      fontWeight: "bold",
      fontSize: "16px",
    },
    links: {
      display: "flex",
      gap: "15px",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        {/* Social Channel Section */}
        <div style={styles.section}>
          <h3>Social Channel</h3>
          <div style={styles.socialIcons}>
            <FontAwesomeIcon
              href="https://www.facebook.com/share/19GgsqZRXb/?mibextid=LQQJ4d"
              icon={faFacebook}
              style={styles.icon}
            />
            <FontAwesomeIcon icon={faLinkedin} style={styles.icon} />
            <FontAwesomeIcon icon={faTiktok} style={styles.icon} />
            <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
            <FontAwesomeIcon icon={faYoutube} style={styles.icon} />
          </div>
        </div>

        {/* Contact Info Section */}
        <div style={styles.section}>
          <h3>Contact info</h3>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> thuong1203@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +84 76 5012 192
          </p>
        </div>

        {/* Job Alert Section */}
        <div style={styles.section}>
          <h3>Get Jobs Alert</h3>
          <form onSubmit={handleJobAlertSubmit} style={styles.jobAlertForm}>
            <input
              type="email"
              placeholder="Enter your email here"
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>
              Submit
            </button>
          </form>
        </div>

        {/* More About Us Section */}
        <div style={styles.section}>
          <h3>More about us</h3>
          <ul>
            <li>Jobs</li>
            <li>Bootcamp</li>
            <li>Benefits</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={styles.footerBottom}>
        <div style={styles.logo}>VT GAME STUDIO</div>
        <div style={styles.links}>
          <spam href="#" style={styles.link}>
            Privacy Policy
          </spam>
          <spam href="#" style={styles.link}>
            Terms & Conditions
          </spam>
        </div>
        <div>© 2024 by VT Game Studio</div>
      </div>
    </footer>
  );
};

export default Footer;
