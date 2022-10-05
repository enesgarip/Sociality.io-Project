import Brand1 from "../imgs/logoipsum-223.svg";
import Brand2 from "../imgs/logoipsum-224.svg";
import Brand3 from "../imgs/logoipsum-226.svg";
import Brand4 from "../imgs/logoipsum-246.svg";
import Brand5 from "../imgs/logoipsum-280.svg";
import Brand6 from "../imgs/logoipsum-284.svg";

import React, { useState } from "react";
const Brand = () => {
  const [isActive, setIsActive] = useState(false);
  const brandList = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6];

  return (
    <div className="brandMenu">
      <ul>
        {brandList.map((brandItem, i) => {
          return (
            <li
              onClick={() => setIsActive(brandItem)}
              className={
                isActive === brandItem ? "selectedBrand" : "unselectedBrand"
              }
              key={i}
            >
              <img src={brandItem} alt="Brand"></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Brand;
