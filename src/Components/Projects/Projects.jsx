import "./Projects.scss";
import { useState } from "react";

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "",
      title: "infobox.ai",
      desc: "A personal AI Assistant to make sense of all of your information under one roof.",
      img: "assets/infobox.png",
      liveLink: "https://www.infobox.ai",
      // githubLink: 'https://github.com/alanacalvo/2048'
    },
    {
      id: "2",
      icon: "",
      title: "2048",
      desc: "Recreation of the web game 2048.",
      img: "assets/2048.png",
      liveLink: "https://alanacalvo.github.io/project1/",
      githubLink: "https://github.com/alanacalvo/2048",
    },
    {
      id: "3",
      icon: "",
      title: "GamerList",
      desc: "A video game database in which the user can like, add, and delete video games from their wishlist.",
      img: "assets/GamerList.png",
      liveLink: "",
      githubLink: "https://github.com/alanacalvo/gamers-wishlist",
    },
    {
      id: "4",
      icon: "",
      title: "JellyJam",
      desc: "A group project using the Spotify API to recreate the Spotify Web Player.",
      img: "assets/JellyJam.png",
      liveLink: "https://jellyjam.netlify.app/",
      githubLink: "https://github.com/alanacalvo/jellyjam-client-side",
    },
    {
      id: "5",
      icon: "",
      title: "FocusUp",
      desc: "A web app where users can create and schedule timed focus sessions and keep track of factors that helped them be more productive.",
      img: "assets/FocusUp.png",
      liveLink: "https://main--focusup.netlify.app",
      githubLink: "https://github.com/alanacalvo/focusup-client",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="projects" id="projects">
      <div className="title">
        <h1>Projects</h1>
        <hr></hr>
      </div>

      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  {/* <div className="imgContainer">
                  <img src="assets/javascript.png" alt="" />
                </div> */}
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <div className="links">
                    <a href={d.liveLink} target="_blank">
                      Live Demo
                    </a>{" "}
                    |{" "}
                    <a href={d.githubLink} target="_blank">
                      Github
                    </a>
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />

      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}

export default Projects;
