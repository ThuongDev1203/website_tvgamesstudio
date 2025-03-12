import React from "react";
import styled from "styled-components";

const games = [
  {
    id: 1,
    title: "Pig Adventure",
    image: "/assets/pigad.png",
    description: "Chú heo vui vẻ, đầy nhiệt huyết, năng động",
    detailsLink: "https://thuonggamedev.itch.io/pigadventure",
  },
  {
    id: 2,
    title: "Undead Survivor",
    image: "/assets/undeads.png",
    description: "Chiến đấu với những zombie xấu xa",
    detailsLink:
      "https://thuonggamedev.itch.io/undead-survivor?secret=uinajAqfDFlr3ENRYJvwVHypI&fbclid=IwY2xjawG_e_pleHRuA2FlbQIxMAABHQgZFjXzdtlwXu9Xni4NtxgTa5ETyivy5h10DYZU6pFrQa1K_LlvvpUjxg_aem_1N9oVgicXf9h1RMDOsmlMQ",
  },
];

const GameInfoContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 40px 0;
  background: #1e1747; // Full màu tím đậm
  border-image: linear-gradient(90deg, rgb(169, 16, 90), #00d4ff) 1; // Gradient hồng-xanh cho viền
  border-radius: 20px; // Bo góc để viền trông đẹp hơn
  box-shadow: 0 0 30px rgba(155, 1, 75, 0.71); // Shadow nhẹ để tăng chiều sâu
`;

const GameInfoTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  text-transform: uppercase;
  background: linear-gradient(90deg, #ff007a, #00d4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(255, 0, 122, 0.8);
  margin-bottom: 15px;
  font-family: "Quicksand", sans-serif;
  animation: bounce 2s infinite;
`;

const GameInfoDescription = styled.p`
  font-size: 1.3em;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 30px;
  font-family: "Quicksand", sans-serif;
`;

const GameInfoCarousel = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 30px;
  justify-content: center;
  padding: 20px 10px;
  perspective: 1000px;
  scroll-behavior: smooth;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    padding: 20px 0;
    scrollbar-width: thin;
    scrollbar-color: #00d4ff rgba(0, 0, 0, 0.1);
    &::-webkit-scrollbar {
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: #00d4ff;
      border-radius: 4px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

const GameInfoItem = styled.div`
  position: relative;
  width: 320px;
  height: 380px;
  flex-shrink: 0;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  transform-style: preserve-3d;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 2px solid #00d4ff;

  &:hover {
    transform: rotateY(15deg) rotateX(10deg) scale(1.1);
    box-shadow: 0 20px 50px rgba(0, 212, 255, 0.7),
      0 0 30px rgba(255, 0, 122, 0.5);
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 340px;
  }
`;

const GameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 13px;
  transition: transform 0.5s ease;
  ${GameInfoItem}:hover & {
    transform: scale(1.05);
  }
`;

const GameInfoDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 31, 63, 0.7));
  color: #fff;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0s 0.3s;
  transform: translateZ(20px);

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 15px;
    color: #ff007a;
    text-shadow: 0 0 10px rgba(255, 0, 122, 0.8);
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
    padding: 0 20px;
    color: #ffffff;
  }

  a {
    font-size: 16px;
    color: #00d4ff;
    text-decoration: none;
    padding: 12px 25px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid #00d4ff;
    border-radius: 25px;
    transition: all 0.3s ease;
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.5);

    &:hover {
      background: #00d4ff;
      color: #fff;
      transform: scale(1.1);
      box-shadow: 0 0 25px rgba(0, 212, 255, 1);
    }
  }
`;

const GameInfoItemHover = styled(GameInfoItem)`
  &:hover ${GameInfoDetails} {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease;
  }
`;

const GameInfoLoadMore = styled.button`
  display: block;
  width: 180px;
  padding: 12px;
  background: linear-gradient(90deg, #ff007a, #00d4ff);
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  margin: 30px auto;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(255, 0, 122, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 30px rgba(255, 0, 122, 0.8);
  }
`;

function GameInfo() {
  return (
    <GameInfoContainer>
      <GameInfoTitle>GAMES</GameInfoTitle>
      <GameInfoDescription>
        Khám phá những tựa game đỉnh cao từ VT Game Studio: Pig Adventure,
        Undead Survivor và hơn thế nữa!
      </GameInfoDescription>
      <GameInfoCarousel>
        {games.map((game) => (
          <GameInfoItemHover key={game.id}>
            <GameImage src={game.image} alt={game.title} />
            <GameInfoDetails>
              <h3>{game.title}</h3>
              <p>{game.description}</p>
              <a
                href={game.detailsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chơi Thử
              </a>
            </GameInfoDetails>
          </GameInfoItemHover>
        ))}
      </GameInfoCarousel>
      <GameInfoLoadMore>Xem Thêm</GameInfoLoadMore>
    </GameInfoContainer>
  );
}

export default GameInfo;

// Thêm keyframes cho animation
const keyframes = `
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = keyframes;
  document.head.appendChild(styleSheet);
}
