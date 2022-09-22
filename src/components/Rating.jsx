import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const numbers = [1, 2, 3, 4, 5];

export const Rating = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const handleSubmit = (e) => {
    if (currentValue === 0) {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className='containerDiv'>
        {numbers.map((item) => {
          return (
            <div
              key={item}
              className='roundDivHover'
              style={{
                backgroundColor: currentValue === item ? '#959eac' : '',
                color: currentValue === item ? 'white' : '',
              }}
              onClick={() => setCurrentValue(item)}
              value={item}
            >
              <span>{item}</span>
            </div>
          );
        })}
      </div>
      <div>
        <Link
          to={{
            pathname: `/showRating?id=${currentValue}`,
            state: { rating: currentValue },
          }}
          className='btn btn-primary'
        >
          <button onClick={handleSubmit}>Submit</button>
        </Link>
      </div>
    </>
  );
};
