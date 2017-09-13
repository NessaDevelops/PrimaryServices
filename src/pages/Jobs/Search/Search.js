import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../components/NavBar';
import SearchBar from '../../../components/SearchBar';
import './Search.css';

class Job extends Component {
  render() {
    return (
      <div className="job">
        <h5>{this.props.title}</h5>
        <div className="job-header">
          <div className="icon-text">
            <img src={require("../../../imgs/Icons/location.png")} /><p>{this.props.location}</p>
          </div>
          <div className="icon-text">
            <img src={require("../../../imgs/Icons/clock.png")} /><p>{this.props.posted}</p>
          </div>
        </div>
        <p>{this.props.description}</p>
        <Link to="/viewjob">
          <p>View Job</p>
        </Link>
      </div>
    )
  }
}

Job.propTypes = {
  title: React.PropTypes.string.isRequired,
  location: React.PropTypes.string.isRequired,
  posted: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
}

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <NavBar></NavBar>
          <h2>Professional</h2>
          <SearchBar></SearchBar>
          <div className="container">
            <aside>
              <h4>134 Jobs Found</h4>
              <div className="criteria-container">
                <div className="criteria">
                  <h6>Job Category</h6>
                  <form>
                    <div className="input-group">
                      <input type="checkbox" />
                      <label>Category1</label>
                    </div>
                    <div className="input-group">
                      <input type="checkbox" />
                      <label>Category2</label>
                    </div>
                    <div className="input-group">
                      <input type="checkbox" />
                      <label>Category3</label>
                    </div>
                    <div className="input-group">
                      <input type="checkbox" />
                      <label>Category4</label>
                    </div>
                    <div className="input-group">
                      <input type="checkbox" />
                      <label>Category5</label>
                    </div>
                    <div className="input-group">
                      <input type="checkbox" />
                      <label>Category6</label>
                    </div>
                  </form>
                </div>
                <div className="criteria">
                  <h6>Type</h6>
                  <form>
                    <div className="input-group">
                      <input type="checkbox" />
                      <label>Full Time</label>
                    </div>
                    <div className="input-group">
                      <input type="checkbox" />
                      <label>Part Time</label>
                    </div>
                    <div className="input-group">
                      <input type="checkbox" />
                      <label>Contract/Freelance</label>
                    </div>
                  </form>
                </div>
                <div className="criteria">
                  <h6>City</h6>
                  <form>
                    <div className="input-group">
                      <input type="checkbox" />
                      <label>Houston, TX</label>
                    </div>
                    <div className="input-group">
                      <input type="checkbox" />
                      <label>Austin, TX</label>
                    </div>
                  </form>
                </div>
              </div>
            </aside>
            <section>
              <Job title="Bilingual Customer Service" location="Houston, TX" posted="Posted Today" 
                description="Ready for the next step in your Customer Service career? Primary Services is conducting interviews for Bilingual Tier I customer service roles with an up and coming green energy company.  In this role, you will be providing high-level professional customer service to customers in North and South America! Apply Immediately!<br/><br/>Ready to work in a call center that isn’t just a dead end job? Apply now to join a rapidly growing industry with large potential for career growth!">
              </Job>
              <Job title="Bilingual Customer Service" location="Houston, TX" posted="Posted Today" 
                description="Ready for the next step in your Customer Service career? Primary Services is conducting interviews for Bilingual Tier I customer service roles with an up and coming green energy company.  In this role, you will be providing high-level professional customer service to customers in North and South America! Apply Immediately!<br/><br/>Ready to work in a call center that isn’t just a dead end job? Apply now to join a rapidly growing industry with large potential for career growth!">
              </Job>
              <Job title="Bilingual Customer Service" location="Houston, TX" posted="Posted Today" 
                description="Ready for the next step in your Customer Service career? Primary Services is conducting interviews for Bilingual Tier I customer service roles with an up and coming green energy company.  In this role, you will be providing high-level professional customer service to customers in North and South America! Apply Immediately!<br/><br/>Ready to work in a call center that isn’t just a dead end job? Apply now to join a rapidly growing industry with large potential for career growth!">
              </Job>
              <Job title="Bilingual Customer Service" location="Houston, TX" posted="Posted Today" 
                description="Ready for the next step in your Customer Service career? Primary Services is conducting interviews for Bilingual Tier I customer service roles with an up and coming green energy company.  In this role, you will be providing high-level professional customer service to customers in North and South America! Apply Immediately!<br/><br/>Ready to work in a call center that isn’t just a dead end job? Apply now to join a rapidly growing industry with large potential for career growth!">
              </Job>
            </section>
          </div>
        </div>
    );
  }
}

export default Search;
