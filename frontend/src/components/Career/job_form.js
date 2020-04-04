import React from 'react';
import '../../main.css';

import axios from 'axios'; 
import { Link } from 'react-router-dom';

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
    
        axios.post('http://localhost:5000/jobs/add', job)
          .then(res => console.log(res.data));
    
       // window.jobs = '/';
      }
    
    render() {
    return (
        <React.Fragment>


<header class="altBg">
    <div class="headerMain">
        <div class="wrapper clearfix">
            <div class="siteLogo fl">
                <a href="home.html"><img src="./images/Sitelogo.png" alt=""/></a>
            </div>
            <a class="expandMenu"><i></i><i></i><i></i></a>
           <div class="siteNavigation fr">
                <ul class="parent">
                    <li><a href="profile.html">PROFILE</a></li>
                    <li><a href="availablity.html">SHIFT SCHEDULES</a></li>
                    <li><a href="paystub.html">PAYSTUB</a></li>
                    <li><a href="jobs.html">JOB POSTING</a></li>
                </ul>
            </div>
        </div>
    </div>
</header>

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





{/* <!--footer Section--> */}
<footer class="footerSection">
    <div class="footerTop p70-0 ">
        <div class="wrapper">
            <div class="clearfix noListStyle fortopInner">
                    <div class="footerNav ib w25  vt pr15 tabw50 xmw100 xmr0">
                        <h6 class="titleHeight">Quick Links</h6>
                        <ul>
                            <li><a href="javascript:void(0)">Equipment</a></li>
                            <li><a href="javascript:void(0)">Service &amp; Support</a></li>
                            <li><a href="javascript:void(0)">Company</a></li>
                            <li><a href="javascript:void(0)">Blog</a></li>
                            <li><a href="javascript:void(0)">Pricing</a></li>
                            <li><a href="javascript:void(0)">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footerNav ib w25 vt pr15 tabw50 xmw100 xmr0">
                        <h6 class="titleHeight">Extra</h6>
                        <ul>
                            <li><a href="javascript:void(0)">Schedule a Call</a></li>
                            <li><a href="javascript:void(0)">Terms of Service</a></li>
                            <li><a href="javascript:void(0)">Security</a></li>
                            <li><a href="javascript:void(0)">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="footerNav ib w25 vt pr15 withSocial tabw50 xmw100 xmr0">
                        <h6 class="titleHeight">Connect with us</h6>
                        <ul>
                            <li><a href="javascript:void(0)"><i class="fa fa-google-plus"></i>Google</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i>Twitter</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i>Facebook</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-linkedin"></i>Linkdin</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-pinterest"></i>Pintrest</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-instagram"></i>instagram</a></li>
                        </ul>
                    </div>
                    {/* <div class="newlaterForm ib w25 vt tabw50 xmw100 xmr0">
                <h6 class="titleHeight">Newslater sign up</h6>
                <form>
                    <fieldset>
                        <input type="email" placeholder="you@example.com"/>
                    </fieldset>
                    <fieldset>
                        <input type="button" value="Sign up"/>
                    </fieldset>
                </form>
            </div> */}
            </div>
        </div>

    </div>
    <div class="footerBottom p20-0 text-center">
        <div class="wrapper">
            <p>Hawk Security @2020.All rights has been reserved</p>
        </div>
    </div>
            </footer>
        </React.Fragment>    
    )
}
}

export default Job_form