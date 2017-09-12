import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class SearchBar extends Component {
  render() {
    return (
      <form className="search-container">
        <div className="input-container">
          <input type="text" placeholder="Job Title, Company or Keyword" />
          <img src={require("../../imgs/Icons/location.png")} />
          <input type="text" placeholder="City & State or ZIP" />
        </div>
        <Link to="/search">
          <button type="submit" />
        </Link>
      </form>
    );
  }
}

export default SearchBar;