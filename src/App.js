import React from "react";
import NavBar from "./Components/NavBar/navBar.jsx";
import AddPost from "./Components/AddPost/AddPost";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <AddPost />
      </div>
    </>
  );
}

export default App;
