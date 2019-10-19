import React from 'react'

export default function ShowMore(props) {
    return (
        <>
            <button onClick={() => {
    
        props.getFirstPage();
            }}>Show more</button>
        </>
    )
}
