import React from "react";
import { Routes, Route } from "react-router-dom";
import AddPost from "./Components/AddPost/AddPost";
import logo from "./logo.svg";
import "./App.css";

// function updateMyValues(value) {}

function App() {
  return (
    <>
      <div>
        {/* <Routes
          path="/AddPost"
          index
          element={
            <AddPost //functionFromParent={(value) => updateMyValues(value)}
            />
          }
        ></Routes> */}
        <AddPost />
      </div>
    </>
  );
}

export default App;
