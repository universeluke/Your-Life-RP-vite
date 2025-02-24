// Carousel.tsx
import { useState } from "react";
import "./Carousel.css";

interface Card {
  src: string;
  title: string;
  description: string;
  img: string;
}

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotationDirection, setRotationDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // delcaring the state so that vercel builds it without getting angry at me :))
  rotationDirection;

  const cards: Card[] = [
    {
      src: "/background1.png",
      title: "Princess Bike",
      description: "Customized for high-speed pursuit",
      img: "/femalechar.png",
    },
    {
      src: "/background2.png",
      title: "Gang vs. PD",
      description: "Take on the cops",
      img: "/malechar.png",
    },
    {
      src: "/background3.png",
      title: "Trevor",
      description: "Unpredictable force of chaos",
      img: "/malechar2.png",
    },
    {
      src: "/background4.png",
      title: "Trevor's Empire",
      description: "Building a criminal enterprise",
      img: "/malechar3.png",
    },
    {
      src: "/background5.png",
      title: "Trevor's Madness",
      description: "Mayhem in Los Santos",
      img: "/hazmatchar.png",
    },
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
      isActive: adjustedIndex === 0,
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
              const { x, z, rotateY, isActive } = calculateCardPosition(index);
              const scale = ((z + 300) / 300) * 0.5 + 0.5;

              return (
                <div
                  key={index}
                  className={`carousel-card ${isActive ? "active" : ""}`}
                  style={{
                    transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg)`,
                    opacity: scale,
                    zIndex: Math.round(scale * 100),
                  }}
                >
                  <div
                    className="card-container"
                    onMouseEnter={() => {
                      if (isActive) {
                        const cardElement = document.querySelector(
                          `.carousel-card.active`
                        );
                        cardElement?.classList.add("hovered");
                      }
                    }}
                    onMouseLeave={() => {
                      const cardElement = document.querySelector(
                        `.carousel-card.active`
                      );
                      cardElement?.classList.remove("hovered");
                    }}
                  >
                    <h3 className={`carousel-text ${isActive ? "active" : ""}`}>
                      {card.title}
                    </h3>
                    <div className="card">
                      <img
                        src={card.src}
                        className="card-image"
                        alt={card.title}
                      />
                    </div>
                    {isActive && (
                      <div className="card-overlay">
                        <div className="card-overlay-inside">
                          <img className="card-img" src={card.img}></img>
                        </div>
                      </div>
                    )}
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
