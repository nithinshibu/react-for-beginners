import React from "react";
import { useNavigate } from "react-router-dom";
export const Menu = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>This is the menu page</h1>
      <button
        onClick={() => {
          navigate("/contact");
        }}
      >
        Change to the contact page
      </button>
    </div>
  );
};
