import React, { useState } from "react";
import NavBar from "./Components/NavBar/navBar";
import AddPost from "./Components/AddPost/AddPost";
import ViewPost from "./Components/VeiwPost/ViewPost";
import "./App.css";

function App() {
  const [jokes, changeJokes] = useState([
    {
      username: "creator",
      text: "What are the similarities between Java and JavaScript?",
      image: "./images/post1.png",
    },
    {
      username: "creator",
      text: "The difference between a while and a do…while loop",
      image: "./images/post2.jpeg",
    },
    {
      username: "creator",
      text: "When a programmer tries to remove all the bugs from the code",
      image: "./images/post3.jpeg",
    },
    {
      username: "creator",
      text: "When you finally decide to go to sleep after a long day of work",
      image: "./images/post4.jpeg",
    },
  ]);
  return (
    <>
      <div>
        <NavBar />
        <AddPost changeJokes={changeJokes} />
        <ViewPost jokes={jokes} />
      </div>
    </>
  );
}

export default App;
