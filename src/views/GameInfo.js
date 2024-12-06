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
`;

const GameInfoTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
`;

const GameInfoDescription = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
`;

const GameInfoCarousel = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  justify-content: center;
  padding: 20px 0;
`;

const GameInfoItem = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const GameImage = styled.img`
  width: 100%;
  height: 100%;
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
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0s 0.3s;

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    margin-bottom: 20px;
  }

  a {
    font-size: 14px;
    color: #ff8c00;
    text-decoration: none;
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid #ff8c00;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ff8c00;
      color: #fff;
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
  width: 150px;
  padding: 10px;
  background-color: #ff8c00;
  color: white;
  font-size: 16px;
  margin: 20px auto;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e07b00;
  }
`;

function GameInfo() {
  return (
    <GameInfoContainer>
      <GameInfoTitle>GAMES</GameInfoTitle>
      <GameInfoDescription>
        Chúng tôi đã phát triển tựa game như: Pig Adventure, Undead Survivor,...
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
                Chơi thử
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
