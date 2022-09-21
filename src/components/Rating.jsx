import React, { useState } from 'react';

const numbers = [1, 2, 3, 4, 5];

export const Rating = (props) => {
  const { onSubmit } = props;
  const [currentValue, setCurrentValue] = useState(0);

  const handleClickEvent = (rating) => {
    setCurrentValue(rating);
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
              onClick={() => handleClickEvent(item)}
              value={item}
            >
              <span>{item}</span>
            </div>
          );
        })}
      </div>
      <button onClick={() => onSubmit(currentValue)}>Submit</button>
    </>
  );
};
