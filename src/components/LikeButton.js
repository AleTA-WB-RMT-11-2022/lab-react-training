import { useState } from 'react';

function LikeButton() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('rgb(204, 149, 216)');

  const like = () => {
    randomColorGeneretor();
    setCount((prevCount) => prevCount + 1);
  };

  const randomColorGeneretor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r},${g},${b})`);
  };

  const buttonStyle = {
    padding: '20px 30px',
    backgroundColor: color,
    color: '#fff',
    borderRadius: '10px',
    fontSize: '30px',
  };

  return (
    <div className="LikeButton">
      <button onClick={like} style={buttonStyle}>
        {count} Likes
      </button>
    </div>
  );
}
export default LikeButton;
