import React from "react";

export default function Card({ data, repos }) {
  if (!data) {
    return <div>waiting</div>;
  } else {
    return (
      <div
        className="bg-secondary p-5 px-10 m-4 lg:mx-10 rounded-md flex w-full lg:w-1/2 text-white flex
      flex-col lg:flex-row items-center"
      >
        <img
          src={data.avatar_url}
          alt="Avatar_picture"
          className="w-48 rounded-full mr-2"
        />
        <div className="mx-2">
          <h1 className="font-semibold text-2xl">{data.name}</h1>
          <p className="py-4">{data.bio}</p>
          <ul className="flex justify-between w-full">
            <li>{data.followers} followers</li>
            <li>{data.following} following</li>
            <li>{data.public_repos} repos</li>
          </ul>
        </div>
      </div>
    );
  }
}
