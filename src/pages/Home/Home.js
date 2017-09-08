import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="content">

          <div className="grid">
            <figure className="effect-4">
              <img src={require("../../imgs/2.jpeg")} alt="img02"/>
              <figcaption>
                <h2><span>Professional</span></h2>
                <p>View Jobs</p>
                <a href="#">View more</a>
              </figcaption>			
            </figure>
            <figure className="effect-4">
              <img src={require("../../imgs/1.jpg")} alt="img16"/>
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
