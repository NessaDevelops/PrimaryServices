import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../components/NavBar';
import './ViewJob.css';

class ViewJob extends Component {
  render() {
    return (
      <div className="ViewJob">
        <NavBar></NavBar>
        <h2>Professional</h2>
          <div className="container">
            <section>
              <img className="Small-Icon" src={require("../../../imgs/Icons/back.png")} /><a>Back to results</a>
              <div className="job">
                <h5>Bilingual Customer Service</h5>
                <div className="job-header">
                  <img className="Small-Icon" src={require("../../../imgs/Icons/location.png")} /><p>Houston, TX</p>
                  <img className="Small-Icon" src={require("../../../imgs/Icons/clock.png")} /><p>Posted Today</p>
                </div>
                <p>Ready for the next step in your Customer Service career? Primary Services is conducting interviews for Bilingual Tier I customer service roles with an up and coming green energy company.  In this role, you will be providing high-level professional customer service to customers in North and South America! Apply Immediately!</p>
                <p><br/>Ready to work in a call center that isn’t just a dead end job? Apply now to join a rapidly growing industry with large potential for career growth!</p>
                <Link to="/viewjob">
                  <p>View Job</p>
                </Link>
              </div>
            </section>
            <aside>
              <h5>Related Jobs</h5>
              <div className="job">
                <h5>Accountant III</h5>
                <p>Houston, TX</p><p>Posted Today</p>
                <Link to="/viewjob">
                  <p>View Job</p>
                </Link>
              </div>
              <div className="job">
                <h5>Financial Account I</h5>
                <p>Houston, TX</p><p>Posted Today</p>
                <Link to="/viewjob">
                  <p>View Job</p>
                </Link>
              </div>
              <div className="job">
                <h5>Staff Accountant</h5>
                <p>Houston, TX</p><p>Posted Today</p>
                <Link to="/viewjob">
                  <p>View Job</p>
                </Link>
              </div>
              <div className="job">
                <h5>Accountant - Advanced</h5>
                <p>Houston, TX</p><p>Posted Today</p>
                <Link to="/viewjob">
                  <p>View Job</p>
                </Link>
              </div>
            </aside>
          </div>
      </div>
    );
  }
}

export default ViewJob;