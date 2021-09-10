import React, { useState, useEffect } from "react";
import "./DetailComponent.css";

const DetailComponent = ({ movieId }) => {
  // Initialize a detail object variable
  const [detail, setDetail] = useState({});

  useEffect(() => {
    // fetch movie detail for given movieId
    async function getData() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=6fb6bda1f9046d8ccdde0221472351fa&language=en-US`
      );
      // result variable will store response object fetched from the api
      const result = await res.json();
      console.log(result);
      // set detail value
      setDetail(result);
    }
    getData();
  }, [movieId]);
  return (
    <div className="detail-con">
      {/* if movieId and detail has value then will show movie detail */}
      {detail.id && movieId ? (
        <div className="detail-box">
          <img
            src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
            alt="poster"
            width="180px"
            height="180px"
            style={{ background: "silver" }}
          />
          <h1>{detail.original_title}</h1>
          <p>
            {new Date(detail.release_date).getFullYear()} |{" "}
            {detail.genres[0].name} | {Math.floor(detail.runtime / 60)} hr{" "}
            {detail.runtime % 60} min
          </p>
          <h4 className="overview">{detail.overview}</h4>
          <p>
            <b>Initial Release : </b>{" "}
            {new Date(detail.release_date).toDateString()}
          </p>
          <div>
            <b>Production Compnaies : </b>{" "}
            {detail.production_companies.length ? (
              detail.production_companies.map((data, index) => {
                return <span key={index}>{data.name + ", "}</span>;
              })
            ) : (
              <p>Not Available</p>
            )}
          </div>
        </div>
      ) : (
        <h2>Search Movies from the Search Box to see details</h2>
      )}
    </div>
  );
};

export default DetailComponent;
