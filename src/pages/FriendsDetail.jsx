import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BarLoader from "react-spinners/BarLoader";
import User from "../components/User";

const FriendsDetailPage = () => {
  const { users, fetching, error } = useSelector((state) => state.user);
  const { id } = useParams();
  const userProfile = users?.filter((user) => user.id == id && id != 1);
  const user = userProfile?.length > 0 ? userProfile[0] : [];

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
      {!fetching && !error && users?.length > 0 && <User data={user} />}
    </>
  );
};

export default FriendsDetailPage;
