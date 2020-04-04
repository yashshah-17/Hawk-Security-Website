import React, { Component } from 'react';
import axios from 'axios';
import '../../main.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';

class availability_form extends React.Component{
    constructor(props) {
        super(props);
    
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
          first_name: '',
          last_name: '',
          id: '',
          date: '',
          start: [],
          end: []
        }
    }      

    componentDidMount() {

        const local_id = this.props.auth.user.id;
        console.log(local_id);
        
        axios.get('http://localhost:5000/availability_display/' + local_id)
          .then(response => {
            this.setState({
                first_name: response.data[0].firstName
            })
            this.setState({
                last_name: response.data[0].lastName
            })
            this.setState({
                id: response.data[0]._id
            })
          })
          .catch((error) => {
            console.log(error);
        })
    
        var today = new Date();
        var today_format = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        this.setState({
            date: today_format
        })
        console.log(this.state.first_name, this.state.last_name, this.state.emp_id);  
    }

    onSubmit(e) {
        e.preventDefault();
    
        this.state.start = [];
        this.state.end = [];

        let flag = 0;
        const re_pattern = "(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$";

        for (let i = 1; i<= 7; i++){
            let temp_start = document.getElementById("start" + i).value;
            let temp_end =  document.getElementById("end" + i).value;
            
            if (temp_start.search(re_pattern) != -1 && temp_end.search(re_pattern) != -1){                
                this.state.start.push(temp_start);
                this.state.end.push(temp_end);

                console.log("Valid");
                this.setState({
                    start: this.state.start,
                    end: this.state.end
                })
            }
    
            else if(temp_start === "-" && temp_end === "-"){
                temp_start = "";
                temp_end = "";
                this.state.start.push(temp_start);
                this.state.end.push(temp_end);

                this.setState({
                    start: this.state.start,
                    end: this.state.end
                })
            }

            else{
                flag = -1;
                alert("Data entered is Invalid! Kindly check the data and submit again.");
                break;
            }
            
        }
        

        if(flag === 0){
            const avail_data = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                start: this.state.start,
                end: this.state.end,
                id: this.state.id,
            }
        
            console.log(avail_data);
        
        axios.post('http://localhost:5000/availability_display/add', avail_data)
            .then(res => console.log(res.data));
    
        alert("Availability data updated");
        window.location = '/';
        }
    }

    render(){
        return (
            <React.Fragment>
                <section class="pb70 sectionBox">
                    <div class="wrapper smallWrapper">
                        <div class="text-center uppercase">
                            <h3>Availablity</h3>
                        </div>
                        <div class="pt40">
                            <form>
                                <div>
                                    <div class="ib vt w50 mw100">
                                        <div class="field">
                                            <label for="firstname">First Name</label>
                                            <input type="text" name="firstname" id="firstname" disabled placeholder={this.state.first_name}></input>
                                        </div>
                                    </div>
                                    <div class="ib vt w50 mw100">
                                        <div class="field">
                                            <label for="lastname">Last Name</label>
                                            <input type="text" name="lastname" id="lastname" disabled placeholder={this.state.last_name}></input>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {/* <div class="ib vt w50 mw100">
                                        <div class="field">
                                            <label for="emId">Employee Id</label>
                                            <input type="text" name="emId" disabled placeholder={this.state.id}></input>
                                        </div>
                                    </div> */}
                                    <div class="ib vt w50 mw100">
                                        <div class="field">
                                            <label for="efDate">Effective Date</label>
                                            <input type="text" name="efDate" id="efDate" disabled placeholder={this.state.date}></input>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="monday">Monday</label>
                                            <input type="text" name="monday" id="start1" placeholder="00:00" required></input>
                                            <input type="text" name="monday" id="end1" placeholder="00:00" required></input>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="tuesday">Tuesday</label>
                                            <input type="text" name="tuesday" id="start2" placeholder="00:00" required></input>
                                            <input type="text" name="tuesday" id="end2" placeholder="00:00" required></input>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="wednesday">Wednesday</label>
                                            <input type="text" name="wednesday" id="start3" placeholder="00:00" required></input>
                                            <input type="text" name="wednesday" id="end3" placeholder="00:00" required></input>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="thursday">Thursday</label>
                                            <input type="text" name="thursday" id="start4" placeholder="00:00" required></input>
                                            <input type="text" name="thursday" id="end4" placeholder="00:00" required></input>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="friday">Friday</label>
                                            <input type="text" name="friday" id="start5" placeholder="00:00" required></input>
                                            <input type="text" name="friday" id="end5" placeholder="00:00" required></input>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="saturday">Saturday</label>
                                            <input type="text" name="saturday" id="start6" placeholder="00:00" required></input>
                                            <input type="text" name="saturday" id="end6" placeholder="00:00" required></input>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="sunday">Sunday</label>
                                            <input type="text" name="sunday" id="start7" placeholder="00:00" required></input>
                                            <input type="text" name="sunday" id="end7" placeholder="00:00" required></input>
                                        </div>
                                    </div>
                                    <p>*Please enter "-" if you are unavailable on a particular day.</p>
                                    <p>*Please use 24 hour time format.</p>
                                </div>
                                <div class="text-center pt30">
                                    <input type="submit" name="submit" value="submit" onClick={this.onSubmit}></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </React.Fragment>    
        )
    }
}
    

availability_form.propTypes = {

    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
export default connect(mapStateToProps)(withRouter(availability_form));


// export default availability_form