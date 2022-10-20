import React, { useState } from "react";
import NavBar from "./Components/NavBar/navBar";
import AddPost from "./Components/AddPost/AddPost";
import ViewPost from "./Components/VeiwPost/ViewPost";
import "./App.scss";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <AddPost />
        <ViewPost />
      </div>
    </>
  );
}

export default App;
