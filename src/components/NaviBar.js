import React from 'react'
import InputRange from 'react-input-range';

export default function NaviBar(props) {
    return (
        <div className="container navi-container">
            <input placeholder="Type smth ehre" onChange={event => {
                console.log(event.target.value)
                props.setName(event.target.value)
            }} />
            <input type="range" min={0} max={10} step={0.1} onChange={e => props.setRating(e.target.value)} // don't set state on all change as react will re-render
            />
        </div>
    )
}

