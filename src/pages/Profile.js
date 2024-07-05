import React from "react";
import { useParams } from "react-router-dom";

export const Profile = () => {
  let { username } = useParams();
  return (
    <div>
      <h1>This is the Profile Page for the user {username}</h1>
    </div>
  );
};
