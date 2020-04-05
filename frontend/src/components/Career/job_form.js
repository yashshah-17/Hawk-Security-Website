// @Author: Milap Bhanderi - B00823109
// Page: Job_form

import React from 'react';
import '../../main.css';

import axios from 'axios'; 
import { Link } from 'react-router-dom';

// Backend Connection 

class Job_form extends React.Component {
    constructor(props) {
        super(props);
    
        this.onChangeJobId = this.onChangeJobId.bind(this);
        this.onChangeJobRole = this.onChangeJobRole.bind(this);
        this.onChangeJobDescription = this.onChangeJobDescription.bind(this);
        this.onChangeJobQualification = this.onChangeJobQualification.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          JOB_ID: '',
          JOB_ROLE: '',
          JOB_DESC: '',
          JOB_QUAL: '',
        }
      }      
    
      onChangeJobId(e) {
        this.setState({
            JOB_ID: e.target.value
        })
      }
    
      onChangeJobRole(e) {
        this.setState({
            JOB_ROLE: e.target.value
        })
      }
    
      onChangeJobDescription(e) {
        this.setState({
            JOB_DESC: e.target.value
        })
      }

      onChangeJobQualification(e) {
        this.setState({
            JOB_QUAL: e.target.value
        })
      }
    
        
      onSubmit(e) {
        e.preventDefault();
    
        const job = {
            JOB_ID: this.state.JOB_ID,
            JOB_ROLE: this.state.JOB_ROLE,          
            JOB_DESC: this.state.JOB_DESC,
            JOB_QUAL: this.state.JOB_QUAL           
        }
    
        console.log(job);
    
        axios.post('/jobs/add', job)
          .then(res => console.log(res.data));
    
       // window.jobs = '/';
      }
    
    render() {
    return (
        <React.Fragment>


{/* JOB Form */}

<section class="pb70 sectionBox">
    <div class="wrapper smallWrapper">
            <div class="text-center uppercase">
                <h3>JOB POSTING</h3>
            </div> 
            <div class="pt40">
                <form>
                    <div>
                        <div class="ib vt w50 mw100">
                             <div class="field">
                                    <label for="jobrole">JOB ID</label>
                                    {/* <input type="text" name="jobid" id="jobjobidrole" placeholder="Enter Job ID here" required/> */}
                                    <input  type="text"
                                        required
                                        placeholder="Enter JOB ID here"
                                        value={this.state.JOB_ID}
                                        onChange={this.onChangeJobId}
                                    />
                             </div>   
                        </div>
                        <div class="ib vt w50 mw100">
                             <div class="field">
                                <label for="jobrole">JOB ROLE</label>
                                {/* <input type="text" name="jobrole" id="jobrole" placeholder="Job role name goes here" required/> */}
                                <input  type="text"
                                        required
                                        placeholder="Enter Location Role here"
                                        value={this.state.JOB_ROLE}
                                        onChange={this.onChangeJobRole}
                                    />
                             </div>   
                        </div>
                    </div>
                    <div>
                        <div class="ib vt w50 mw100">
                             <div class="field">
                                <label for="emId">JOB DESCRIPTION</label>
                                {/* <textarea name="message" rows="20" cols="30" required>Provide Job Description.</textarea> */}
                                <textarea name="message" rows="20" cols="30"                                
                                required
                                
                                value={this.state.JOB_DESC}
                                onChange={this.onChangeJobDescription}>Provide Job Description.</textarea>
                                </div>
                             </div>   
                        </div>
                        
                    <div>
                        <div class="ib vt w50 mw100">
                             <div class="field">
                                <label for="efDate">QUALIFICATION</label>
                                {/* <textarea name="message" rows="20" cols="30"  required>Provide Job Qualification.</textarea> */}
                                <textarea name="message" rows="20" cols="30"                                
                                required
                                
                                value={this.state.JOB_QUAL}
                                onChange={this.onChangeJobQualification}>Provide Job Qualification.</textarea>
                             </div>   
                        </div>
                    </div>
            
                    
                    <div class="text-center pt30">
                        <input type="submit" name="submit" value="submit" onClick = {this.onSubmit}/>
                    </div>
                </form> 
            </div>
    </div>
</section>

</React.Fragment>    
)
}
}

export default Job_form