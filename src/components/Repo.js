import React from 'react'

export default function Repo({repo}) {
  return (
    <li key={repo.id} className="bg-third inline-block m-0.5 px-1 py-0.5 text-sm">
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        {repo.name}
      </a>
    </li>
  );
}