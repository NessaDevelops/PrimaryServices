import React, { Component } from 'react';
import NavBar from '../../../components/NavBar';
import SearchBar from '../../../components/SearchBar';
import './Splash.css';

class Tile extends Component {
  render() {
    return (
      <figure>
        <img src={this.props.src} alt={this.props.alt}/>
        <figcaption>
          <h3>{this.props.title}<span>{this.props.titleBold}</span></h3>
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

class Splash extends Component {
  render() {
    return (
      <div className="Splash">
        <NavBar></NavBar>
        <h1>Looking for a job?</h1>
        <h4>Take the next step in your career</h4>
        <SearchBar></SearchBar>
        <div className="grid">
          <Tile src={require("../../../imgs/Stock/professional.jpg")} alt="professional" titleBold="Professional"></Tile>
          <Tile src={require("../../../imgs/Stock/office.jpeg")} alt="office" title="Corporate" titleBold="Office Support"></Tile>
          <Tile src={require("../../../imgs/Stock/customer.jpeg")} alt="professional" title="Customer" titleBold="Service"></Tile>
          <Tile src={require("../../../imgs/Stock/it.jpg")} alt="it" title="IT/" titleBold="Engineering"></Tile>
        </div>
      </div>
    );
  }
}

export default Splash;
