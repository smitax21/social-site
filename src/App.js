import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/navBar";
import AddPost from "./Components/AddPost/AddPost";
import ViewPost from "./Components/VeiwPost/ViewPost";
import "./App.scss";

function App() {
  const [data, setData] = useState([
    {
      username: "creator",
      post: "What are the similarities between Java and JavaScript?",
      img: "./images/post1.png",
    },
    {
      username: "creator",
      post: "The difference between a while and a do…while loop",
      img: "./images/post2.jpeg",
    },
    {
      username: "creator",
      post: "When a programmer tries to remove all the bugs from the code",
      img: "./images/post3.jpeg",
    },
    {
      username: "creator",
      post: "When you finally decide to go to sleep after a long day of work",
      img: "./images/post4.jpeg",
    },
  ]);

  useEffect(() => {}, []);

  function updateMyValues(value) {
    setData((prev) => {
      let newState = [...prev, value];
      localStorage.setItem("data", JSON.stringify(newState));
      return newState;
    });
  }
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route
            path="/"
            index
            element={
              <AddPost
                functionFromParent={(val) => updateMyValues(val)}
                setData={setData}
              />
            }
          />
          <Route path="/viewpost" element={<ViewPost data={data} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
