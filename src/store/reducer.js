import {
  FETCH_ACTIONMOVIES,
  FETCH_ANIMATIONMOVIES,
  FETCH_COMEDYMOVIES,
  FETCH_HORRORMOVIES,
  FETCH_MYSTERYMOVIES,
  FETCH_ROMANCEMOVIES,
  FETCH_SCIFIMOVIES,
  FETCH_TOPRATEDMOVIES,
  FETCH_TRENDINGMOVIES,
  FETCH_TVMOVIES,
  FETCH_WESTERNMOVIES,
} from "./action";

const initialState = {
  TrendingMovies: [],
  TopRatedMovies: [],
  ActionMovies: [],
  ComedyMovies: [],
  HorrorMovies: [],
  RomanceMovies: [],
  MysteryMovies: [],
  SciFiMovies: [],
  WesternMovies: [],
  AnimationMovies: [],
  TVMovies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRENDINGMOVIES:
      return {
        ...state,
        TrendingMovies: action.TrendingMovies,
      };
    case FETCH_TOPRATEDMOVIES:
      return {
        ...state,
        TopRatedMovies: action.TopRatedMovies,
      };
    case FETCH_ACTIONMOVIES:
      return {
        ...state,
        ActionMovies: action.ActionMovies,
      };
    case FETCH_COMEDYMOVIES:
      return {
        ...state,
        ComedyMovies: action.ComedyMovies,
      };
    case FETCH_HORRORMOVIES:
      return {
        ...state,
        HorrorMovies: action.HorrorMovies,
      };
    case FETCH_ROMANCEMOVIES:
      return {
        ...state,
        RomanceMovies: action.RomanceMovies,
      };
    case FETCH_MYSTERYMOVIES:
      return {
        ...state,
        MysteryMovies: action.MysteryMovies,
      };
    case FETCH_SCIFIMOVIES:
      return {
        ...state,
        SciFiMovies: action.SciFiMovies,
      };
    case FETCH_WESTERNMOVIES:
      return {
        ...state,
        WesternMovies: action.WesternMovies,
      };
    case FETCH_ANIMATIONMOVIES:
      return {
        ...state,
        AnimationMovies: action.AnimationMovies,
      };
    case FETCH_TVMOVIES:
      return {
        ...state,
        TVMovies: action.TVMovies,
      };
    default:
      return state;
  }
};

export default movieReducer;
