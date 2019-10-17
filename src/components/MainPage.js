import React from 'react'
import ControlledCarousel from "./CaroselModule"
import MoviesShowup from "./MoviesShowup"
import ShowMore from "./ShowMore"

export default function MainPage(props) {
    return (
        <div>          
            <ControlledCarousel />
            <MoviesShowup movieList={props.movieList} />
            <ShowMore />
        </div>  
    )
}
