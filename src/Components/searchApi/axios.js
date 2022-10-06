import axios from "axios";

export const api = axios.create({
  baseURL:
    //"http://jsonplaceholder.typicode.com/posts",
    "https://api.themoviedb.org/3/search/movie?api_key=517f9f5b4b47532a5d573cfbaa3c556c&language=en-US&query=",
});

export const getPost = async (input) => {
  console.log(input);
  const response = await api.get(input);

  return response.data.results;
};
