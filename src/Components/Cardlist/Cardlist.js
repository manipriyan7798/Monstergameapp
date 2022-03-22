import React from "react";
import "./cardlist.css";
import { CardComponent } from "../Card/Card-component";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <CardComponent key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
