import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <NavBar></NavBar>
        <div className="content">

          <div className="grid">
            <figure className="effect">
              <img src={require("../../imgs/1.jpg")} alt="img01"/>
              <figcaption>
                <h2><span>Professional</span></h2>
                <p>View Jobs</p>
                <a href="#">View more</a>
              </figcaption>			
            </figure>
            <figure className="effect">
              <img src={require("../../imgs/2.jpeg")} alt="img02"/>
              <figcaption>
                <h2>Customer <span>Service</span></h2>
                <p>View Jobs</p>
                <a href="#">View more</a>
              </figcaption>			
            </figure>
            <figure className="effect">
              <img src={require("../../imgs/3.jpeg")} alt="img03"/>
              <figcaption>
                <h2>Customer <span>Service</span></h2>
                <p>View Jobs</p>
                <a href="#">View more</a>
              </figcaption>			
            </figure>
            <figure className="effect">
              <img src={require("../../imgs/4.jpg")} alt="img04"/>
              <figcaption>
                <h2>Customer <span>Service</span></h2>
                <p>View Jobs</p>
                <a href="#">View more</a>
              </figcaption>			
            </figure>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
