import React, { useEffect, useState } from "react";
import "./List.css";
import ListItem from "./ListItem";

const List = ({ input, onMovieIdChange }) => {
  // Initailizing the data array
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch list of movies for given input
    async function getData() {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=6fb6bda1f9046d8ccdde0221472351fa&language=en-US&page=1&include_adult=false&query=${input}`
      );
      // result variable will store response object fetched from the api
      const result = await res.json();
      // store array of movies in data
      setData(result.results);
    }
    getData();
  }, [input]);
  // console.log(data);
  return (
    <div className="list-con">
      {/* will check if data has been loaded from the api or not if loaded and data is present then will show list of items */}
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
