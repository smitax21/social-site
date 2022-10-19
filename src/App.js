import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AddPost from "./Components/AddPost/AddPost";
import logo from "./logo.svg";
import "./App.css";


function App() {
  const [data, setData] = useState([]);

  // saving post in the localhost
  useEffect(() => {
    // localStorage.setItem("data", JSON.stringify(data));
    const items = JSON.parse(localStorage.getItem("data"));
    // setData(JSON.parse(items) || []);
    console.log(items);
  }, []);

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
        <Routes>
          <Route
            path="/"
            index
            element={
              <AddPost functionFromParent={(val) => updateMyValues(val)} />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
