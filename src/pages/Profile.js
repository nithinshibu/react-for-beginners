import React from "react";
import { ChangeProfile } from "../components/ChangeProfile";

export const Profile = (props) => {
  return (
    <div>
      <div>PROFILE,user is : {props.username}</div>
      <ChangeProfile setUserName={props.setUserName} />
    </div>
  );
};
