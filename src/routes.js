import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Splash from './pages/Jobs/Splash/Splash';
import Search from './pages/Jobs/Search/Search';
import ViewJob from './pages/Jobs/ViewJob/ViewJob';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Splash} />
          <Route path='/search' component={Search} />
          <Route path='/viewjob' component={ViewJob} />
        </div>
      </BrowserRouter>
    )
  }
}

export default Routes;