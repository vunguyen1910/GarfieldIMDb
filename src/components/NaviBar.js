import React, {useState} from 'react'
import InputRange from 'react-input-range';
import Slider from 'react-input-slider';



export default function NaviBar(props) {

  const [state, setState] = useState({ x: 10});




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
            </div>


        </div>
    )
}
