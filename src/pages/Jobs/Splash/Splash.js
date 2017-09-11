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
            <button className="search__button" type="submit" />
          </form>
          <div className="grid">
            <figure className="effect">
              <img src={require("../../../imgs/Stock/professional.jpg")} alt="professional"/>
              <figcaption>
                <h2><span>Professional</span></h2>
                <p>View Jobs</p>
                <a href="">View more</a>
              </figcaption>			
            </figure>
            <figure className="effect">
              <img src={require("../../../imgs/Stock/office.jpeg")} alt="office"/>
              <figcaption>
                <h2>Corporate <span>Office Support</span></h2>
                <p>View Jobs</p>
                <a href="">View more</a>
              </figcaption>			
            </figure>
            <figure className="effect">
              <img src={require("../../../imgs/Stock/customer.jpeg")} alt="customer"/>
              <figcaption>
                <h2>Customer <span>Service</span></h2>
                <p>View Jobs</p>
                <a href="">View more</a>
              </figcaption>			
            </figure>
            <figure className="effect">
              <img src={require("../../../imgs/Stock/it.jpg")} alt="it"/>
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
