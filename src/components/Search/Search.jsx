import { getSuggestedQuery } from "@testing-library/react";
import React, { useState } from "react";
import "./Search.css";

// not finished
const Search = ({ getQuery }) => {
  const [text, setText] = useState("");
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form className="form">
        <input
          type="text"
          className="form-control"
          placeholder="Find a repository..."
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="form-buttons">
          <select className="select-css" id="type">
            <option value="0">Type: All</option>
            <option value="1">Sources</option>
            <option value="2">Forks</option>
            <option value="3">Archived</option>
            <option value="4">Mirrors</option>
          </select>

          <select className="select-css">
            <option value="0">Language: All</option>
          </select>
        </div>
      </form>
    </section>
  );
};

export default Search;
