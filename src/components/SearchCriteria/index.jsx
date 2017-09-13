import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class SearchOption extends Component {
  render() {
    return (
      <div className="input-group">
        <input type="checkbox" />
        <label>{this.props.name}</label>
      </div>
    )
  }
}

SearchOption.propTypes = {
  name: React.PropTypes.string.isRequired
}

class SearchCriteria extends Component {
  render() {
    const optionList = this.props.searchOptions.map((option, index) =>
      <SearchOption name={option}></SearchOption>
    );
    return (
      <div className="criteria">
        <h6>{this.props.name}</h6>
        <form>
          {optionList}
        </form>
      </div>
    )
  }
}

SearchCriteria.propTypes = {
  name: React.PropTypes.string.isRequired,
  searchOptions: React.PropTypes.string.isRequired
}
export default SearchCriteria;