import React from "react";
import "./card.css";
const card = (props) => {
  return (
    <div className="card" style={{ overflow: "hidden" }}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWVMvCZmEBhKrVGbc9HT67tJAIMAtB3jR5A&s"
        alt="Not found"
        style={{ border: "2px solid black" }}
      />
      <h1>{props.title} </h1>
      <p>{props.desc} </p>
    </div>
  );
};

export default card;
