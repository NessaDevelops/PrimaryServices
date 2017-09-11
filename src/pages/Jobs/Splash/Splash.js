import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../components/NavBar';
import SearchBar from '../../../components/SearchBar';
import './Splash.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <NavBar></NavBar>
        <div className="content">
          <h1>Looking for a job?</h1>
          <h5>Take the next step in your career</h5>
          <SearchBar></SearchBar>
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
