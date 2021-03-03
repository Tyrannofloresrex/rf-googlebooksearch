import React from "react";

function Card({ title, authors, link, description, image, buttonClick }) {
  return (
    <div
      // style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
      className= "card"
    >
      <h3 className="font-italic">{title}</h3>
      <p className="font-italic">Written by: {authors}</p>
      <p className="description">{description}</p>
      <p className="description">{description}</p>
      <img className="card-image" src={image} alt={title}/>
      <a className="btn-success" href={link} target="_blank" rel="noopener noreferrer">View</a>
      <button className ="btn" onClick={buttonClick}>Save</button>
    </div>
  );
}

{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
export default Card;
