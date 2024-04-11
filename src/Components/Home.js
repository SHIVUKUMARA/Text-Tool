import React from "react";
import {Link} from "react-router-dom";
const Home = (props) => {
  return (
    <div className="container text-center">
      <h1
        className="mt-3 display-4 fw-bold greet"
        style={{
          color: props.mode === "dark" ? "rgb(13 221 240)" : "#0dcaf08c",
          fontSize: "80px",
        }}
      >
        Welcome
      </h1>
      <h2
        className="mb-4 mt-4 fw-bold"
        style={{
          color:
            props.mode === "dark" ? "rgb(38 213 88)" : "rgb(25 135 84 / 62%)",
          fontSize: "70px",
        }}
      >
        to Text Tool
      </h2>
      <div className="d-flex justify-content-center align-items-center">
        <h2
          className="mb-4"
          style={{
            color: props.mode === "dark" ? "#dee2e6" : "rgb(255 194 0 / 86%)",
            fontSize: "60px",
          }}
        >
          Let's go...
        </h2>
        <Link to="/textform">
          <img
            src={
              "https://pngfre.com/wp-content/uploads/red-arrow-48-1024x1024.png"
            }
            alt="arrow"
            className="img-fluid"
            style={{ width: "150px", height: "100px" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
