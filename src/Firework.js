import React, { useEffect, useState } from "react";
import fireworkGif from "./assets/videos/firework.gif";
import "animate.css";
import { useNavigate } from "react-router-dom";

const Fireworks = () => {
  const [isShowFirework, setIsShowFirework] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setIsShowFirework(false);
    }, 20000);
  }, []);
  useEffect(() => {
    if (!isShowFirework) {
      navigate("/happy-new-year")
    }
  }, [isShowFirework])
  return (
    <div style={{ backgroundColor: "black", height: "100vh", overflow: "hidden" }}>
      <img
        src={fireworkGif}
        alt=""
        style={{ width: "100%", height: "100%" }}
      />
      {/* ) : (
        <div className="text-happy">
          <div>
            <h1 class="animate__animated animate__fadeInUp">
              Happy new year 2024!
            </h1>
            <h1 class="animate__animated animate__fadeInUp">And</h1>
            <h1 class="animate__animated animate__fadeInUp">
              Happy birthday to Xuan!
            </h1>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Fireworks;
