import React, { useState, useEffect } from "react";
import "./index.css";
import SearchBar from "./components/SearchBar.js";
import github from "./components/api/github";
import Card from "./components/Card";

export default function App() {
  const [data, setData] = useState();
  const [repos, setRepos] = useState();
  // a function to get the needed data
  const search = async (name) => {
    const profile = await github(name);
    const repos = await github(`${name}/repos?sort=created`);

    setData(profile.data);
    setRepos(repos.data.slice(0, 5));
  };
  // request the data for the first time to get my info 
  useEffect(() => search('AhmedAbozaid9'),[])

  return (
    <div className="flex items-center flex-col m-4">
      <SearchBar onSearch={search} />
      <Card data={data} repos={repos} />
    </div>
  );
}
