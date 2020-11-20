import React, { useState } from "react";
import UserSearch from "./components/UserSearch/UserSearch";
import Header from "./components/Header/Header";
import UserInfo from "./components/UserInfo/UserInfo";
import Search from "./components/Search/Search";
import Repos from "./components/Repos/Repos";
import "./App.css";

const App = () => {
  const [publicRepos, setPublicRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [bio, setBio] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [web, setWeb] = useState("");
  const [repos, setRepos] = useState([]);
  // searching specific repo
  const [query, setQuery] = useState("");

  const setData = ({
    public_repos,
    avatar_url,
    name,
    login,
    bio,
    followers,
    following,
    location,
    email,
    blog,
    repos_url,
  }) => {
    setPublicRepos(public_repos);
    setAvatar(avatar_url);
    setName(name);
    setLogin(login);
    setBio(bio);
    setFollowers(followers);
    setFollowing(following);
    setLocation(location);
    setEmail(email);
    setWeb(blog);
    setRepos(repos_url);
  };

  return (
    <div className="app-body">
      <UserSearch setData={setData} />
      <Header publicRepos={publicRepos} />
      <div className="container">
        <UserInfo
          login={login}
          name={name || "No access"}
          avatar={avatar}
          email={email || "No access"}
          bio={bio || "No bio available"}
          followers={followers}
          following={following}
          location={location || "No location available"}
          web={web || "mvst.co (default)"}
        />
        <div className="repositories">
          {/* query not finished */}
          <Search getQuery={(q) => setQuery(q)} />
          <Repos repos={repos} />
        </div>
      </div>
    </div>
  );
};

export default App;
