import React, { useState } from "react";
import axios from "axios";

const UserSearch = ({ setData }) => {
  const [search, setSearch] = useState("");

  const searchHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`http://api.github.com/users/${search}`);
    console.log(data);
    setData(data);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="User Name"
          defaultValue={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" onClick={(e) => searchHandler(e)}>
          Search
        </button>
      </form>
    </div>
  );
};

export default UserSearch;
