function DriverCard({ name, rating, img, car }) {

  const cardStyle = {
    backgroundColor: '#455eb5',
    padding: '20px',
    borderRadius: '10px',
    height: '150px',
    color:'#fff'
  };
  const imageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    margin: '0 auto',
  };

  const fillStars = (num) => {
    const solid = '★'
    const rating = ['☆','☆','☆','☆','☆']
    for(let i = 0; i < num; i++){
        rating.unshift(solid)
        rating.pop()
    }
    return rating.join('')
}

  return (
    <div className="DriverCard row mb-2" style={cardStyle}>
      <div className="col col-5 text-end">
        <img src={img} alt={name} style={imageStyle} />
      </div>
      <div className="col text-start">
        <h3>{name}</h3>
        <h4>{fillStars(Math.round(rating))}</h4>
        <span>{car.model} - {car.licensePlate}</span>
      </div>
    </div>
  );
}
export default DriverCard;
