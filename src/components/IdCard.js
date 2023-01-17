function IdCard({lastName,firstName,gender,height,birth,picture}) {

    const dateFormat = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

    return(
        <div className="IdCard">
        <div className="container">
            <div className="card">
                <img src={picture} className="card-img-top cardImg" alt={firstName}/>
                <p className="card-text">Name: {firstName}</p>
                <p className="card-text">Surname: {lastName}</p>
                <p className="card-text">{gender}</p>
                <p className="card-text">Height: {height}cm</p>
                <p className="card-text">Date of birth: {birth.toLocaleDateString('en-US', dateFormat)}</p>
            </div>
        </div>

        </div>
    )
}
export default IdCard
