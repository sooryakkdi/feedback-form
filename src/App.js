import React from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { RequestRating } from './components/RequestRating';
import { DisplayRating } from './components/DisplayRating';

//css
import './App.css';
import './styles/feedbackForm.css';

const App = () => {
  return (
    <div className='mainContainer'>
      <div className='footer'>
        <BrowserRouter>
          <Route
            exact
            path='/rating-form'
            component={withRouter(RequestRating)}
          />
          <Route
            path='/showRating?id=:id'
            component={withRouter(DisplayRating)}
          />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
