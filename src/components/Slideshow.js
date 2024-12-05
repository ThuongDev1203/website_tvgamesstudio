import React, { useState, useEffect } from "react";

const Slideshow = () => {
  const images = [
    "/assets/s1.png",
    "/assets/s2.png",
    "/assets/s3.png",
    "/assets/s4.png",
    "/assets/s5.png",
  ]; // Thay thế bằng đường dẫn hình ảnh của bạn

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Chuyển slide mỗi 3 giây
    return () => clearInterval(interval); // Dọn dẹp interval khi component bị hủy
  }, [images.length]);

  return (
    <div style={styles.slideshowContainer}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            ...styles.slide,
            opacity: index === currentIndex ? 1 : 0,
          }}
        >
          <img src={image} alt={`Slide ${index + 1}`} style={styles.image} />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;

const styles = {
  slideshowContainer: {
    position: "relative",
    width: "100%",
    height: 0,
    paddingTop: "56.25%", // For 16:9 aspect ratio, (9 / 16) * 100 = 56.25%
    overflow: "hidden",
  },
  slide: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    transition: "opacity 1s ease-in-out",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Ensures the image fully covers the container while maintaining aspect ratio
  },
};
