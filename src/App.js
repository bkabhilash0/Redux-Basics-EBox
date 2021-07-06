import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Settings from "./components/Settings";

const counterReducer = (counter, action) => {
  const type = action.type;
  switch (type) {
    case "INCREMENT":
      return counter + 1;
    case "DECREMENT":
      return counter - 1;
    default:
      return counter;
  }
};

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  console.log(state);

  const authHandler = () => {
    if (state.isLoggedIn) {
      dispatch({ type: "LOGOUT" });
    } else {
      dispatch({ type: "LOGIN" });
    }
  };

  return (
    <Router>
      <Header isLoggedIn={state.isLoggedIn} />
      <div className="content">
        <button onClick={authHandler}>
          {state.isLoggedIn ? "Logout" : "Login"}
        </button>
        <Switch>
          <Route exact path="/">
            <Posts />
          </Route>
          <Route path="/settings" component={() => <Settings />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
