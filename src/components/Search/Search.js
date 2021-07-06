import React, { useState } from "react";

import Movie from "../Movie/Movie";

const API_KEY = "b1101dec1677c36796a3c3836e09f601";

const Search = () => {
  const [query, setQuery] = useState("");
  const [Results, setResults] = useState([]);

  const onChange = (e) => {
    setQuery(e.target.value);

    fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      )
        .then(res => res.json())
        .then((data) => {
          if (!data.errors) {
            setResults(data.results);
          } else {
            setResults([]);
          }
        });
  };

  return (
    <div>
      <div className="mx-8 mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="py-2 px-2 shadow rounded-lg sm:px-10">
          <form className="mb-0 space-y-6">
            <div>
              <input
                onChange={onChange}
                placeholder="Search for a movie"
                value={query}
                type="text"
                className="text-blue-900 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-4 overflow-x-scroll scrollbar-hide">
        {Results.map((result) => (
          <Movie key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};

export default Search;
