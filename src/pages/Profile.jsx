import React from "react";
import { useSelector } from "react-redux";
import BarLoader from "react-spinners/BarLoader";
import User from "../components/User";
import Error from "../components/Error";

const ProfilePage = () => {
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
      {!fetching && !error && users?.length > 0 && <User data={users[0]} />}
    </>
  );
};

export default ProfilePage;
