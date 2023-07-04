import React from "react";
import "./User.css";

const User = ({ data }) => {
  const {
    name,
    email,
    phone,
    website,
    username,
    address: { city, street, suite, zipcode },
  } = data;

  return (
    <div className="user-container">
      <div className="user">
        <div>
          <p className="name">{name}</p>
          <p className="username">{username}</p>
          <p className="email">{email}</p>
          <p className="phone">{phone}</p>
          <p className="website">{website}</p>
        </div>
        <address>
          <p>{suite}</p>
          <p>{street}</p>
          <p>{city}</p>
          <p>{zipcode}</p>
        </address>
      </div>
    </div>
  );
};

export default User;
