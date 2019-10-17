import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CaroselModule() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block carose-image"
      src="https://wallpaperaccess.com/full/1097749.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Movie of the Year</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block carose-image"
      src="https://images.wallpapersden.com/image/download/joker-2019_66603_3840x2160.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Movie of the Year</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block carose-image"
      src="https://wallpaperaccess.com/full/1097749.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Movie of the Year</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}
