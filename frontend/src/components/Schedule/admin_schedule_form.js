import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import '../../main.css';
import "react-datepicker/dist/react-datepicker.css";


class admin_schedule_form extends React.Component {
    constructor(props) {
        super(props);
    
        this.onChangeEmpName = this.onChangeEmpName.bind(this);
        this.onChangeEmpID = this.onChangeEmpID.bind(this);
        this.onChangeEffective = this.onChangeEffective.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        
        this.state = {
          emp_name: '',
          emp_id: '',
          effective: '',
          start: [],
          end: [],
          location: [],
          loc_option: [],
          emp_list: [],
          loc_list: [],
          date : ""
        }
      }      
    
    componentDidMount() {
        axios.get('/shift_upload/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                emp_list: response.data.map(emp => ((emp.firstName) + ' ' + (emp.lastName))),
                emp_name: response.data[0].Name
              })
            }
          })
          .catch((error) => {
            console.log(error);
        })
    
        axios.get('/location/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                loc_list: response.data.map(loc => loc.Name),
                loc_option: response.data[0].Name
              })
            }
          })
          .catch((error) => {
            console.log(error);
        })  
    }

    onChangeDate(date) {
        this.setState({
          date: date
        })
    }
    
    isMonday(date){
        const day = new Date(date).getDay();
        return day == 1;
    }

    onChangeEmpName(e) {
        
        axios.get('/shift_upload/' + e.target.value)
          .then(res => {
            console.log(res.data[0]._id);  
            this.setState({
                emp_id: res.data[0]._id
            });
            this.onChangeEmpID(res.data[0]._id);
        });

        this.setState({
            emp_name: e.target.value
        })
    }
    
    onChangeEmpID(id) {
        this.setState({
            emp_id: id
        })
    }
    
    onChangeEffective(e) {
        this.setState({
            effective: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
    
        this.state.start = [];
        this.state.end = [];
        this.state.location = [];

        let flag = 0;
        const re_pattern = "(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$";

        for (let i = 1; i<= 7; i++){
            let temp_start = document.getElementById("start" + i).value;
            let temp_end =  document.getElementById("end" + i).value;
            let temp_loc = document.getElementById("loc" + i).value;

            if (temp_start.search(re_pattern) != -1 && temp_end.search(re_pattern) != -1){                
                this.state.start.push(temp_start);
                this.state.end.push(temp_end);
                this.state.location.push(temp_loc);

                console.log("Valid");
                this.setState({
                    start: this.state.start,
                    end: this.state.end,
                    location: this.state.location
                })
            }
    
            else if(temp_start === "-" && temp_end === "-"){
                temp_start = -1;
                temp_end = -1;
                this.state.start.push(temp_start);
                this.state.end.push(temp_end);
                this.state.location.push(temp_loc);

                this.setState({
                    start: this.state.start,
                    end: this.state.end,
                    location: this.state.location
                })
            }

            else{
                flag = -1;
                alert("Data entered is Invalid! Kindly check the data and submit again.");
                break;
            }
            
        }
        

        if(flag === 0){
        
        const date = new Date(this.state.date);
        // const formattedDate = date.getFullYear() + '-' + (date.getUTCMonth()+1) + '-' +date.getDate();
        // console.log(formattedDate);

        const shift_data = {
            emp_name: this.state.emp_name,
            emp_id: this.state.emp_id,
            start: this.state.start,
            end: this.state.end,
            location: this.state.location,
            date: date
        }
    
        console.log(shift_data);
    
        axios.post('/shift_upload/add', shift_data)
          .then(res => console.log(res.data));
    
        alert("Schedule detail for " + this.state.emp_name + " have been uploaded");
        window.location = '/admin_schedule_form';
        }
    }
  
    render(){
        return (
            <React.Fragment>
                <section class="pb50 sectionBox">
                    <div class="wrapper smallWrapper">
                        <div class="text-center uppercase">
                            <h3>Upload a Schedule</h3>
                        </div>
                        <div class="pt40">
                            <form>
                                <div>
                                    <div class="ib vt w50 mw100">
                                        <div class="field">
                                            <label for="employeeName">Employee Name <sup>*</sup></label>
                                            <select ref="userInput"
                                                required
                                                className="form-control"
                                                value={this.state.emp_name}
                                                onChange={this.onChangeEmpName}>
                                                {
                                                    this.state.emp_list.map(function(emp) {
                                                    return <option 
                                                        key={emp}
                                                        value={emp}>{emp}
                                                        </option>;
                                                    })
                                                }
                                            </select>
                                            </div>
                                    </div>
                                </div>
                                <div>
                                    {/* <div class="ib vt w50 mw100">
                                        <div class="field">
                                            <label for="emId">Employee Id</label>
                                            <input type="text" disabled placeholder={this.state.emp_id}>
                                            </input>
                                        </div>
                                    </div> */}
                                    <div class="ib vt w50 mw100">
                                        <div class="field">
                                            <label>Effective Date</label>
                                            <DatePicker selected={this.state.date} onChange={this.onChangeDate} 
                                            filterDate={date => this.isMonday(date)} placeholderText="Select Effective Day" required/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="monday">Monday</label>
                                            <input type="text" name="monday" id="start1" placeholder="00:00" required></input>
                                            <input type="text" name="monday" id="end1" placeholder="00:00" required></input>
                                            <select
                                                required
                                                className="form-control"
                                                id="loc1"
                                                // value={this.state.loc_option}
                                                onChange={this.onChangeLocation}>
                                                {
                                                    this.state.loc_list.map(function(loc) {
                                                    return <option 
                                                        key={loc}
                                                        value={loc}>{loc}
                                                        </option>;
                                                    })
                                                }
                                            </select>    
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="tuesday">Tuesday</label>
                                            <input type="text" name="tuesday" id="start2" placeholder="00:00" required></input>
                                            <input type="text" name="tuesday" id="end2" placeholder="00:00" required></input>
                                            <select
                                                required
                                                className="form-control"
                                                // value={this.state.loc_option}
                                                id="loc2"
                                                onChange={this.onChangeLocation}>
                                                {
                                                    this.state.loc_list.map(function(loc) {
                                                    return <option 
                                                        key={loc}
                                                        value={loc}>{loc}
                                                        </option>;
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="wednesday">Wednesday</label>
                                            <input type="text" name="wednesday" id="start3" placeholder="00:00" required></input>
                                            <input type="text" name="wednesday" id="end3" placeholder="00:00" required></input>
                                            <select
                                                required
                                                className="form-control"
                                                // value={this.state.loc_option}
                                                id="loc3"
                                                onChange={this.onChangeLocation}>
                                                {
                                                    this.state.loc_list.map(function(loc) {
                                                    return <option 
                                                        key={loc}
                                                        value={loc}>{loc}
                                                        </option>;
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="thursday">Thursday</label>
                                            <input type="text" name="thursday" id="start4" placeholder="00:00" required></input>
                                            <input type="text" name="thursday" id="end4" placeholder="00:00" required></input>
                                            <select
                                                required
                                                className="form-control"
                                                // value={this.state.loc_option}
                                                id="loc4"
                                                onChange={this.onChangeLocation}>
                                                {
                                                    this.state.loc_list.map(function(loc) {
                                                    return <option 
                                                        key={loc}
                                                        value={loc}>{loc}
                                                        </option>;
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="friday">Friday</label>
                                            <input type="text" name="friday" id="start5" placeholder="00:00" required></input>
                                            <input type="text" name="friday" id="end5" placeholder="00:00" required></input>
                                            <select
                                                required
                                                className="form-control"
                                                // value={this.state.loc_option}
                                                id="loc5"
                                                onChange={this.onChangeLocation}>
                                                {
                                                    this.state.loc_list.map(function(loc) {
                                                    return <option 
                                                        key={loc}
                                                        value={loc}>{loc}
                                                        </option>;
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="saturday">Saturday</label>
                                            <input type="text" name="saturday" id="start6" placeholder="00:00" required></input>
                                            <input type="text" name="saturday" id="end6" placeholder="00:00" required></input>
                                            <select
                                                required
                                                className="form-control"
                                                // value={this.state.loc_option}
                                                id="loc6"
                                                onChange={this.onChangeLocation}>
                                                {
                                                    this.state.loc_list.map(function(loc) {
                                                    return <option 
                                                        key={loc}
                                                        value={loc}>{loc}
                                                        </option>;
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="sunday">Sunday</label>
                                            <input type="text" name="sunday" id="start7" placeholder="00:00" required></input>
                                            <input type="text" name="sunday" id="end7" placeholder="00:00" required></input>
                                            <select
                                                required
                                                className="form-control"
                                                // value={this.state.loc_option}
                                                id="loc7"
                                                onChange={this.onChangeLocation}>
                                                {
                                                    this.state.loc_list.map(function(loc) {
                                                    return <option 
                                                        key={loc}
                                                        value={loc}>{loc}
                                                        </option>;
                                                    })
                                                }
                                            </select>
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

export default admin_schedule_form