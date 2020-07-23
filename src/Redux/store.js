import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  searchResults: [],
  userDetails: {},
  userRepos: []
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_SEARCH_RESULTS":
      return { ...state, searchResults: payload };

    case "REMOVE_SEARCH_RESULTS":
      return { ...state, searchResults: [] };

    case "SET_USER_DETAILS":
      const user = state.searchResults.find(user => user.login === payload);
      return { ...state, userDetails: user };

    case "SET_USER_REPOS":
      return { ...state, userRepos: payload };

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export { store };
