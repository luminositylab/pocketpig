import DraggablePig from './../../assets/DraggablePig.svg';
import React, { Component } from "react";

const Pig = ({ body, size, xAdjustment, yAdjustment}) => {
  const width = size[0];
  const height = size[1];
  const xAdjust = xAdjustment ? xAdjustment : 0;
  const yAdjust = yAdjustment ? yAdjustment : 0;

  const x = body.position.x - width / 2 + xAdjust;
  const y = body.position.y - height / 2 - yAdjust;
    return (
      <DraggablePig style={{
        position: "absolute",
        left: x-50,
        top: y,
        width: width,
        height: height,
      }}/>
    );
  };
  
  export default Pig;