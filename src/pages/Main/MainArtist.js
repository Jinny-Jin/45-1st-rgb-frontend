import React from "react";
import "./MainArtist.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

export default function MainArtist() {
  const navigate = useNavigate();

  return (
    <div className="introContainer">
      <div className="boxContainer">
        <div className="boxImg" />
        <div className="introText">
          <p className="firstText">Meet our international artists</p>
          <p className="secondText">5월의 아티스트, HAE</p>
          <button className="textMore">
            <Button
              action={() => {
                navigate("productDetail/all");
              }}
              buttonSize="mediumButton"
              buttonColor="dark"
            >
              작품 더보기
            </Button>
          </button>
        </div>
      </div>
    </div>
  );
}
