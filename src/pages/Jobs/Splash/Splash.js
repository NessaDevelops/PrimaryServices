import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../components/NavBar';
import SearchBar from '../../../components/SearchBar';
import './Splash.css';

class Tile extends Component {
  render() {
    return (
      <figure className="effect">
        <img src={this.props.src} alt={this.props.alt}/>
        <figcaption>
          <h2>{this.props.title}<span>{this.props.titleBold}</span></h2>
          <p>View Jobs</p>
          <a href="">View more</a>
        </figcaption>			
      </figure>
    )
  }
}

Tile.propTypes = {
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  titleBold: React.PropTypes.string.isRequired
}

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
            <Tile src={require("../../../imgs/Stock/professional.jpg")} alt="professional" titleBold="Professional"></Tile>
            <Tile src={require("../../../imgs/Stock/office.jpeg")} alt="office" title="Corporate" titleBold="Office Support"></Tile>
            <Tile src={require("../../../imgs/Stock/customer.jpeg")} alt="professional" title="Customer" titleBold="Service"></Tile>
            <Tile src={require("../../../imgs/Stock/it.jpg")} alt="it" title="IT/" titleBold="Engineering"></Tile>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
