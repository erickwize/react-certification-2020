import React from "react";

function CardItem({ name, sprite }) {
  return (
    <div className="card-item">
      <img src={sprite} />
      <h2>{name}</h2>
    </div>
  );
}

export default CardItem;