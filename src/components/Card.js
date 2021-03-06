import React from "react";
import AltCard from "./AltCard";
import Repo from "./Repo";

export default function Card({ data, repos, error }) {
  if(error){
    return <AltCard msg="Something went wrong"/>
  }
  if (!(data && repos)) {
    return <AltCard msg={"Waiting to fetch data"} />;
  } else {
    repos = repos.map((repo) => {
      return <Repo repo={repo} />;
    });

    return (
      <div
        className="bg-secondary p-5 m-4 lg:mx-10 lg:px-10 rounded-md w-full lg:w-1/2 text-white flex
      flex-col lg:flex-row items-center shadow-md"
      >
        <img
          src={data.avatar_url}
          alt="Avatar_picture"
          className="w-48 rounded-full mr-2"
        />
        <section className="mx-2">
          <h1 className="font-semibold text-2xl">{data.name}</h1>
          <p className="py-4">{data.bio}</p>
          <ul className="flex justify-between w-full">
            <li>{data.followers} followers</li>
            <li>{data.following} following</li>
            <li>{data.public_repos} repos</li>
          </ul>
          <div>
            <h2 className="font-semibold text-xl my-2">
              Latest repositories :
            </h2>
            <ul className="">{repos}</ul>
          </div>
        </section>
      </div>
    );
  }
}
