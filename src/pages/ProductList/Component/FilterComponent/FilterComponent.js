import React, { useState } from "react";

function FilterComponent({ shopContent, setShopContent }) {
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
    <div className="filterContent">
      <div className="priceAndButton">
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
          <div className="contentButton">
            <p className="sorting">
              <button
                className="sortingButton"
                onClick={() => handleSort("price")}
              >
                가격순
              </button>
            </p>
            <p className="sorting">
              <button
                className="sortingButton"
                onClick={() => handleSort("abc")}
              >
                이름순
              </button>
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default FilterComponent;
