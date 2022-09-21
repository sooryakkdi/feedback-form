import React, { useState } from 'react';
import { RequestRating } from './components/RequestRating';
import { DisplayRating } from './components/DisplayRating';

//css
import './App.css';
import './styles/feedbackForm.css';

const App = () => {
  const [ratingValue, setRatingValue] = useState(0);

  const getRating = (value) => {
    setRatingValue(value);
  };

  return (
    <div className='mainContainer'>
      <div className='footer'>
        {ratingValue === 0 ? (
          <RequestRating onSubmit={(value) => getRating(value)} />
        ) : (
          <DisplayRating value={ratingValue} />
        )}
      </div>
    </div>
  );
};

export default App;
