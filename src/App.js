import Header from "./Components/Header/Header";

import MovieListContainer from "./Components/MovieList/MovieListContainer";

function App() {
  return (
    <div className="App">
      {/* just a header as the name implies  */}
      <Header />

      {/* main component */}
      <MovieListContainer />
    </div>
  );
}

export default App;
