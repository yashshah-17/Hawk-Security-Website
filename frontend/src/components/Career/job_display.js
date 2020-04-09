// @Author: Milap Bhanderi - B00823109
// Page: job_display

import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

const JobDetails = props => (
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h2>{props.job.JOB_ROLE}</h2>
        <h4 class="card-title">Job Description</h4>
        <ul class="card-text">
          <p>{props.job.JOB_DESC}</p>
        </ul>
        <h4>Job Qualifications</h4>
        <ul>
          <p>{props.job.JOB_QUAL}</p>
        </ul>
        <button><a href="/coming_soon"><b>Apply</b></a></button>
      </div>
    </div>
  </div>
);
  

class job_display extends Component {
  constructor(props) {
    super(props);

    this.state = {jobList: []};
  }

  componentDidMount() {
    axios.get('/job_det')
      .then(response => {
        this.setState({ jobList: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
  tableData() {
    return this.state.jobList.map(currentdata => {
      return <JobDetails job={currentdata}/>;
    })
  }

  render(){
    return(
      <React.Fragment>          
        <section class="pb70 sectionBox">     
          <div class="text-center uppercase">
              <h3>JOB OPENING</h3>
          </div> 
          <div class="row pad">
            {this.tableData()}
          </div>
        </section>

      </React.Fragment>
    )
  }
}

export default job_display