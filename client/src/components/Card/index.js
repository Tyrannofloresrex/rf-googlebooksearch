import React from "react";

function Card({ title, author, link, description, image, button }) {
  return (
    <div
      style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
      className= "card"
    >
      <h3 className="font-italic">{title}</h3>
      <h3 className="font-italic">{author}</h3>
      <h3 className="description">{title}</h3>
      <img className="font-italic">{image}</img> 
      <h3 className="font-italic">{button}</h3>
    </div>
  );
}

export default Card;
