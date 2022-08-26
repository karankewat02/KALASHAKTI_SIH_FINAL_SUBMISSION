import Spline from "@splinetool/react-spline";
import React from "react";
import Style from "./About.module.css";

export default function About() {
  return (
    <div className={Style.about}>
      <div>
        <h1>What is our vision?</h1>

        <p>let the art speak for you</p>

        <p>
        Our product is a platform for people from all walks of life, having a wide range of artwork, serving and catering to the needs of all ranges of our society. With Kalashakti, we envision a more inclusive and egalitarian world for all the artisans who are preserving the beautiful and rich art and culture of Incredible India with their immense hard work and dedication. We put our people and planet first.
        </p>
      </div>

      <div>
        <Spline scene="https://prod.spline.design/Z8CwLREgU8jlHLJD/scene.splinecode" />
      </div>
      {/* <p>We hope to be a revolution. A mission to be the hope of millions of artisans of India, and to provide artisans of India a channel to give their artwork a voice, a story. With the right support, KalaShakti can do exactly what its name suggests, empowering the rich art of Incredible India.</p> */}
    </div>
  );
}
