import React, { useState } from "react";

const Accordion = ({ icon, title, content }) => {
  const [isActive, setIsActive] = useState(false);

  var list = String(content).split(", ");

  return (
    <div className="accordion-item" onClick={() => setIsActive(!isActive)}>
      <div className="accordion-title">
        <img className="icon" src={icon} alt="icon"></img>
        <p>{title}</p>
      </div>
      <div className="plus-sign">{isActive ? "-" : "+"}</div>
      {isActive && (
        <div className="accordion-content">
          <ul className="menu-list">
            {list.map((item) => {
              return (
                <>
                  <li className="menu-list-item">{item}</li>
                </>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Accordion;
