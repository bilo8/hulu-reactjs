import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";

import movieReducer from "./store/reducer";
import Header from "./components/Header/Header";
import Nav from "./components/NavBar/Nav";

import TrendingResult from "./components/Results/TrendingResult";
import TopRatedResult from "./components/Results/TopRatedResult";
import ActionResults from "./components/Results/ActionResults";
import ComedyResult from "./components/Results/ComedyResult";
import HorrorResult from "./components/Results/HorrorResult";
import RomanceResult from "./components/Results/RomanceResult";
import MysteryResult from "./components/Results/MysteryResult";
import SciFiResult from "./components/Results/SciFiResult";
import WesternResult from "./components/Results/WesternResult";
import AnimationResult from "./components/Results/AnimationResult";
import TVResult from "./components/Results/TVResult";
import Search from "./components/Search/Search";

const rootReducer = combineReducers({
  movies: movieReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Nav />
            <TrendingResult />
          </Route>
          <Route exact path="/Trending">
            <Header />
            <Nav />
            <TrendingResult />
          </Route>
          <Route path="/TopRated">
            <Header />
            <Nav />

            <TopRatedResult />
          </Route>
          <Route path="/Action">
            <Header />
            <Nav />
            <ActionResults />
          </Route>
          <Route path="/Comedy">
            <Header />
            <Nav />
            <ComedyResult />
          </Route>
          <Route path="/Horror">
            <Header />
            <Nav />
            <HorrorResult />
          </Route>
          <Route path="/Romance">
            <Header />
            <Nav />
            <RomanceResult />
          </Route>
          <Route path="/Mystery">
            <Header />
            <Nav />
            <MysteryResult />
          </Route>
          <Route path="/Scifi">
            <SciFiResult />
          </Route>
          <Route path="/Western">
            <Header />
            <Nav />
            <WesternResult />
          </Route>
          <Route path="/Animation">
            <Header />
            <Nav />
            <AnimationResult />
          </Route>
          <Route path="/TVMovie">
            <Header />
            <Nav />
            <TVResult />
          </Route>
          <Route path="/Search">
            <Header />
            <Search />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
