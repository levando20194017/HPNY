import "./CountDown.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ParticleTextEffect from "./particleTextEffect";
import "animate.css";

function CountDown() {
  const navigate = useNavigate();
  // const [isAnimating, setIsAnimating] = useState(false);
  const [effectText, setEffectText] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsAnimating(true);
  //     setTimeout(() => setIsAnimating(false), 950);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setEffectText(true);
      setTimeout(() => setEffectText(false), 950);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  var fut = new Date("feb 10, 2024 00:00:00").getTime();
  let x = setInterval(function stime() {
    var now = new Date().getTime();
    var D = fut - now;
    var days = Math.floor(D / (1000 * 60 * 60 * 24));
    var hours = Math.floor(D / (1000 * 60 * 60));
    var minutes = Math.floor(D / (1000 * 60));
    var seconds = Math.floor(D / 1000);
    hours %= 24;
    minutes %= 60;
    seconds %= 60;
    if (D > 0) {
      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;
    }

    if (D < 0) {
      clearInterval(x);
      navigate("/firework");
    }
  }, 50);

  return (
    <div className="count-down">
      <div className="bg-countdown">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <div className="wrapper">
        <h1 class={effectText ? "animate__animated animate__flipInX" : ""}>
          Thời gian chỉ còn...
        </h1>
        <ParticleTextEffect text="Thời gian chỉ còn..." type="hearts" />
        <div className={`box-time `}>
          <div>
            <p>Ngày</p>
            <div className="time">
              <span id="days">day</span>
            </div>
          </div>
          <div>
            <p>Giờ</p>
            <div className="time">
              <span id="hours">hours</span>
            </div>
          </div>
          <div>
            <p>Phút</p>
            <div className="time">
              <span id="minutes">minute</span>
            </div>
          </div>
          <div>
            <p>Giây</p>
            <div className="time">
              <span id="seconds">seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
