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
  // Initialize a show variable with default value false
  const [show, setShow] = React.useState(false);
  return (
    <div
      className="item-con"
      // onClick will set MovieId to id given by props
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
          style={{
            background: "silver",
          }}
        />
        <div style={{ marginLeft: "15px" }}>
          <p>{title}</p>
          <p>Released on : {new Date(release_date).toDateString()} </p>
        </div>
      </div>
      <p className="row-2">
        Overview :{" "}
        {
          // if show value is true will show whole overview string otherwise will show first 100 words
          show ? overview : overview.substring(0, 100)
        }{" "}
        <button
          onClick={() => {
            //set value of show variable as true
            setShow(true);
          }}
          //if show is true then will hide the expand button otherwise will show that
          className={show ? "expand-button-hide" : "expand-button"}
        >
          ...
        </button>
      </p>
    </div>
  );
};

export default ListItem;
