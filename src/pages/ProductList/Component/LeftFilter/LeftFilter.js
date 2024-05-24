import React, { useState } from "react";
import "./LeftFilter.scss";

function LeftFilter({ shopContent, setShopContent }) {
  const [show, setShow] = useState(false);

  const handleSort = sort => {
    const copy = [...shopContent];
    copy.sort((a, b) => {
      if (sort === "price") {
        return Number(a.price) < Number(b.price) ? -1 : 1;
      } else if (sort === "abc") {
        return a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1;
      } else {
        return 0;
      }
    });
    setShopContent(copy);
  };

  return (
    <div className="leftFilter">
      <div>
        <div className="sortingContent">
          <div className="showButton">
            <span
              onClick={() => {
                setShow(!show);
              }}
            >
              정렬하기
            </span>
            <button
              onClick={() => {
                setShow(!show);
              }}
            >
              <img
                alt="button"
                src={`${
                  show
                    ? "/images/productList/Expand Arrow2.png"
                    : "/images/productList/Expand Arrow.png"
                }`}
              />
            </button>
          </div>
          <div>
            {show ? (
              <div className="priceAndNameButton">
                <p className="sorting">
                  <button onClick={() => handleSort("price")}>가격순</button>
                </p>
                <p className="sorting">
                  <button onClick={() => handleSort("abc")}>이름순</button>
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftFilter;
