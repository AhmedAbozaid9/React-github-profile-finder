import React, { useState } from "react";

export default function SearchBar(props) {
  const [name, setName] = useState("");

  return (
    <>
      <form
        className="w-full lg:w-1/2 m-4 lg:mx-10"
        onSubmit={(e) => {
          e.preventDefault();
          props.onSearch(name);
        }}
      >
        <input
          type="text"
          placeholder="Type the profile name, then hit enter"
          className="bg-primary text-white placeholder:text-gray-300 p-4 text-xl outline-none rounded-md w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </>
  );
}
