import React from "react";
import { useSelector } from "react-redux";
import BarLoader from "react-spinners/BarLoader";
import UserList from "../components/UserList";

const FriendsPage = () => {
  const { users, fetching, error } = useSelector((state) => state.user);

  return (
    <>
      {!fetching && error && <Error error={error} />}
      {fetching && (
        <p>
          <BarLoader
            style={{ width: "100%" }}
            color={"#bac7be"}
            loading={true}
          />
        </p>
      )}
      {!fetching && !error && users?.length > 0 && (
        <UserList data={users.slice(1)} />
      )}
    </>
  );
};

export default FriendsPage;
