import React, {useState} from 'react'
import InputRange from 'react-input-range';
import Slider from 'react-input-slider';



export default function NaviBar(props) {

  const [state, setState] = useState({ x: 10});




    return (
        <div className="container navi-container">
            <input id="movieSearch" placeholder="Search your movies here..." onChange={event => {
                console.log(event.target.value)
                props.setName(event.target.value)
            }} />
            <div className="slider">
              <Slider
                axis="x"
                x = {props.rating}
                xmax = {10}
                xmin = {0}
                xstep = {0.5}
                onChange = {event => props.setRating(event.x)}
                valuelabeldisplay="auto"
              />
            </div>


        </div>
    )
}
