function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  const dateFormat = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  return (
    <div className="IdCard card ">
      <div className="row">
        <div className="col col-4 text-center">
          <img src={picture} className="card-img-top cardImg" alt={firstName} />
          <p className="card-text">{gender}</p>
        </div>
        <div className="col col-7 m-2">
          <p className="card-text"><strong>Name: </strong>{firstName}</p>
          <p className="card-text"><strong>Surname: </strong>{lastName}</p>         
          <p className="card-text"><strong>Height: </strong>{height}cm</p>
          <p className="card-text">
          <strong>Date of birth: </strong>{birth.toLocaleDateString('en-US', dateFormat)}
          </p>
        </div>
      </div>
    </div>
  );
}
export default IdCard;
