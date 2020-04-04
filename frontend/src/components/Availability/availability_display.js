import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

const AvailDetails = props => (
    <span>
    <tr className="row">
        <td className="col" rowSpan= '2'>{props.avail.Emp_Name}</td>
        <td className="col">{props.avail.MON_START}</td>
        <td className="col">{props.avail.TUE_START}</td>
        <td className="col">{props.avail.WED_START}</td>
        <td className="col">{props.avail.THURS_START}</td>
        <td className="col">{props.avail.FRI_START}</td>
        <td className="col">{props.avail.SAT_START}</td>
        <td className="col">{props.avail.SUN_START}</td>
    </tr>
    <tr className="row">
        <td className="col"></td>
        <td className="col">{props.avail.MON_END}</td>
        <td className="col">{props.avail.TUE_END}</td>
        <td className="col">{props.avail.WED_END}</td>
        <td className="col">{props.avail.THURS_END}</td>
        <td className="col">{props.avail.FRI_END}</td>
        <td className="col">{props.avail.SAT_END}</td>
        <td className="col">{props.avail.SUN_END}</td>
    </tr>
    </span>
);
  
class availability_display extends Component {
    constructor(props) {
      super(props);

      this.state = {availList: []};
    }
  
    componentDidMount() {
      axios.get('http://localhost:5000/availability_display')
        .then(response => {
          this.setState({ availList: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }
    
    tableData() {
      return this.state.availList.map(currentdata => {
        return <AvailDetails avail={currentdata}/>;
      })
    }
  
    render(){
        return (
            <React.Fragment>
                <section className="sectionBox">
                    <div className="wrapper smallWrapper">
                        <div className="text-center uppercase pb40">
                            <h3>Employees' Availability</h3>
                        </div>
                        <div className="container">
                            <Table>
                              <tr className="row text-left">
                                  <th className="col">Name</th>
                                  <th className="col" colspan="1">MON</th>
                                  {/* <th className="col">MON_END</th> */}
                                  <th className="col pl-10" colspan="1">TUE</th>
                                  {/* <th className="col">TUE_END</th> */}
                                  <th className="col pl-10" colspan="1">WED</th>
                                  {/* <th className="col">WED_END</th> */}
                                  <th className="col pl-10" colspan="1">THURS</th>
                                  {/* <th className="col">THURS_END</th> */}
                                  <th className="col pl-10" colspan="1">FRI</th>
                                  {/* <th className="col">FRI_END</th> */}
                                  <th className="col pl-10" colspan="1">SAT</th>
                                  {/* <th className="col">SAT_END</th> */}
                                  <th className="col pl-10" colspan="1">SUN</th>
                                  {/* <th className="col">SUN_END</th> */}
                              </tr>
                              { this.tableData() }
                            </Table>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default availability_display;