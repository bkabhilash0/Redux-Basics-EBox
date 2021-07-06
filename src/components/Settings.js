import React from "react";
import { useSelector } from "react-redux";

const Settings = (props) => {
  const state = useSelector((state) => state.auth);
  let content = <h1>Please Login to Continue</h1>;
  if (state.isLoggedIn) {
    content = <h1>Settings - {state.name}</h1>;
  }
  return <div>{content}</div>;
};

export default Settings;
