import { useState } from "react"

function ClickablePicture({img, imgClicked}){

const [clicked, setClicked ] = useState(false)

const imgStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    width: '300px',
    height: '300px',
}

    return(
        <div className="ClickablePicture" style={imgStyle} onClick= {() => setClicked(!clicked)} >
          { clicked && <img src={imgClicked} alt="glasses" width= '300px' />}
        </div>
    )
}
export default ClickablePicture