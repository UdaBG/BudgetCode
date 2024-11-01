import React from "react";
import { useState } from "react";

function HeadlineCard(props) {
    const [isHovering, setIsHovering] = useState(false); 

  return (
    <div style={{ display: "flex", flexDirection: "row", position: "relative", borderRadius: 20, overflow: "hidden", margin: 10, marginTop:60 }}>
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", width: 480, height: 200, borderRadius: 20, position: "relative" }}>
        <img style={{ objectFit: "cover", borderRadius: 20, width: 480, height: 200, position: "absolute", top: 0, left: 0, zIndex: -1 }} src={props.imgURL} alt="" />
        <div style={{ position: "relative", zIndex: 1, padding: 10 }}>
          
          <p style={{ fontWeight: "bold", fontSize: 30, margin: 0 , color: "white"}}>{props.title}</p>
          <p style={{ margin: 0, color:"white" }}>{props.description}</p>
          <button 
           onMouseEnter={() => setIsHovering(true)}
           onMouseLeave={() => setIsHovering(false)}
          style={{
            cursor: "pointer",
            color: isHovering? "white":"white",
            height: 30,
            borderRadius: 20,
            backgroundColor: isHovering? "limegreen":"yellowgreen" , 
            marginBottom: 10,
            border: "none",
            marginTop:80 }}>Order Now</button>

        </div>
      </div>
    </div>
  );
}

export default HeadlineCard;
