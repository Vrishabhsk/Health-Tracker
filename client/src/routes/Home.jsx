import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Content from "../components/Content";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="home">
      <Navbar home={true} />
      <div id="landing">
        <Typewriter
          className="tagline"
          onInit={(typewriter) => {
            typewriter
              .typeString("Better information, Better health")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Better information, Better health")
              .start();
          }}
        />
      </div>

      <Content />
      <Footer />
    </div>
  );
}
