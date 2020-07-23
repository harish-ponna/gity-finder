import axios from "axios";

const SET_SEARCH_RESULTS = query => async dispatch => {
  try {
    const { data } = await axios(
      `https://api.github.com/search/users?q=${query}`
    );
    dispatch({ type: "SET_SEARCH_RESULTS", payload: data.items });
  } catch (error) {
    console.log(error);
  }
};
const SET_USER_DETAILS = userName => ({
  type: "SET_USER_DETAILS",
  payload: userName
});

const SET_USER_REPOS = userName => async dispatch => {
  try {
    const { data } = await axios(
      `https://api.github.com/users/${userName}/repos`
    );
    return dispatch({ type: "SET_USER_REPOS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

const REMOVE_SEARCH_RESULTS = () => ({
  type: "REMOVE_SEARCH_RESULTS",
  payload: ""
});

export {
  SET_SEARCH_RESULTS,
  SET_USER_DETAILS,
  SET_USER_REPOS,
  REMOVE_SEARCH_RESULTS
};
