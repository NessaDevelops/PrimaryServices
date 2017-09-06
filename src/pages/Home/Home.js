import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="content">

          <div className="grid">
            <figure className="effect-2">
              <img src={require("../../imgs/2.jpg")} alt="img04"/>
              <figcaption>
                <h2><span>Professional</span><br/><i>View Jobs</i></h2>
                <a href="#">View more</a>
              </figcaption>			
            </figure>
            <figure className="effect-2">
              <img src={require("../../imgs/1.jpeg")} alt="img05"/>
              <figcaption>
                <h2>Customer <span>Service</span><br/><i>VIEW JOBS</i></h2>
                <a href="#">View more</a>
              </figcaption>			
            </figure>
          </div>

          <div className="grid">
            <figure className="effect-4">
              <img src={require("../../imgs/2.jpg")} alt="img02"/>
              <figcaption>
                <h2><span>Professional</span></h2>
                <p>View Jobs</p>
                <a href="#">View more</a>
              </figcaption>			
            </figure>
            <figure className="effect-4">
              <img src={require("../../imgs/1.jpeg")} alt="img16"/>
              <figcaption>
                <h2>Customer <span>Service</span></h2>
                <p>View Jobs</p>
                <a href="#">View more</a>
              </figcaption>			
            </figure>
          </div>

          <div className="grid">
            <figure className="effect-5">
              <img src={require("../../imgs/2.jpg")} alt="img13"/>
              <figcaption>
                <h2><span>Professional</span></h2>
                <p>View Jobs</p>
                <a href="#">View more</a>
              </figcaption>			
            </figure>
            <figure className="effect-5">
              <img src={require("../../imgs/1.jpeg")} alt="img20"/>
              <figcaption>
                <h2>Customer <span>Service</span></h2>
                <p>View Jobs</p>
                <a href="#">View more</a>
              </figcaption>			
            </figure>
          </div>

          <div className="grid">
            <figure className="effect-7">
              <img src={require("../../imgs/2.jpg")} alt="img18"/>
              <figcaption>
                <h2><span>Professional</span></h2>
                <p>View Jobs</p>
                <a href="#">View more</a>
              </figcaption>			
            </figure>
            <figure className="effect-7">
              <img src={require("../../imgs/1.jpeg")} alt="img22"/>
              <figcaption>
                <h2>Customer <span>Service</span></h2>
                <p>View Jobs</p>
                <a href="#">View more</a>
              </figcaption>			
            </figure>
          </div>

          <div className="grid">
            <figure className="effect-9">
              <img src={require("../../imgs/2.jpg")} alt="img25"/>
              <figcaption>
                <h2><span>Professional</span></h2>
                <p>View Jobs</p>
                <a href="#">View more</a>
              </figcaption>			
            </figure>
            <figure className="effect-9">
              <img src={require("../../imgs/1.jpeg")} alt="img06"/>
              <figcaption>
                <h2>Customer <span>Service</span></h2>
                <p>View Jobs</p>
                <a href="#">View more</a>
              </figcaption>			
            </figure>
          </div>

          <div className="grid">
            <figure className="effect-10">
              <img src={require("../../imgs/2.jpg")} alt="img09"/>
              <figcaption>
                <h2><span>Professional</span></h2>
                <p>View Jobs</p>
                <a href="#">View more</a>
              </figcaption>			
            </figure>
            <figure className="effect-10">
              <img src={require("../../imgs/1.jpeg")} alt="img08"/>
              <figcaption>
                <h2>Customer <span>Service</span></h2>
                <p>View jobs</p>
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
