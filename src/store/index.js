import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialValue = {
  isLoggedIn: false,
  name: "",
};

const authReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true, name: "Abhilash" };
    case "LOGOUT":
      return { ...state, isLoggedIn: false, name: "" };
    default:
      return state;
  }
};

const initialUser = {
  name: "",
  age: "",
};

const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.name };
    case "AGE":
      return { ...state, name: action.age };
    default:
      return state;
  }
};

const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const store = createStore(reducers, composeWithDevTools());

// console.log(store.getState());
export default store;
