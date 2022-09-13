import "./App.css";
import Header from "./Components/Header/Header";
import Search from "./Components/SearchField/Search";
import MovieListContainer from "./Components/MovieList/MovieListContainer";
import APItry from "./Components/ApiTest";
function App() {
  console.log("mata");
  return (
    <div className="App">
      <Header />
      <Search />
      {/* <MovieListContainer /> */}
      <APItry />
    </div>
  );
}

export default App;
