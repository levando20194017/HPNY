import React from "react";
import ParticleTextEffect from "./particleTextEffect";
// import "./index.css";

const Test = () => {
    return (
        <div>
            <ParticleTextEffect text="Hearts" type="hearts" />
            <ParticleTextEffect text="BEAM" type="sunbeams" />
            <ParticleTextEffect text="LINES" type="lines" />
            <ParticleTextEffect text="BUBBLES" type="bubbles" />
            <ParticleTextEffect text="CONFETTI" type="confetti" />
            <ParticleTextEffect text="FIRE" type="fire" />
        </div>
    )
};
export default Test;