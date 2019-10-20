import React, {useState} from 'react'
import ControlledCarousel from "./CaroselModule"
import MoviesShowup from "./MoviesShowup"
import NaviBar from "./NaviBar"

export default function MainPage(props) {
    //FILTER OPTIONALS
    const [name, setName] = useState('')
    const [year, setYear] = useState(2100)
    const [rating, setRating] = useState(0)
    //FILTER FUNCTION
    function moviesFilter(moviesList, name, year, rating){
        if(!!name){
          moviesList = moviesList.filter(movie => movie.original_title.includes(name) ? true : false )
        }else if(!!rating){
          console.log(rating)
          moviesList = moviesList.filter(movie => Number(movie.vote_average)>=rating ? true: false)
        }
    console.log(moviesList)
    return moviesList
    }

    return (
        <div>
            <ControlledCarousel />
            <NaviBar
            setName = {setName}
            setRating = {setRating}
            rating = {rating}
            />
            <MoviesShowup
            movieList={moviesFilter(props.movieList, name, year, rating)}
            getFirstPage = {props.getFirstPage}
            />
        </div>
    )
}
