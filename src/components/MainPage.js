import React, {useState} from 'react'
import ControlledCarousel from "./CaroselModule"
import MoviesShowup from "./MoviesShowup"
import NaviBar from "./NaviBar"

export default function MainPage(props) {
    //FILTER OPTIONALS
    const [name, setName] = useState('')
    const [year, setYear] = useState(0)
    const [rating, setRating] = useState(0)
    //FILTER FUNCTION
    function moviesFilter(moviesList, name, year, rating){
        console.log(moviesList)
        if(!!name){
            moviesList = moviesList.filter(movie => movie.original_title.includes(name) ? true : false )
        }if(!!rating){
            moviesList = moviesList.filter(movie => movie.vote_average>rating ? true: false)
        }
    return moviesList
    }

    return (
        <div>          
            <ControlledCarousel />
            <NaviBar
            setName = {setName}
            setYear = {setYear}
            setRating = {setRating}
            />
            <MoviesShowup 
            movieList={moviesFilter(props.movieList, name, year, rating)} 
            getFirstPage = {props.getFirstPage}
            />
        </div>  
    )
}
