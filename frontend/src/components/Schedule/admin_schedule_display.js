// Nikita Patel -- B00826639

import React from 'react';
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import { Table } from 'reactstrap';

import "./admin_schedule_theme.css" 
import "react-datepicker/dist/react-datepicker.css";

const AvailDetails = props => (
  <tr className="row">
      <td className="col">{props.avail.Name}</td>
      <td className="col">{props.avail.StartscheduledDateTime}</td>
      <td className="col">{props.avail.EndscheduledDateTime}</td>
      <td className="col">{props.avail.location}</td>
  </tr>
)

class Admin_schedule_display extends React.Component {
 
  constructor(props) {
    super(props);

    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmitDate = this.onSubmitDate.bind(this);
  
    this.state = {
      date: new Date(),
      shiftList: []
    }
  }      
  


  onChangeDate(date) {
    this.setState({
      date: date
    })
    
    
  }

  componentDidMount() {
    let cur_date = new Date().getDate();
    let cur_month = new Date().getMonth() + 1; //Current Month
    let cur_year = new Date().getFullYear();
    
    let current_day = cur_year + '-' + cur_month + '-' + cur_date ;

    axios.get('/shift_details/' +  current_day)
    .then(res => {
        

        let events = [];
      for (let index = 0; index < res.data.length; index++) {
        let schedule = {
          Name : res.data[index].Name,
          StartscheduledDateTime : (new Date(res.data[index].StartscheduledDateTime)).getUTCHours()
                                 + ':' + (new Date(res.data[index].StartscheduledDateTime)).getUTCMinutes()                                                               ,
          EndscheduledDateTime: (new Date(res.data[index].EndscheduledDateTime)).getUTCHours()
                                 + ':' + (new Date(res.data[index].EndscheduledDateTime)).getUTCMinutes(),
          location: res.data[index].location
        }
        events.push(schedule);
      }
        this.setState({ shiftList: events })
        // console.log(shiftList);
    });

  }
    
  onSubmitDate(e) {
    e.preventDefault();
    
    const date = new Date(this.state.date);
    const formattedDate = date.getFullYear() + '-' + (date.getUTCMonth()+1) + '-' +date.getDate();
   

    axios.get('/shift_details/' +  formattedDate)
      .then(res => {
          

          let events = [];
        for (let index = 0; index < res.data.length; index++) {
          let schedule = {
            Name : res.data[index].Name,
            StartscheduledDateTime : (new Date(res.data[index].StartscheduledDateTime)).getUTCHours()
                                   + ':' + (new Date(res.data[index].StartscheduledDateTime)).getUTCMinutes()                                                               ,
            EndscheduledDateTime: (new Date(res.data[index].EndscheduledDateTime)).getUTCHours()
                                   + ':' + (new Date(res.data[index].EndscheduledDateTime)).getUTCMinutes(),
            location: res.data[index].location
          }
          events.push(schedule);
        }
          this.setState({ shiftList: events })
      })
      .catch(err => alert("There are not any shifts assigned on this date."));

      
      
      
  }

  tableData() {
    return this.state.shiftList.map(currentdata => {
      return <AvailDetails avail={currentdata}/>;
    })
  }

  render() {
    
    return (
        <React.Fragment>
          <section class="pb50 sectionBox">
              
          
                <div className="container">
                     <div className="row justify-content-sm-center align-items-center">
                        <div className="select_date_div col-sm-auto">
                            <p>Select Date</p>
                        </div>
                        <div className="col-sm-auto">
                          <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                          />
                        </div>
                        <div className="col-sm-auto">
                          <button className="btn btn-primary btn-block padding_button" onClick = {this.onSubmitDate}  >Get Schedule</button>
                        </div>
                      </div>
                </div>
                <section className="sectionBox__display">
              
                  <div className="text-center uppercase pb10">
                    <h5>Shifts Details of selected date</h5>
                  </div>
                  <div className="container">
                    <Table striped>
                
                    <tr className="row text-left">
                        <th className="col">Name</th>
                        <th className="col" colSpan="2">Start Time</th>
                        {/* <th className="col">MON_END</th> */}
                        <th className="col pl-5" colSpan="2">End Time</th>
                        {/* <th className="col">TUE_END</th> */}
                        <th className="col pl-5" colSpan="2">Location</th>
                        {/* <th className="col">WED_END</th> */}
                    </tr>
                  
                    { this.tableData() }
                    </Table>
                  </div>
                </section>
            
          </section> 
        </React.Fragment>
    );
  }
}

export default Admin_schedule_display;