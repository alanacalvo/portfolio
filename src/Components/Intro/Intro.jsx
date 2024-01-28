import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "software engineer",
        "extrovert",
        "front end developer",
        "boy mom",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/alana.png" alt="portfolio-owner-image"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there!</h2>
          <h1>I'm Alana Calvo</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <p>
            I am a creative, driven, and energetic software engineer that is
            passionate about creating impactful solutions that help bring the
            change we need to see in the world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
