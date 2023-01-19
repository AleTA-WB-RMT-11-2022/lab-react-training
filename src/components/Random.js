function Random({ min, max }) {

  const getRandom = () => {
    return Math.floor(Math.random() * max) - min;
  };

  return <h1 className="Random"> Random value between {min} and {max} --- {getRandom()}</h1>;
}
export default Random;
