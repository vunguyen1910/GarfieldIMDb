import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.css";


export default function Loading(props) {

    async function getFirstPage(currentRequest){
        let response = await fetch(currentRequest)
        let resjson = await response.json()
        console.log(resjson)
        props.getMovieList([...props.movieList, resjson.results].flat(1))
        props.getLoadingStatus(false)
    }

    useEffect(() => {getFirstPage(props.APICall)}, [props.APICall])

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center text-light bg-dark w-100 h-100">
            <h1>Hello world</h1>
        </div>
    )
}
