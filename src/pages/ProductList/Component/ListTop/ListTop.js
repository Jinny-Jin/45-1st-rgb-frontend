import React from "react";
import "./ListTop.scss";

function ListTop() {
  return (
    <div className="listTop">
      <div className="topOfTop">
        <span className="artistOfMay">Artist of May</span>
        <span className="haechan">Hae</span>
      </div>
      <img
        alt="List"
        src="https://images.unsplash.com/photo-1589442694956-9eaf242dd1fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80"
      />
    </div>
  );
}

export default ListTop;
