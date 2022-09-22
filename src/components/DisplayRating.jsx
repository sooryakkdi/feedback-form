import React from 'react';
import illustrator from '../images/illustration-thank-you.svg';

//const
import { THANK_YOU, SUPPORT_CONTENT } from '../rating.const';

export const DisplayRating = (props) => {
  const { rating } = props.location.state;
  return (
    <div className='feedbackDisplayDiv'>
      <img className='thankYouIcon' src={illustrator} alt='thank-you' />
      <div className='showRatingDiv'>
        <p> You selected {rating} out of 5</p>
      </div>
      <div className='showThankyouDiv'>
        <h1>{THANK_YOU}</h1>
        <p>{SUPPORT_CONTENT}</p>
      </div>
    </div>
  );
};
