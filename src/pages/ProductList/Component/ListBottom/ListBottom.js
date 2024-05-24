import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import ArtWorks from "../ArtWorks/ArtWorks";
import LeftFilter from "../LeftFilter/LeftFilter";
import { API_ADDRESS_ORDERS } from "../../../../utils/API_ADDRESS";
import "./ListBottom.scss";

function ListBottom() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [shopContent, setShopContent] = useState([]);
  const [page, setPage] = useState(false);
  const offset = searchParams.get("offset") || 0;
  const limit = searchParams.get("limit") || shopContent?.length;
  const pageCount = new Array(Math.ceil(shopContent?.length / 4))
    .fill(0)
    .map((_, i) => i + 1);

  useEffect(() => {
    const url = `${API_ADDRESS_ORDERS}products/all?limit=${limit}&offset=${offset}`;

    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    })
      .then(res => res.json())
      .then(shop => {
        setShopContent(shop);
      });
  }, [offset, limit]);

  const showAll = () => {
    searchParams.set("offset", 0);
    searchParams.set("limit", 10);
    setSearchParams(searchParams);

    setPage(false);
  };

  const showFour = () => {
    searchParams.set("offset", 0);
    searchParams.set("limit", 4);
    setSearchParams(searchParams);

    setPage(true);
  };

  const movePage = pageNumber => {
    searchParams.set("offset", (pageNumber - 1) * 4);
    setSearchParams(searchParams);
  };

  return (
    <div className="listBottom">
      <div className="pagination">
        <div className="category">
          <span onClick={showAll}>All</span>
          <span onClick={showFour}>
            <img
              alt="button"
              className="fourButton"
              src="/images/productList/SquaresFour.png"
            />
          </span>
        </div>
      </div>
      <div className="itemList">
        <div className="listSorting">
          <LeftFilter
            shopContent={shopContent}
            setShopContent={setShopContent}
          />
        </div>
        <div className="listMain">
          <div className="artworkBox">
            {shopContent.map(art => {
              return (
                <Link key={art.id} to={`/productDetail/${art.id}`}>
                  <ArtWorks art={art} key={art.id} />
                </Link>
              );
            })}
          </div>
          {page ? (
            <div className="pageButton">
              {pageCount.map(page => {
                return (
                  <button
                    key={page}
                    onClick={() => {
                      movePage(page);
                    }}
                  >
                    {page}
                  </button>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default ListBottom;
