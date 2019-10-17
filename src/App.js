import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Loading from "./components/Loading"
import MainPage from "./components/MainPage"


export default function App() {
  const [isLoading, setisLoading] = useState(true)
  const [mainMovieList, setmainMovieList] = useState([])
  const [currentAPICall, setcurrentAPICall] = useState('https://api.themoviedb.org/3/trending/all/day?api_key=a3bab0e1a8803be8f21fc84e04666349&page=1')


  if(isLoading) return <Loading movieList={mainMovieList} getLoadingStatus={setisLoading} getMovieList={setmainMovieList} APICall={currentAPICall}/>
  return <MainPage movieList={mainMovieList} getCurrentAPICall={setcurrentAPICall}/>
}