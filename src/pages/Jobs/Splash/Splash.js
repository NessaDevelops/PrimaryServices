import React, { Component } from 'react';
import NavBar from '../../../components/NavBar';
import './Splash.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <NavBar></NavBar>
        <div className="content">
          <h1>Looking for a job?</h1>
          <h5>Take the next step in your career</h5>
          <form className="search-container">
            <input className="search__input" type="text" placeholder="Job Title, Company or Keyword" />
            <button className="search__button" type="submit">Search</button>
          </form>
          <div className="grid">
            <figure className="effect">
              <img src={require("../../../imgs/1.jpg")} alt="img01"/>
              <figcaption>
                <h2><span>Professional</span></h2>
                <p>View Jobs</p>
                <a href="">View more</a>
              </figcaption>			
            </figure>
            <figure className="effect">
              <img src={require("../../../imgs/2.jpeg")} alt="img02"/>
              <figcaption>
                <h2>Corporate <span>Office Support</span></h2>
                <p>View Jobs</p>
                <a href="">View more</a>
              </figcaption>			
            </figure>
            <figure className="effect">
              <img src={require("../../../imgs/3.jpeg")} alt="img03"/>
              <figcaption>
                <h2>Customer <span>Service</span></h2>
                <p>View Jobs</p>
                <a href="">View more</a>
              </figcaption>			
            </figure>
            <figure className="effect">
              <img src={require("../../../imgs/4.jpg")} alt="img04"/>
              <figcaption>
                <h2>IT/<span>Engineering</span></h2>
                <p>View Jobs</p>
                <a href="">View more</a>
              </figcaption>			
            </figure>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
