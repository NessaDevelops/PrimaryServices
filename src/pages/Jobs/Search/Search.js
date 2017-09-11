import React, { Component } from 'react';
import NavBar from '../../../components/NavBar';
import SearchBar from '../../../components/SearchBar';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <NavBar></NavBar>
        <div className="content">
          <SearchBar></SearchBar>
        </div>
      </div>
    );
  }
}

export default Search;
