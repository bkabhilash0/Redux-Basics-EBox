import React from "react";
import { useSelector,connect } from "react-redux";

const Posts = (props) => {
  const state = useSelector((state) => state.auth);

  return <div>{state.isLoggedIn ? <h1>Posts</h1> : <h1>Please Login</h1>}</div>;
};

export default Posts;
