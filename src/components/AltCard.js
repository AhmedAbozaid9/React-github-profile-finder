import React from "react";

export default function AltCard({msg}){
  return (
    <div
      className="bg-secondary p-5 m-4 lg:mx-10 lg:px-10 rounded-md w-full lg:w-1/2 text-white shadow-md"
    >
     <h1 className="text-center text-2xl font-semibold">{msg}</h1>
    </div>
  );
}