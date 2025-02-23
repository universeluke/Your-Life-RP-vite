// Carousel.tsx
import { useState } from "react";
import "./Carousel.css";

interface Card {
  src: string;
  title: string;
  description: string;
}

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotationDirection, setRotationDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const cards: Card[] = [
    {
      src: "/princessbike.jpeg",
      title: "Princess Bike",
      description: "Customized for high-speed pursuit",
    },
    {
      src: "/michael.png",
      title: "Michael",
      description: "Retired bank robber turned mentor",
    },
    {
      src: "/trevor.png",
      title: "Trevor",
      description: "Unpredictable force of chaos",
    },
    {
      src: "/trevortwo.png",
      title: "Trevor's Empire",
      description: "Building a criminal enterprise",
    },
    {
      src: "/trevorthree.png",
      title: "Trevor's Madness",
      description: "Mayhem in Los Santos",
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
                  <div className="card-container">
                    <div
                      className="card"
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
                      <img
                        src={card.src}
                        className="card-image"
                        alt={card.title}
                      />
                    </div>
                    {isActive && (
                      <div className="card-overlay">
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-description">{card.description}</p>
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
