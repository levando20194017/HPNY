import "./CountDown.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function CountDown() {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 950);
    }, 1000);
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
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (D < 0) {
      clearInterval(x);
      navigate("/firework");
    }
  }, 0.1);

  return (
    <div className="count-down">
      <div className="bg-countdown">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <div className="wrapper">
        <h1>Thời gian chỉ còn...</h1>
        <div className={`box-time `}>
          <div className="time">
            <p>Ngày</p>
            <span id="days">day</span>
          </div>
          <div className="time">
            <p>Giờ</p>
            <span id="hours">hours</span>
          </div>
          <div className="time">
            <p>Phút</p>
            <span id="minutes">minute</span>
          </div>
          <div className="time">
            <p>Giây</p>
            <span id="seconds">seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
