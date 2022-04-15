import PlatSVG from './../../assets/platform.svg';
import React, { Component } from "react";

const Platform = ({ body}) => {
 
  const x = body.position.x;
  const y = body.position.y;
    return (
      <PlatSVG style={{
        position: 'absolute',
        left: x-60,
        top: y,
      }}/>
    );
  };
  
  export default Platform;