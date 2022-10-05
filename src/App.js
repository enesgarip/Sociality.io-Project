import "./App.css";
import React from "react";
import Logo from "./imgs/Navigation-SocialityLogo.png";
import StatusBar from "./imgs/Descriptions.png";
import Profile from "./imgs/Profile.png";
import Accordion from "./components/Accordion";
import { accordionData } from "./utils/MenuContent";
import notIcon from "./imgs/menuIcon/Icon1.ico";
import Card from "./components/Card";
import Brand from "./components/Brand";

function App() {
  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <Brand></Brand>
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
          accordionData.map(({ icon, title, content, i }) => (
            <Accordion icon={icon} title={title} content={content} />
          ))
        )}
      </div>
      <div className="content">{<Card></Card>}</div>
    </div>
  );
}

export default App;
