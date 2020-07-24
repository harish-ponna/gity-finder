import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { reduxState } from "../Redux/mapStateToProps";
import { SET_USER_DETAILS, SET_USER_REPOS } from "../Redux/actionCreators";
import "../styles/UserDetails.css";

function UserDetails(props) {
  const {
    match: {
      params: { userName }
    },
    SET_USER_DETAILS,
    SET_USER_REPOS,
    reduxState: { userRepos }
  } = props;
  useEffect(() => {
    SET_USER_DETAILS(userName);
    SET_USER_REPOS(userName);
  }, [SET_USER_DETAILS, SET_USER_REPOS, userName]);
  return (
    <div className="UserDetails">
      <button className="back" onClick={() => props.history.goBack()}>
        Back
      </button>
      {userRepos.length !== 0 ? (
        <div className="user">
          <div className="image">
            <img src={userRepos[0].owner.avatar_url} alt="" />
          </div>
          <div className="content">
            <p>{userRepos[0].owner.login}</p>
            <h5>Total repos: {userRepos.length + 1}</h5>
            <Link
              className="github"
              to={{ pathname: userRepos[0].owner.html_url }}
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      <div className="repos">
        {userRepos.length !== 0 && <h2>Public Repos </h2>}
        {userRepos.length !== 0 &&
          userRepos.map(repo => (
            <Link
              key={repo.id}
              className="repo"
              to={{ pathname: repo.html_url }}
              target="_blank"
            >
              <p>{repo.name}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default connect(
  reduxState,
  { SET_USER_DETAILS, SET_USER_REPOS }
)(UserDetails);
