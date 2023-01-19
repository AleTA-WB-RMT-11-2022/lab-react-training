import { useState } from 'react';

function Carousel({ images }) {
  const [indexImg, setIndexImg] = useState(0);

  const carouselStyle = {
    width: '200px',
    height: '200px',
    backgroundImage: `url(${images[indexImg]})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignContent: 'stretch',
  };

const goLeft = () => {
    if(indexImg > 0 && indexImg < images.length){
        setIndexImg((prevcountImg) => prevcountImg -1)
    } else {
        setIndexImg(images.length -1)
    }
}

const goRight = () => {
     if(indexImg === images.length -1){
        setIndexImg(0)
     } else {
        setIndexImg((prevcountImg) => prevcountImg + 1)
     }
}

  return (
    <div className="Carousel" style={carouselStyle}>
      <button className="btn btn-outline-dark" onClick={goLeft}>👈</button>
      <button className="btn btn-outline-dark" onClick={goRight}>👉</button>
    </div>
  );
}
export default Carousel;
