import React from 'react';
import '../../main.css';
import axios from 'axios'; 
import { Link } from 'react-router-dom';

class Location_add extends React.Component {
    constructor(props) {
        super(props);
    
        this.onChangeLocationId = this.onChangeLocationId.bind(this);
        this.onChangeLocationName = this.onChangeLocationName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          locationid: '',
          name: '',
          address: '',
          
        }
      }      
    
      onChangeLocationId(e) {
        this.setState({
            locationid: e.target.value
        })
      }
    
      onChangeLocationName(e) {
        this.setState({
            name: e.target.value
        })
      }
    
      onChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
      }
    
        
      onSubmit(e) {
        e.preventDefault();
    
        const location = {
          Location_ID: this.state.locationid,
          Name: this.state.name,          
          Address: this.state.address          
        }
    
        console.log(location);
    
        axios.post('http://localhost:5000/location/add', location)
          .then(res => console.log(res.data));
    
       window.location = '/admin_schedule_display';
      }
    
    render() {
    
    return (
        <React.Fragment>


{/* JOB Form */}

<section class="pb70 sectionBox">
    <div class="wrapper smallWrapper">
            <div class="text-center uppercase">
                <h3>ADD SHIFT LOCATION</h3>
            </div> 
            <div class="pt40">
                <form>
                    <div>
                        <div class="ib vt w50 mw100">
                             <div class="field">
                                    <label for="locationid">LOCATION ID</label>
                                    {/* <input type="text" name="locationid" id="locationid" placeholder="Enter Location ID here" required/> */}
                                    <input  type="text"
                                        required
                                        placeholder="Enter Location ID here"
                                        value={this.state.locationid}
                                        onChange={this.onChangeLocationId}
                                    />
                             </div>   
                        </div>
                        <div class="ib vt w50 mw100">
                             <div class="field">
                                <label for="locationname">LOCATION NAME</label>
                                {/* <input type="text" name="locationname" id="locationname" placeholder="Enter Location Name here" required/> */}
                                <input  type="text"
                                        required
                                        placeholder="Enter Location Name here"
                                        value={this.state.name}
                                        onChange={this.onChangeLocationName}
                                    />
                             </div>   
                        </div>
                    </div>
                    <div>
                        <div class="ib vt w50 mw100">
                             <div class="field">
                                <label for="emId">LOCATION ADDRESS</label>
                                <textarea name="message" rows="10" cols="20"                                
                                required
                                
                                value={this.state.address}
                                onChange={this.onChangeAddress}>Provide Job Description.</textarea>
                                
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

export default Location_add