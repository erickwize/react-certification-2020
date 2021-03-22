import React from "react";

function CardItem({ name, sprite, description }) {
  return (
    <div className="card-item">
      <img src={sprite} alt=""/>
      <h2>{name}</h2>
      <h3>{description}</h3>
    </div>
  );
}

export default CardItem;