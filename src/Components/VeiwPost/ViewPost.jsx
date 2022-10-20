import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";
// import "./_ViewPost.css";

const ViewPost = () => {
  return (
    <>
      <Card style={{ width: "200px" }}>
        <Card.Img variant="top" src="./images/post1.png" />
        <Card.Body>
          <Card.Text>
            "What are the similarities between Java and JavaScript?"
          </Card.Text>
          <Card.Title>"creator"</Card.Title>
          <div>
            <div>
              <FaHeart />
            </div>
            <p id="count">Count</p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ViewPost;

// let count = 0;
// function countLikes() {
//   count = count + 1;
//   return count;
// }
// function ViewPost(props) {
//   const buildCards = () => {
//     let createCard = props.jokes.map((current) => {
//       return (
//         <Card style={{ width: "200px" }}>
//           <Card.Img variant="top" src={current.image} />
//           <Card.Body>
//             <Card.Text>{current.text}</Card.Text>
//             <Card.Title>{current.username}</Card.Title>
//             <div>
//               <div onClick={() => countLikes()}>
//                 <FaHeart />
//               </div>
//               <p id="count">{count}</p>
//             </div>
//           </Card.Body>
//         </Card>
//       );
//     });
//     return createCard;
//   };
//   buildCards();
// }
// export default ViewPost;
