import React from "react";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center", margin: "2rem auto", color: "tomato" }}>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </div>
    </>
  );
};

export default ErrorPage;
