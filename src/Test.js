import React from "react";
import fireworkVideo from "./assets/videos/firework.mp4";

const Test = () => {
  return (
    <div>
      <video src={fireworkVideo} autoPlay muted></video>
    </div>
  );
};
export default Test;
