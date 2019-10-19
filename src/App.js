import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Loading from "./components/Loading";
import MainPage from "./components/MainPage";

export default function App() {
  const [isLoading, setisLoading] = useState(true);
  const [mainMovieList, setmainMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getFirstPage();
  }, []);

  async function getFirstPage() {
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=a3bab0e1a8803be8f21fc84e04666349&page=${currentPage}`;
    let response = await fetch(url);
    let resjson = await response.json();
    setmainMovieList([...mainMovieList, resjson.results].flat(1));
    setisLoading(false);
    setCurrentPage(currentPage + 1);
  }

  if (isLoading) return <Loading />;
  return (
    <MainPage
      movieList={mainMovieList}
      getFirstPage={getFirstPage}
    />
  );
}
