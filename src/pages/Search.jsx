import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { parse } from "query-string";
import {
  SET_SEARCH_RESULTS,
  REMOVE_SEARCH_RESULTS
} from "../Redux/actionCreators";
import { reduxState } from "../Redux/mapStateToProps";
import "../styles/Search.css";

function Search(props) {
  const {
    location: { search },
    history: { push },
    SET_SEARCH_RESULTS,
    REMOVE_SEARCH_RESULTS,
    reduxState: { searchResults }
  } = props;

  const { q } = parse(search);
  useEffect(() => {
    if (!q) return;
    SET_SEARCH_RESULTS(q);
  }, [q]);

  const [query, setQuery] = useState("");

  return (
    <div className="Search">
      <form
        onSubmit={e => {
          e.preventDefault();
          props.history.push(`/search?q=${query}`);
          setQuery("");
        }}
      >
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="UserName"
        />
        <input type="submit" value="Search" />
      </form>
      <div className="clear-box">
        <button
          onClick={() => {
            REMOVE_SEARCH_RESULTS();
            push("/search");
          }}
          className="clear-btn"
        >
          Clear
        </button>
      </div>
      {q && (
        <div className="results">
          {searchResults.length !== 0 ? (
            searchResults.map(user => (
              <div key={user.id} className="card">
                <img src={user.avatar_url} alt="" />
                <div className="name">{user.login}</div>
                <Link to={`/user-details/${user.login}`}>
                  <div className="view-details">View Details</div>
                </Link>
              </div>
            ))
          ) : (
            <h1 className="no-results">No Results</h1>
          )}
        </div>
      )}
    </div>
  );
}

export default connect(
  reduxState,
  { SET_SEARCH_RESULTS, REMOVE_SEARCH_RESULTS }
)(Search);
