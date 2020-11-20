import React from "react";
import SingleRepo from "./SingleRepo/SingleRepo";

const Repos = () => {
  return (
    // not dynamic yet. static for design purpose
    <>
      <SingleRepo
        link="react-native-esptouch2"
        forks="Forked from rich1111/react-native-esptouch2"
        desc="A React Native module for ESP8266 Smartconfig"
        lang="Pyhton"
        forkTimes="2"
        updates="Updated 5 days ago"
      />
    </>
  );
};

export default Repos;
