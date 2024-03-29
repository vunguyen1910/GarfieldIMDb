import React, {useState} from 'react'
import ControlledCarousel from "./CaroselModule"
import MoviesShowup from "./MoviesShowup"
import NaviBar from "./NaviBar"
import ShowMore from "./ShowMore"

export default function MainPage(props) {
    //FILTER OPTIONALS
    const [name, setName] = useState('')
    const [year, setYear] = useState(2100)
    const [rating, setRating] = useState(0)
    const [popularity, setPopularity] = useState(0)
    //FILTER FUNCTION
    function moviesFilter(moviesList, name, year, rating){
        if(!!name){
          moviesList = moviesList.filter(movie => movie.original_title.includes(name) ? true : false )
        }if(!!rating){
          console.log(rating)
          moviesList = moviesList.filter(movie => movie.vote_average>=rating ? true: false)
        }if(!!popularity){
          moviesList = moviesList.filter(movie => movie.popularity>=popularity ? true: false)
        }
    console.log(moviesList)
    return moviesList
    }

    return (
        <div className="container-fluid main-container">
            <ControlledCarousel />
            <NaviBar
            setmainMovieList = {props.setmainMovieList}
            movieList = {props.movieList}
            setName = {setName}
            setRating = {setRating}
            rating = {rating}
            popularity = {popularity}
            setPopularity = {setPopularity}
            />
            <MoviesShowup
            movieList={moviesFilter(props.movieList, name, year, rating)}
            getFirstPage = {props.getFirstPage}
            />
            <ShowMore
              getFirstPage = {props.getFirstPage}
             />
        </div>
    )
}
