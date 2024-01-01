import React, { useEffect, useState } from 'react';
import fireworkGif from "./assets/videos/firework.gif";
import fireworkMP4 from "./assets/videos/firework.mp4";

const Fireworks = () => {
  return (
    <div>
      <img src={fireworkGif} alt="" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default Fireworks;