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
      <p>A movie that borders on genius-repellant, dark, terrifying, disgusting, brilliant and unforgettable.</p>
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
      <p>If there is a meaningful difference between performing and acting, Joaquin Phoenix surely exemplifies the former here, creepily contorting as the Clown Prince of Crime in Todd Phillips' timely, toxic take on the Making of a Murdering Madman.</p>
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
      <p>If you're feeling insufficiently anxious in your life, "Joker" could be just the ticket. If not, look elsewhere to be entertained.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}
