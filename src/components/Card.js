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

const Card = (dataFromJson) => {
  const dataParsed = jsonData["posts_by_date"];
  var dates = Object.keys(jsonData["posts_by_date"]);
  var sortedDates = dates.sort((a, b) => b.localeCompare(a));

  return (
    <>
      {sortedDates.map((element) => {
        return (
          <>
            <div className="date-title">{element}</div>
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
                        ></img>
                      </div>
                      <div className="card-time">
                        <p>
                          {dataParsed[element][item].is_published === true
                            ? dataParsed[element][item].published_at
                            : dataParsed[element][item].updated_at}
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
                        ></img>
                        <p className="stat-count">123</p>
                        <img
                          src={
                            dataParsed[element][item]["account"].channel ===
                            "twitter"
                              ? twSharesIcon
                              : faCommentsIcon
                          }
                        ></img>
                        <p className="stat-count">123</p>
                        <img
                          src={
                            dataParsed[element][item]["account"].channel ===
                            "twitter"
                              ? faCommentsIcon
                              : faSharesIcon
                          }
                        ></img>
                        <p className="stat-count">123</p>
                        <img src={faViewsIcon}></img>
                        <p className="stat-count">123</p>
                      </div>
                      <div className="card-actions">
                        <img src={cancelIcon}></img>
                        <img src={deleteIcon}></img>
                        <img src={optionsIcon}></img>
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
