import axios from "../axios";
const API_KEY = "b1101dec1677c36796a3c3836e09f601";

export const FETCH_TRENDINGMOVIES = "TRENDINGMOVIES";
export const FETCH_TOPRATEDMOVIES = "FETCH_TOPRATEDMOVIES";
export const FETCH_ACTIONMOVIES = "FETCH_ACTIONMOVIES";
export const FETCH_COMEDYMOVIES = "FETCH_COMEDYMOVIES";
export const FETCH_HORRORMOVIES = "FETCH_HORRORMOVIES";
export const FETCH_ROMANCEMOVIES = "FETCH_ROMANCEMOVIES";
export const FETCH_MYSTERYMOVIES = "FETCH_MYSTERYMOVIES";
export const FETCH_SCIFIMOVIES = "FETCH_SCIFIMOVIES";
export const FETCH_WESTERNMOVIES = "FETCH_WESTERNMOVIES";
export const FETCH_ANIMATIONMOVIES = "FETCH_ANIMATIONMOVIES";
export const FETCH_TVMOVIES = "FETCH_TVMOVIES";

export const fetchTrendingMovies = () => {
  return async (dispatch) => {
    try {
      const requests = await axios.get(
        `/trending/all/week?api_key=${API_KEY}&language=en-US`
      );

      dispatch({
        type: FETCH_TRENDINGMOVIES,
        TrendingMovies: requests.data.results,
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const fetchTopRatedMovies = () => {
  return async (dispatch) => {
    try {
      const requests = await axios.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US`
      );

      dispatch({
        type: FETCH_TOPRATEDMOVIES,
        TopRatedMovies: requests.data.results,
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const fetchActionMovies = () => {
  return async (dispatch) => {
    try {
      const requests = await axios.get(
        `/discover/movie?api_key=${API_KEY}&with_genres=28`
      );

      dispatch({
        type: FETCH_ACTIONMOVIES,
        ActionMovies: requests.data.results,
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const fetchComedyMovies = () => {
  return async (dispatch) => {
    try {
      const requests = await axios.get(
        `/discover/movie?api_key=${API_KEY}&with_genres=35`
      );

      dispatch({
        type: FETCH_COMEDYMOVIES,
        ComedyMovies: requests.data.results,
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const fetchHorrorMovies = () => {
  return async (dispatch) => {
    try {
      const requests = await axios.get(
        `/discover/movie?api_key=${API_KEY}&with_genres=27`
      );

      dispatch({
        type: FETCH_HORRORMOVIES,
        HorrorMovies: requests.data.results,
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const fetchRomanceMovies = () => {
  return async (dispatch) => {
    try {
      const requests = await axios.get(
        `/discover/movie?api_key=${API_KEY}&with_genres=10749`
      );

      dispatch({
        type: FETCH_ROMANCEMOVIES,
        RomanceMovies: requests.data.results,
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const fetchMysteryMovies = () => {
  return async (dispatch) => {
    try {
      const requests = await axios.get(
        `/discover/movie?api_key=${API_KEY}&with_genres=9648`
      );

      dispatch({
        type: FETCH_MYSTERYMOVIES,
        MysteryMovies: requests.data.results,
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const fetchSciFiMovies = () => {
  return async (dispatch) => {
    try {
      const requests = await axios.get(
        `/discover/movie?api_key=${API_KEY}&with_genres=878`
      );

      dispatch({
        type: FETCH_SCIFIMOVIES,
        SciFiMovies: requests.data.results,
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const fetchWesternMovies = () => {
  return async (dispatch) => {
    try {
      const requests = await axios.get(
        `/discover/movie?api_key=${API_KEY}&with_genres=37`
      );

      dispatch({
        type: FETCH_WESTERNMOVIES,
        WesternMovies: requests.data.results,
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const fetchAnimationMovies = () => {
  return async (dispatch) => {
    try {
      const requests = await axios.get(
        `/discover/movie?api_key=${API_KEY}&with_genres=16`
      );

      dispatch({
        type: FETCH_ANIMATIONMOVIES,
        AnimationMovies: requests.data.results,
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const fetchTVMovies = () => {
  return async (dispatch) => {
    try {
      const requests = await axios.get(
        `/discover/movie?api_key=${API_KEY}&with_genres=10770`
      );

      dispatch({
        type: FETCH_TVMOVIES,
        TVMovies: requests.data.results,
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

