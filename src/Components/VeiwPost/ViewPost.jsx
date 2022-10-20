import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./_ViewPost.scss";

let count = 0;
function countLikes() {
  count = count + 1;
  return count;
}
function ViewPost(props) {
  const buildCards = () => {
    let createCard = props.jokes.map((current) => {
      return (
        <Card style={{ width: "200px" }}>
          <Card.Img variant="top" src={current.image} />
          <Card.Body>
            <Card.Text>{current.text}</Card.Text>
            <Card.Title>{current.username}</Card.Title>
            <div>
              <div onClick={() => countLikes()}>
                {" "}
                <img
                  className="logo"
                  src={require("./images/heart-solid.svg")}
                  alt={"heart"}
                />{" "}
              </div>
              <p id="count">{count}</p>
            </div>
          </Card.Body>
        </Card>
      );
    });
    return createCard;
  };
  buildCards();
}
export default ViewPost;
