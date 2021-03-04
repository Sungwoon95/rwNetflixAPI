import React from "react";
import './App.css';
import Nav from './Nav'
import Row from './Row';
import request from "./Request"

function App() {
  return (
    <div className="App">
      <Nav />
      <Row sizing={true} title="NETFLIX ORIGNALS" fetchUrl={request.fetchNetflixOrignals}/>
      <Row sizing={true} title="Trending" fetchUrl={request.fetchTrending}/>
      <Row title="Action" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={request.fetchComedyMovies} />
    </div>
  );
}

export default App;
