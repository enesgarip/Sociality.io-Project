import "./App.css";
import React from "react";
import Logo from "./imgs/Navigation-SocialityLogo.png";
import Brand1 from "./imgs/logoipsum-223.svg";
import Brand2 from "./imgs/logoipsum-224.svg";
import Brand3 from "./imgs/logoipsum-226.svg";
import Brand4 from "./imgs/logoipsum-246.svg";
import Brand5 from "./imgs/logoipsum-280.svg";
import Brand6 from "./imgs/logoipsum-284.svg";
import StatusBar from "./imgs/Descriptions.png";
import Profile from "./imgs/Profile.png";
import Accordion from "./components/Accordion";
import { accordionData } from "./utils/MenuContent";
import notIcon from "./imgs/menuIcon/Icon1.ico";
import Card from "./components/Card";
import data from "./utils/data.json";

function App() {
  const dataJSON = data.posts_by_date;
  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="brandMenu">
        <ul>
          <li>
            <img src={Brand1} alt="brand1" />
          </li>
          <li>
            <img src={Brand2} alt="brand2" />
          </li>
          <li>
            <img src={Brand3} alt="brand3" />
          </li>
          <li>
            <img src={Brand4} alt="brand4" />
          </li>
          <li>
            <img src={Brand5} alt="brand5" />
          </li>
          <li>
            <img src={Brand6} alt="brand6" />
          </li>
        </ul>
      </div>

      <div className="profile">
        <img src={Profile} alt="Profile"></img>
      </div>
      <div className="statusBar">
        <img src={StatusBar} alt="StatusBar"></img>
      </div>
      <div className="accordionMenu">
        <div className="accordion-item">
          <div className="accordion-title">
            <img className="icon" src={notIcon} alt="icon"></img>
            <p>NOTIFICATIONS</p>
          </div>
        </div>
        {React.Children.toArray(
          accordionData.map(({ icon, title, content }) => (
            <Accordion icon={icon} title={title} content={content} />
          ))
        )}
      </div>
      <div className="content">{React.Children.toArray(<Card></Card>)}</div>
    </div>
  );
}

export default App;
