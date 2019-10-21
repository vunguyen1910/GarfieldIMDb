import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import ReactModal from "react-modal";
import YouTube from "@u-wave/react-youtube";

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
  const [isOpen, setIsOpen] = useState(false);
  const [idTrailer, setIdTrailer] = useState(null);
  let cardStyle = {
    color: `${collapse ? "black" : "white"}`
  };
  const showModal = (id) => {
    getTrailer(id);
    setIsOpen(true)
  };
  const getTrailer = async (id) => {
    const response = await fetch(
      `http://api.themoviedb.org/3/movie/${id}/videos?api_key=a3bab0e1a8803be8f21fc84e04666349`
    );
    const data = await response.json();
    setIdTrailer(data.results[0].key)
  };
  return (
    <div className="container movies-container">
      {props.movieList.map(movie => {
        return (
          <Card key={movie.id}>
            <Card.Img
              className="cards"
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path &&
                movie.poster_path}`}
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
                {movie.genre_ids.map((gen, idx) => {
                  return (
                    <button key={idx} className="tag-button">
                      {Genres[gen]}
                    </button>
                  );
                })}
              </div>
              <button onClick={() => {
                showModal(movie.id)
                }
              }className="btn btn-primary btn-lg"> ViewTrailer</button>
            </Card.Body>
          </Card>
        );
      })}
      <ReactModal
        closeTimeoutMS={2000}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        onClick={() => setIsOpen(false)}
      >
        {isOpen === true ? <YouTube video={`${idTrailer}`} autoplay width="100%" height="100%" /> : ""}
      </ReactModal>
    </div>
  );
}
