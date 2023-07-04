import React from "react";

const Error = ({ error }) => {
  return (
    <div style={{ color: "red", textAlign: "center", margin: "3rem auto" }}>
      <p>Uh oh - something went wrong!</p>
      <p>{error}</p>
    </div>
  );
};

export default Error;
