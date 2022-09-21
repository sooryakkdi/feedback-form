import React from 'react';

//const
import { RATING_HEADER, RATING_CONTENT } from '../rating.const';

export const RatingMessage = () => {
  return (
    <div>
      <div className='ratingHeader'>
        <h1> {RATING_HEADER} </h1>
        <div className='ratingContent'>
          <p>{RATING_CONTENT}</p>
        </div>
      </div>
    </div>
  );
};
