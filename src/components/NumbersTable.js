import { useEffect, useState } from 'react';

function NumbersTable({ limit }) {
  const [count, setCount] = useState([]);

  const countLimit = () => {
    // create array of number from 1 to 'limit' to map and return element for each of them
    const createArrOfNumber = [];
    for (let n = 1; n <= limit; n++) {
      if (n % 2 === 0) {
        let even = { number: n, bg: 'red' };
        createArrOfNumber.push(even);
      } else {
        let odd = { number: n, bg: 'white' };
        createArrOfNumber.push(odd);
      }
    }
    setCount(createArrOfNumber);
  };

  useEffect(() => {
    // to call the function when the componenent get render
    countLimit();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="NumbersTable">
      {count.map((number) => {
        return (
          <div
            className="p-4 border d-inline"
            key={number}
            style={{ backgroundColor: number.bg }}
          >
            {number.number}
          </div>
        );
      })}
    </div>
  );
}
export default NumbersTable;
