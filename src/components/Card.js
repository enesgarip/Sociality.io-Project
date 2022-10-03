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

const Card = (dataFromJson) => {
  const dataParsed = jsonData["posts_by_date"];
  const dates = Object.keys(jsonData["posts_by_date"]);
  console.log(dates);
  return (
    <>
      {dates.map((element) => {
        return (
          <>
            <div className="date-title">{element}</div>
            <div className="content-container">
              {Object.keys(dataParsed[element]).map((item, uid) => {
                return (
                  <>
                    <div className="card">
                      <div className="status-line">
                        <p>{dataParsed[element][item].status}</p>
                      </div>
                      <div className="card-time">
                        <p>{dataParsed[element][item].published_at}</p>
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
                        <img src={faLikesIcon}></img>
                        <p className="stat-count">123</p>
                        <img src={faCommentsIcon}></img>
                        <p className="stat-count">123</p>
                        <img src={faSharesIcon}></img>
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
