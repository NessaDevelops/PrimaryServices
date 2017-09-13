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
            <div className="icon-text">
              <img src={require("../../../imgs/Icons/back.png")} />
              <Link to="/search">
                <p>Back to results</p>
              </Link>
            </div>
            <div className="job">
              <h4>Bilingual Customer Service</h4>
              <div className="icon-text">
                <img src={require("../../../imgs/Icons/location.png")} /><p>Houston, TX</p>
              </div>
              <h5>Description</h5>
              <p>Exciting Opportunity to Join a Global Investment Management Firm as a Senior Tax Accountant!
                <br/><br/>Our client, an investment management firm with a global presence, has an immediate need for a Senior Tax Accountant to tend to a number of high-complexity mutual funds. In this role, you will tackle particularly complex tax compliance work involving the preparation of federal and state tax returns.
                <br/><br/>Key Responsibilities:<br/>
                Prepare income, excise, and state tax returns for assigned portfolio of mutual funds.<br/>
                Periodically review portfolio holdings for PFIC, REIT, partnership, complex, and derivative securities.<br/>
                Analyze book/tax differences for impact on distributions and schedule differences for excise and fiscal years.<br/>
                Analyze excise and fiscal year wash sale deferrals, straddles, foreign tax credits, and other required tax calculations and analysis.<br/>
                After each portfolio’s fiscal annual financial period, prepare work papers for the fund audits that lend support to the tax provision and to the tax footnotes in the financial statements; Review financial statements to ensure accurate reporting of tax information.<br/>
                Calculate all qualified dividend distributions and corporate dividends received deduction for assigned mutual funds, including the monthly reconciliation of financial data related to those dividends.<br/>
                Review all foreign tax returns for accuracy and completeness.<br/>
                Prepare RIC qualification tests for all assigned mutual funds: 90% income distribution, 90% gross income tests, and monthly IRS diversification testing.<br/>
                Prepare schedules for any potential fund mergers - including, but not limited to: pre- and post-reorganization analysis, analysis of capital loss carry-overs, and built-in gains or losses as required by IRC Sections 381-384,.<br/>
                Calculate ownership changes under IRC regulations.<br/>
                Calculate earnings, profit, and equalization for assigned mutual funds.<br/>
                Prepare monthly tax worksheets, excise estimates, and projections used for determining monthly dividend rates, quarterly dividend rates, annual distributions, distributions per share, and Section 19 notices.<br/>
                Prepare estimated and actual excise tax worksheets with supporting schedules on annual basis.<br/>
                Prepare various schedules for shareholder year-end tax reporting.<br/>
                <br/><br/>Qualifications:<br/>
                Bachelor’s degree in Accounting or Finance; CPA preferred<br/>
                3+ years of experience preparing federal income tax returns for mutual funds, including tax research and corporate experience<br/>
                Knowledge of derivatives and tax software<br/><br/>
                If you meet the qualifications outlined above, please apply for immediate consideration!
              </p>
              <div className="apply-container">
                <Link to="/viewjob">
                  <h4>Apply</h4>
                </Link>
                <div className="icon-text">
                  <img src={require("../../../imgs/Icons/clock.png")} /><p>Posted Today</p>
                </div>
              </div>
            </div>
          </section>
          <aside>
            <h5>Related Jobs</h5>
            <div className="job">
              <p>Accountant III</p>
              <div className="icon-text">
                <img src={require("../../../imgs/Icons/location.png")} /><p>Houston, TX</p>
              </div>
              <div className="icon-text">
                <img src={require("../../../imgs/Icons/clock.png")} /><p>Posted Today</p>
              </div>
              <Link to="/viewjob">
                <p>View Job</p>
              </Link>
            </div>
            <div className="job">
              <p>Financial Account I</p>
              <div className="icon-text">
                <img src={require("../../../imgs/Icons/location.png")} /><p>Houston, TX</p>
              </div>
              <div className="icon-text">
                <img src={require("../../../imgs/Icons/clock.png")} /><p>Posted Today</p>
              </div>
              <Link to="/viewjob">
                <p>View Job</p>
              </Link>
            </div>
            <div className="job">
              <p>Staff Accountant</p>
              <div className="icon-text">
                <img src={require("../../../imgs/Icons/location.png")} /><p>Houston, TX</p>
              </div>
              <div className="icon-text">
                <img src={require("../../../imgs/Icons/clock.png")} /><p>Posted Today</p>
              </div>
              <Link to="/viewjob">
                <p>View Job</p>
              </Link>
            </div>
            <div className="job">
              <p>Accountant - Advanced</p>
              <div className="icon-text">
                <img src={require("../../../imgs/Icons/location.png")} /><p>Houston, TX</p>
              </div>
              <div className="icon-text">
                <img src={require("../../../imgs/Icons/clock.png")} /><p>Posted Today</p>
              </div>
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