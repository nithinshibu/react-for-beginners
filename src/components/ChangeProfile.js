import { useState } from "react";

export const ChangeProfile = (props) => {
  const [newUsername, setNewUserName] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setNewUserName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.setUserName(newUsername);
        }}
      >
        Change Username
      </button>
    </div>
  );
};
