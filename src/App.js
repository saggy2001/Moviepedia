import React, { useState } from "react";
import DetailComponent from "./components/DetailComponent/DetailComponent";
import List from "./components/ListComponent/List";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [movieId, setMovieId] = useState("");

  const onInputChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  const onMovieIdChange = (id) => {
    setMovieId(id);
    console.log(id);
  };
  return (
    <div className="App">
      <NavBar onInputChange={onInputChange} />
      <div style={{ display: "flex" }}>
        <List input={input} onMovieIdChange={onMovieIdChange} />
        <DetailComponent movieId={movieId} />
      </div>
    </div>
  );
};

export default App;
