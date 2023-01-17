function BoxColor({r, g, b}){

    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {  // x --> colorValue
        const hex = x.toString(16) // convert decimal values to their hexadecimal equivalent in JavaScript
        return hex.length === 1 ? '0' + hex : hex // add a 0 if only one value
      }).join('') // --> create a unique string  #ff2d03

    const boxStyle = {
        textAlign: "center",
        width: "200px",
        height: "200px",
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        margin: "10px"
    }

   return(
    <div className="BoxColor col" style={boxStyle}>
       <p>rgb({r}, {g}, {b})</p>
       <p>{rgbToHex(r, g, b)}</p>
    </div>
   )
}

export default BoxColor