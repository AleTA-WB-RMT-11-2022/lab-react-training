import visa from '../assets/images/visa.png';
import masterCard from '../assets/images/masterCard.png';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {

  const cardStyle = {
    width: '200px',
    height: '170px',
    margin: '10px',
    borderRadius: '5px',
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };

  const coverNumber = (cardNumber) => {
    let hideNum = [];
	for(let i = 0; i < cardNumber.length; i++){
    if(i < cardNumber.length-4){
      hideNum.push("*");
    }else{
      hideNum.push(cardNumber[i]);
    }
  }
  return hideNum.join("");
  }

  return (
    <div className="CreditCard col" style={cardStyle}>
      <div className="mb-3 text-end">
        <img src={type === 'Visa' ? visa : masterCard} alt={type} />       
      </div>
      <h4>{coverNumber(number)}</h4>
      <div className='text-start'>
       <span>Expires {expirationMonth}/{expirationYear}</span> 
       <span className='ms-4'>{bank}</span>
       <p>{owner}</p>
      </div>
      
    </div>
  );
}

export default CreditCard;
