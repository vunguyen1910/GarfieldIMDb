import React, {useState} from 'react'
import Slider from 'react-input-slider';



export default function NaviBar(props) {

  const [sortByRating, setSortByRating] = useState({active: false, upDown: "up"})
  const [sortByPopularity, setSortByPopularity] = useState({active: false, upDown: "up"})

const sortAZrating = () => {
  props.setmainMovieList([props.movieList.sort((a, b) => a.vote_average - b.vote_average)].flat(1))
}

const sortZArating = () => {
  props.setmainMovieList([props.movieList.sort((a, b) => b.vote_average - a.vote_average)].flat(1))
}

const sortAZpopularity = () => {
  props.setmainMovieList([props.movieList.sort((a, b) => a.popularity - b.popularity)].flat(1))
}

const sortZApopularity = () => {
  props.setmainMovieList([props.movieList.sort((a, b) => b.popularity - a.popularity)].flat(1))
}

    return (
        <div className="container navi-container">
        <h3>Want to custom what you see?</h3>
            <input id="movieSearch" placeholder="Search your movies here..." onChange={event => {
                console.log(event.target.value)
                props.setName(event.target.value)
            }} />
            <div className="sliders">
              <div className="rating-slide">
                <span>Rating</span>
                <Slider
                  id="rating-slide"
                  axis="x"
                  x = {props.rating}
                  xmax = {10}
                  xmin = {0}
                  xstep = {1}
                  onChange = {event => props.setRating(event.x)}
                  valuelabeldisplay="auto"
                />
                <span id="rating-scope">{props.rating}</span>
              </div>
              <div className="popularity-slide">
                <span>Popularity</span>
                <Slider
                  id="popularity-slide"
                  axis="x"
                  x = {props.popularity}
                  xmax = {600}
                  xmin = {0}
                  xstep = {50}
                  onChange = {event => props.setPopularity(event.x)}
                  valuelabeldisplay="auto"
                />
                <span id="popularity-scope">{props.popularity}</span>
              </div>
            </div>
            <div className="buttons">
              <div className="rating-buttons">
                <button className="button" onClick={sortAZrating}>Sort A -> Z by rating</button>
                <button className="button" onClick={sortZArating}>Sort Z -> A by rating</button>
              </div>
              <div className="popularity-buttons">
                <button className="button" onClick={sortAZpopularity}>Sort A -> Z by popularity</button>
                <button className="button" onClick={sortZApopularity}>Sort Z -> A by popularity</button>
              </div>
            </div>


        </div>
    )
}
