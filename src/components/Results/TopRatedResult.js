import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as movieActions from "../../store/action";
import Movie from "../Movie/Movie";

import Loader from "react-loader-spinner";

const TopRatedResult = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const TopRatedMovies = useSelector((state) => state.movies.TopRatedMovies);
  const dispatch = useDispatch();

  const loadMovies = useCallback(async () => {
    setError(null);
    try {
      await dispatch(movieActions.fetchTopRatedMovies());
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }, [dispatch, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadMovies().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadMovies]);


  if (error) {
    return (
      <div>
        <h1>An error occurred!</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid justify-center mt-10">
        <Loader
        type="TailSpin"
        color="#f37a24"
        height={100}
        width={100}
        timeout={100000} //3 secs
      />
      </div>
    );
  }

  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-4">
      {TopRatedMovies.map((result) => (
        <Movie key={result.id} result={result} />
      ))}
    </div>
  );
};

export default TopRatedResult;
