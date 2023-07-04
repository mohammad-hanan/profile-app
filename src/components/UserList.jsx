import React from "react";
import { NavLink } from "react-router-dom";
import "./UserList.css";

const UserList = ({ data }) => {
  return (
    <ul className="user-list">
      {data.map(({ id, name }) => (
        <li key={id}>
          <NavLink to={`${id}`}>{name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
