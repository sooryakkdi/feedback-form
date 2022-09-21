import React from 'react';
import { Rating } from './Rating';
import { RatingMessage } from './RatingMessage';
import { FaStar } from 'react-icons/fa';
import '../styles/feedbackForm.scss';

export const RequestRating = (props) => {
  const handleSubmit = (value) => {
    props.onSubmit(value);
  };

  return (
    <div className='feedbackDiv'>
      <div className='roundDiv'>
        <FaStar className='starIcon' size='20' />
      </div>
      <RatingMessage />
      <Rating onSubmit={(value) => handleSubmit(value)} />
    </div>
  );
};
