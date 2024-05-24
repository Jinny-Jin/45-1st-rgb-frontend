import React, { useState, useEffect } from "react";
import Button from "../../../../components/Button/Button";
import User from "../../../User/User";
import { API_ADDRESS_ORDERS } from "../../../../utils/API_ADDRESS";

import "./DetailInformation.scss";

function DetailInformation({
  details,
  setLogIn,
  soldOut,
  setSoldOut,
  inOut,
  setInOut,
}) {
  const {
    quantity,
    id,
    title,
    artist_name,
    products_size_left,
    products_size_right,
    material,
    description,
    price,
  } = details;

  const [count, setCount] = useState(1);
  const [cart, setCart] = useState(false);
  const token = localStorage.getItem("TOKEN");
  const total = count * price;

  const cartButton = () => {
    setCart(!cart);
  };

  const plusCount = () => {
    if (count < quantity) setCount(count + 1);
  };

  const minusCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const addToCart = () => {
    const url = `${API_ADDRESS_ORDERS}carts`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: token,
      },
      body: JSON.stringify({
        productsId: id,
        quantity: count,
      }),
    }).then(res => res.json());
    alert("카트에 성공적으로 담겼습니다");
  };

  useEffect(() => {
    if (cart) {
      token ? addToCart() : setLogIn(<User setLogIn={setLogIn} />);
    }
  }, [cart]);

  useEffect(() => {
    if (quantity < 1) setSoldOut(true);
  }, [quantity]);

  return (
    <div className="detailInformation">
      <h2>{title}</h2>
      <h3>{artist_name}</h3>
      <div className="infoTop">
        <p className="size">
          {`${products_size_left} x ${products_size_right} cm`}
        </p>
        <p className="material">{`${material}`}</p>
      </div>
      <div className="infoMiddle">
        <span className="description">{`${description}`}</span>
        <span>
          <button
            onClick={() => {
              setInOut(!inOut);
            }}
          >
            <img alt="plusButton" src="/images/productDetail/plusButton.png" />
          </button>
        </span>
      </div>
      <div className="infoBottom">
        <div className="price">
          <span className="bold">Price</span>
          <span>{`${price} point`}</span>
        </div>
        <div className="quantity">
          <span className="bold">수량</span>
          {quantity > 0 ? (
            <div className="countButton">
              <button className="minusButton" onClick={minusCount}>
                -
              </button>
              {count}/{quantity}
              <button className="plusButton" onClick={plusCount}>
                +
              </button>
            </div>
          ) : (
            <div className="soldOutText">Sold Out</div>
          )}
        </div>
      </div>
      <div className="buying">
        <div className="totalPrice">
          <span className="bold">총 가격</span>
          <span>{`${total} point`}</span>
        </div>
        <div className="buyingButton">
          {soldOut ? (
            <span>구매 불가</span>
          ) : (
            <Button
              buttonColor="bright"
              buttonSize="bigButton"
              action={cartButton}
            >
              카트 추가
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailInformation;
