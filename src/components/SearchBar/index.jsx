import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class SearchBar extends Component {
  render() {
    return (
      <form className="search-container">
        <input className="search-input" type="text" placeholder="Job Title, Company or Keyword" />
        <Link to="/search">
          <button className="search-button" type="submit" />
        </Link>
      </form>
    );
  }
}

export default SearchBar;