import "./Portfolio.scss";
import PortfolioList from "../PortfolioList/PortfolioList";
import { useState } from "react";

function Portfolio() {
  const [selected, setSelected] = useState("featured");

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/alana.png" alt="" />
          <h3>2048</h3>
        </div>
        <div className="item">
          <img src="assets/react.png" alt="" />
          <h3>GamerList</h3>
        </div>
        <div className="item">
          <img src="assets/react.png" alt="" />
          <h3>JellyJam</h3>
        </div>
        <div className="item">
          <img src="assets/react.png" alt="" />
          <h3>Focus App</h3>
        </div>
        <div className="item">
          <img src="assets/react.png" alt="" />
          <h3>Focus App</h3>
        </div>
        <div className="item">
          <img src="assets/react.png" alt="" />
          <h3>Focus App</h3>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
