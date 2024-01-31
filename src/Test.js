import React, { useState } from "react";

const Test = () => {
  const [buttonPosition, setButtonPosition] = useState({
    top: "50%",
    left: "50%",
  });

  const handleMouseMove = () => {
    // Tính toán vị trí ngẫu nhiên
    const randomTop = Math.random() * (window.innerHeight - 40);
    const randomLeft = Math.random() * (window.innerWidth - 80);

    setButtonPosition({
      top: `${randomTop}px`,
      left: `${randomLeft}px`,
    });
  };

  return (
    <div
      className="justify-content-center aligns-item-center"
      style={{ position: "relative" }}
    >
      <div>Bạn có muốn nhận lì xì không?</div>
      <button
        className="slide-button"
        style={{
          position: "absolute",
          top: buttonPosition.top,
          left: buttonPosition.left,
        }}
        onMouseMove={handleMouseMove}
        // disabled={buttonPosition.top !== "50%"}
      >
        Có
      </button>
      <button
        style={{
          position: "absolute",
          top: "50%",
          left: "55%",
        }}
      >
        Không
      </button>
    </div>
  );
};

export default Test;
