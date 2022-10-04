import React from "react";
import jsonData from "../utils/data.json";
import noPostImg from "../imgs/no-post-image.png";
import cancelIcon from "../imgs/actionsIcon/cancel.png";
import deleteIcon from "../imgs/actionsIcon/delete.png";
import optionsIcon from "../imgs/actionsIcon/options.png";
import faLikesIcon from "../imgs/statsIcon/falikes.png";
import faCommentsIcon from "../imgs/statsIcon/facomments.png";
import faSharesIcon from "../imgs/statsIcon/fashares.png";
import faViewsIcon from "../imgs/statsIcon/faviews.png";
import twHeartIcon from "../imgs/statsIcon/twheart.png";
import twSharesIcon from "../imgs/statsIcon/twshares.png";
import faLogoIcon from "../imgs/socialmediaIcon/Facebook-logo.png";
import twLogoIcon from "../imgs/socialmediaIcon/Twitter-logo.png";
import insLogoIcon from "../imgs/socialmediaIcon/Instagram-logo.png";

const Card = () => {
  const dataParsed = jsonData["posts_by_date"];
  var dates = Object.keys(jsonData["posts_by_date"]);
  var sortedDates = dates.sort((a, b) => b.localeCompare(a));

  function formatDate(newDate, isCardTime) {
    const months = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December",
    };

    const d = new Date(newDate);
    const year = d.getFullYear();
    const date = d.getDate();
    const hour = d.getHours();
    const minute = d.getMinutes();
    const monthName = months[d.getMonth()];
    const formatted = `${date} ${monthName} ${year}`;
    if (isCardTime) {
      return `${date} ${monthName} ${year} - ${hour}:${minute}`.toString();
    }
    return formatted.toString();
  }

  return (
    <>
      {sortedDates.map((element) => {
        return (
          <>
            <div className="date-title">{formatDate(element, false)}</div>
            <div className="content-container">
              {Object.keys(dataParsed[element]).map((item) => {
                return (
                  <>
                    <div className="card">
                      <div
                        className="status-line"
                        style={{
                          backgroundColor:
                            dataParsed[element][item].status === 0
                              ? "#F7BF38"
                              : dataParsed[element][item].status === 1
                              ? "#3AC183"
                              : dataParsed[element][item].status === 2
                              ? "#67B1F2"
                              : dataParsed[element][item].status === 3
                              ? "#ACACAC"
                              : dataParsed[element][item].status === 4
                              ? "#FB6450"
                              : "#67B1F2",
                        }}
                      >
                        <img
                          src={
                            dataParsed[element][item]["account"].channel ===
                            "twitter"
                              ? twLogoIcon
                              : dataParsed[element][item]["account"].channel ===
                                "facebook"
                              ? faLogoIcon
                              : insLogoIcon
                          }
                          alt="Social Media Icon"
                        ></img>
                      </div>
                      <div className="card-time">
                        <p>
                          {formatDate(
                            dataParsed[element][item].published_at,
                            true
                          )}
                        </p>
                      </div>
                      <div className="card-text">
                        <p>{dataParsed[element][item]["entry"].message}</p>
                      </div>
                      <div className="card-photo">
                        <img
                          src={dataParsed[element][item]["entry"].image[0]}
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = noPostImg;
                          }}
                          alt="Card"
                        ></img>
                      </div>
                      <div className="card-stats">
                        <img
                          src={
                            dataParsed[element][item]["account"].channel ===
                            "twitter"
                              ? twHeartIcon
                              : faLikesIcon
                          }
                          alt="Statistics Icon"
                        ></img>
                        <p className="stat-count">123</p>
                        <img
                          src={
                            dataParsed[element][item]["account"].channel ===
                            "twitter"
                              ? twSharesIcon
                              : faCommentsIcon
                          }
                          alt="Statistics Icon"
                        ></img>
                        <p className="stat-count">123</p>
                        <img
                          src={
                            dataParsed[element][item]["account"].channel ===
                            "twitter"
                              ? faCommentsIcon
                              : faSharesIcon
                          }
                          alt="Statistics Icon"
                        ></img>
                        <p className="stat-count">123</p>
                        <img src={faViewsIcon} alt="Statistics Icon"></img>
                        <p className="stat-count">123</p>
                      </div>
                      <div className="card-actions">
                        <img src={cancelIcon} alt="Actions Icon"></img>
                        <img src={deleteIcon} alt="Actions Icon"></img>
                        <img src={optionsIcon} alt="Actions Icon"></img>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
