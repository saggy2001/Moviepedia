import React, { useState } from "react";
import DetailComponent from "./components/DetailComponent/DetailComponent";
import List from "./components/ListComponent/List";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

console.log(process.env.REACT_APP_SECRET_KEY);

const App = () => {
  // Initializing the input value
  const [input, setInput] = useState("");
  // Initializing the movieId value
  const [movieId, setMovieId] = useState("");
  // It will be used to set the input value
  const onInputChange = (e) => {
    // console.log(e.target.value);
    // set input value
    setInput(e.target.value);
  };
  //It will be used to set the movieId value
  const onMovieIdChange = (id) => {
    //set movieId
    setMovieId(id);
    // console.log(id);
  };

  return (
    <div className="App">
      <SearchBox onInputChange={onInputChange} />
      <div style={{ display: "flex" }}>
        <List input={input} onMovieIdChange={onMovieIdChange} />
        <DetailComponent movieId={movieId} />
      </div>
    </div>
  );
};

export default App;
