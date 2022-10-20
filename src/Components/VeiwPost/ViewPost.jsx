import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Table } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
// import "./_ViewPost.css";

const ViewPost = (props) => {
  let count = 0;
  function countLikes() {
    count = count + 1;
    return count;
  }

  const postData = () => {
    let dataList = props.data.map((current) => {
      return (
        <Card style={{ width: "200px" }}>
          <Card.Img variant="top" src={current.img} />
          <Card.Body>
            <Card.Text>{current.post}</Card.Text>
            <Card.Title>{current.username}</Card.Title>
            <div>
              <div onClick={() => countLikes()}>
                <FaHeart />
              </div>
              <p id="count">{count}</p>
            </div>
          </Card.Body>
        </Card>
      );
    });
    return dataList;
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>{postData()}</Card.Body>

      </Card>
    ));
  };
  return buildCards();
}
export default ViewPost;
