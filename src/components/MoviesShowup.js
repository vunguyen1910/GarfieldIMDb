import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import ShowMore from "./ShowMore"

const Genres = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
  10759: "Action & Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  10762: "Kids",
  9648: "Mystery",
  10763: "News",
  10764: "Reality",
  10765: "Sci-Fi & Fantasy",
  10766: "Soap",
  10767: "Talk",
  10768: "War & Politics",
  37: "Western"  
};



export default function MoviesShowup(props) {
  const [collapse, setCollapse] = useState(false);

  let cardStyle = {
      color: `${collapse ? "black" : "white"}`
  }

  return (
    <div className="container movies-container">
      {props.movieList.map(movie => {
        return (
          <Card  key={movie.id}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path && movie.poster_path}`}
              alt="This API is suck"
            />
            <Card.ImgOverlay className="noselect">
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                {`Rating: ${movie.vote_average}`}
                <span>
                  <FontAwesomeIcon
                    icon={movie.vote_average > 5 ? faStar : faStarHalf}
                  />
                </span>
              </Card.Text>
              <Card.Text>{`${movie.overview.slice(0, 150)}...`}</Card.Text>
            </Card.ImgOverlay>
            <Card.Body>
              <div className="movie-tag">
                {movie.genre_ids.map((gen,idx) => {
                  return <button  key={idx} className="tag-button">{Genres[gen]}</button>;
                })}
              </div>
              <Card.Link href="#">Watch Trailer</Card.Link>
            </Card.Body>
          </Card>
        );
      })}
      <ShowMore
        getFirstPage = {props.getFirstPage}
       />
    </div>
  );
}

