import React from 'react';
import '../styles/star.css';
import { FaStar } from 'react-icons/fa';

export const RoundDiv = () => {
  return (
    <div className='roundDiv'>
      <div>
        <FaStar className='star' />
      </div>
    </div>
  );
};
