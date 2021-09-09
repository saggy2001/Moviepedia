import React, { useEffect, useState } from "react";
import "./List.css";
import ListItem from "./ListItem";

const List = ({ input, onMovieIdChange }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=6fb6bda1f9046d8ccdde0221472351fa&language=en-US&page=1&include_adult=false&query=${input}`
      );
      const result = await res.json();
      // console.log(result.results);
      setData(result.results);
    }
    getData();
  }, [input]);

  console.log(data);
  return (
    <div
      // style={{ padding: "15px", background: "#f5f5f5", width: "400px" }}
      className="list-con"
    >
      {data ? (
        data.map((item) => (
          <ListItem
            title={item.original_title}
            key={item.id}
            poster_path={item.poster_path}
            release_date={item.release_date}
            overview={item.overview}
            id={item.id}
            onMovieIdChange={onMovieIdChange}
          />
        ))
      ) : (
        <h3 style={{ padding: "15px", width: "300px", textAlign: "center" }}>
          Search Movies from the Search Box
        </h3>
      )}
    </div>
  );
};

export default List;
