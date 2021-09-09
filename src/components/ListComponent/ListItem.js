import React from "react";
import "./ListItem.css";

const ListItem = ({
  title,
  poster_path,
  release_date,
  overview,
  id,
  onMovieIdChange,
}) => {
  const [show, setShow] = React.useState(false);
  return (
    <div
      className="item-con"
      onClick={() => {
        onMovieIdChange(id);
      }}
    >
      <div className="row-1">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt="movie_img"
          width="80px"
          height="80px"
          style={{ background: "silver" }}
        />
        <div style={{ marginLeft: "15px" }}>
          <p>{title}</p>
          {/* <p>Rated : 4/5</p> */}
          <p>Released on : {new Date(release_date).toDateString()} </p>
        </div>
      </div>
      <p className="row-2">
        Overview : {show ? overview : overview.substring(0, 100)}{" "}
        <button
          onClick={() => {
            setShow(true);
          }}
          style={
            show
              ? { display: "none" }
              : {
                  background: "transparent",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }
          }
        >
          ...
        </button>
      </p>
    </div>
  );
};

export default ListItem;
