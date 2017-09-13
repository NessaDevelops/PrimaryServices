import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../components/NavBar';
import SearchBar from '../../../components/SearchBar';
import SearchCriteria from '../../../components/SearchCriteria';
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
  constructor(props) {
    super(props);
    this.state = {
      criteria: [
        { name: "Job Category", searchOptions: ["Category1", "Category2", "Category3", "Category4", "Category5", "Category6"] },
        { name: "Type", searchOptions: ["Full Time", "Part Time", "Contract/Freelance"] },
        { name: "City", searchOptions: ["Austin, TX", "Dallas, TX", "Houston, TX"] }
      ],
      jobs: [
        { title: "Bilingual Customer Service", location: "Houston, TX", posted: "Posted Today",
          description: "Ready for the next step in your Customer Service career? Primary Services is conducting interviews for Bilingual Tier I customer service roles with an up and coming green energy company.  In this role, you will be providing high-level professional customer service to customers in North and South America! Apply Immediately!<br/><br/>Ready to work in a call center that isn’t just a dead end job? Apply now to join a rapidly growing industry with large potential for career growth!" },
        { title: "Bilingual Customer Service", location: "Houston, TX", posted: "Posted Today",
          description: "Ready for the next step in your Customer Service career? Primary Services is conducting interviews for Bilingual Tier I customer service roles with an up and coming green energy company.  In this role, you will be providing high-level professional customer service to customers in North and South America! Apply Immediately!<br/><br/>Ready to work in a call center that isn’t just a dead end job? Apply now to join a rapidly growing industry with large potential for career growth!" },
        { title: "Bilingual Customer Service", location: "Houston, TX", posted: "Posted Today",
          description: "Ready for the next step in your Customer Service career? Primary Services is conducting interviews for Bilingual Tier I customer service roles with an up and coming green energy company.  In this role, you will be providing high-level professional customer service to customers in North and South America! Apply Immediately!<br/><br/>Ready to work in a call center that isn’t just a dead end job? Apply now to join a rapidly growing industry with large potential for career growth!" },
        { title: "Bilingual Customer Service", location: "Houston, TX", posted: "Posted Today",
          description: "Ready for the next step in your Customer Service career? Primary Services is conducting interviews for Bilingual Tier I customer service roles with an up and coming green energy company.  In this role, you will be providing high-level professional customer service to customers in North and South America! Apply Immediately!<br/><br/>Ready to work in a call center that isn’t just a dead end job? Apply now to join a rapidly growing industry with large potential for career growth!" },
        { title: "Bilingual Customer Service", location: "Houston, TX", posted: "Posted Today",
          description: "Ready for the next step in your Customer Service career? Primary Services is conducting interviews for Bilingual Tier I customer service roles with an up and coming green energy company.  In this role, you will be providing high-level professional customer service to customers in North and South America! Apply Immediately!<br/><br/>Ready to work in a call center that isn’t just a dead end job? Apply now to join a rapidly growing industry with large potential for career growth!" }
      ]
    }
  }

  render() {
    const searchList = this.state.criteria.map((criteria, index) =>
      <SearchCriteria name={criteria.name} searchOptions={criteria.searchOptions} />
    );
    const jobList = this.state.jobs.map((job, index) =>
      <Job title={job.title} location={job.location} posted={job.posted} description={job.description} />
    );
    return (
      <div className="Search">
        <NavBar></NavBar>
          <h2>Professional</h2>
          <SearchBar></SearchBar>
          <div className="container">
            <aside>
              <h4>134 Jobs Found</h4>
              <div className="criteria-container">
                {searchList}
              </div>
            </aside>
            <section>
              {jobList}
            </section>
          </div>
        </div>
    );
  }
}

export default Search;
