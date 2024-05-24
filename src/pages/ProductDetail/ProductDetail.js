import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageBox from "./Components/ImageBox/ImageBox";
import DetailInformation from "./Components/DetailInformation/DetailInformation";
import ProductDescription from "./ProductDescription";
import { API_ADDRESS_ORDERS } from "../../utils/API_ADDRESS";
import "./ProductDetail.scss";

function ProductDetail() {
  const [logIn, setLogIn] = useState("");
  const [details, setDetails] = useState([]);
  const [inOut, setInOut] = useState(false);
  const [soldOut, setSoldOut] = useState(false);
  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    const url = `${API_ADDRESS_ORDERS}products/${productId}`;

    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    })
      .then(res => res.json())
      .then(detailData => {
        setDetails(detailData);
      });
  }, [productId]);

  return (
    <>
      {logIn}
      <div className="detailPage">
        <div>
          <ProductDescription details={details} inOut={inOut} />
        </div>
        <div className="main">
          <div className="location">
            <p>Shop</p>
            <button>
              <Link to="/productList/all">
                <img alt="arrow" src="/images/productDetail/arrow2.png" />
              </Link>
            </button>
          </div>
          <div className="informations">
            <div className="productImage">
              {soldOut && <div className="soldOut">Sold Out</div>}
              <ImageBox details={details} />
            </div>
            <div className="productInfo">
              <DetailInformation
                setLogIn={setLogIn}
                details={details}
                soldOut={soldOut}
                setSoldOut={setSoldOut}
                inOut={inOut}
                setInOut={setInOut}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
