import React from 'react'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

export default function MoviesShowup(props) {
    return (
        <div className="container movies-container">
            {props.movieList.map((movie) =>{
                return (
                    <Card>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <Card.ImgOverlay>
                        <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{`Rating: ${movie.vote_average}`}<span><FontAwesomeIcon icon={(movie.vote_average > 5) ? faStar: faStarHalf} /></span></Card.Text>
                <Card.Text>
                    {`${movie.overview.slice(0, 150)}...`}
                </Card.Text>

                    </Card.ImgOverlay>
                    <Card.Body>
                      <Card.Link href="#">Watch Trailer</Card.Link>
                    </Card.Body>
                  </Card>
                )
            })}
        </div>
    )
}
