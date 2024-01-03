import React from "react";
import ParticleTextEffect from "./particleTextEffect";
import { Wave1, Wave2, Random1, Random2 } from "./Example.js";
import { Wave, Random } from "react-animated-text";
import fireworkVideo from "./assets/videos/firework.mp4";

const Test = () => {
  return (
    <div>
      {/* <ParticleTextEffect text="Hearts" type="hearts" />
      <ParticleTextEffect text="BEAM" type="sunbeams" />
      <ParticleTextEffect text="LINES" type="lines" />
      <ParticleTextEffect text="BUBBLES" type="bubbles" />
      <ParticleTextEffect text="CONFETTI" type="confetti" />
      <ParticleTextEffect text="FIRE" type="fire" />
      <div style={{ color: "red", fontSize: "30px" }}>
        <Wave text="LOADING DATA" effect="jump" effectChange={2.0} />
      </div> */}
      {/* <h1>Examples of react-animated-text:</h1>

      <Wave1 />

      <Wave2 />

      <Random1 />

      <Random2 /> */}
      <video src={fireworkVideo} autoPlay muted></video>
    </div>
  );
};
export default Test;
