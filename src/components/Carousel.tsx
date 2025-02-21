import React, { useState } from "react";
import "./Carousel.css";

interface Card {
  title: string;
  color: string;
  content: string;
}

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotationDirection, setRotationDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const cards: Card[] = [
    { title: "Card 1", color: "#FF6B6B", content: "Some content here" },
    { title: "Card 2", color: "#4ECDC4", content: "Another description" },
    { title: "Card 3", color: "#45B7D1", content: "More details" },
    { title: "Card 4", color: "#96CEB4", content: "Extra information" },
    { title: "Card 5", color: "#FFEEAD", content: "Final card" },
  ];

  const rotateLeft = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setRotationDirection(-1);
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
    setTimeout(() => {
      setRotationDirection(0);
      setIsAnimating(false);
    }, 500);
  };

  const rotateRight = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setRotationDirection(1);
    setActiveIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => {
      setRotationDirection(0);
      setIsAnimating(false);
    }, 500);
  };

  const calculateCardPosition = (index: number) => {
    let adjustedIndex = index - activeIndex;

    // Normalize the adjusted index to be within -2 to +2 range
    if (adjustedIndex < -2) {
      adjustedIndex += cards.length;
    } else if (adjustedIndex > 2) {
      adjustedIndex -= cards.length;
    }

    const theta = (adjustedIndex * 2 * Math.PI) / cards.length;
    const radius = 300;

    return {
      x: radius * Math.sin(theta),
      z: radius * Math.cos(theta) - radius,
      rotateY: (theta * 180) / Math.PI,
    };
  };

  return (
    <div className="showcase-container">
      <h1 className="showcase-title">Showcase</h1>
      <div className="carousel-container">
        <button className="nav-button nav-left" onClick={rotateLeft}>
          ←
        </button>

        <div className="carousel-stage">
          <div className="carousel-wrapper">
            {cards.map((card, index) => {
              const { x, z, rotateY } = calculateCardPosition(index);
              const scale = ((z + 300) / 300) * 0.5 + 0.5;

              return (
                <div
                  key={index}
                  className="carousel-card"
                  style={{
                    transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg)`,
                    opacity: scale,
                    zIndex: Math.round(scale * 100),
                  }}
                >
                  <div className="card">
                    <div
                      className="card-header"
                      style={{ backgroundColor: card.color }}
                    />
                    <div className="card-body">
                      <h3>{card.title}</h3>
                      <p>{card.content}</p>
                    </div>
                    <div
                      className="card-footer"
                      style={{ backgroundColor: card.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button className="nav-button nav-right" onClick={rotateRight}>
          →
        </button>
      </div>
    </div>
  );
};

export default Carousel;
