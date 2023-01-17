function Rating(props){

const fillStars = (num) => {
    const solid = '★'
    const rating = ['☆','☆','☆','☆','☆']
    for(let i = 0; i < num; i++){
        rating.unshift(solid)
        rating.pop()
    }
    return rating.join('')
}

    return(
        <div className="Rating text-start">
           {fillStars(Math.round(props.children))} Given rating: {props.children}
        </div>
    )
}
export default Rating