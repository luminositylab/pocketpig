import Coinsvg from './../../assets/coins/fiveCoin.svg';
import React, { Component } from "react";

const GAME_WIDTH = 650;
const GAME_HEIGHT = 340;

const BODY_DIAMETER = Math.trunc(Math.max(GAME_WIDTH, GAME_HEIGHT) * 0.05);
const BORDER_WIDTH = Math.trunc(BODY_DIAMETER * 0.1);

const FiveCoin = ({body}) => {
    const { position } = body;

    const x = position.x - BODY_DIAMETER / 2;
    const y = position.y - BODY_DIAMETER / 2;
    return (
      <Coinsvg style={{
        width: BODY_DIAMETER,
        height: BODY_DIAMETER,
        position: "absolute",
        borderRadius: BODY_DIAMETER * 2,
        left: x,
        top: y,
    }}/>
    );
  };
  
  export default FiveCoin;