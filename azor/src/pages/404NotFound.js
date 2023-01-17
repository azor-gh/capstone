import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import NotFOund from "../assets/media/images/illustatus.svg";

const NotFoundPage = () => {
  return (
    <div
      className="d-flex flex-column justify-items-center align-items-center"
      style={{
        width: "100%",
        // backgroundImage: `url(${NotFOund})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      {/* <img alt="404" src={NotFOund} /> */}
      <div className="d-flex justify-content-center" style={{ height: "90vh" }}>
        <img alt="404" src={NotFOund} width="1000px" />
        <br></br>
      </div>

      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;
