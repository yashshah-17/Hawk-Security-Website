import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';


class FormUserDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  
  render() {

    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
        <div class="text-warning">
        <Dialog
          open="true"
          fullWidth="true"
          maxWidth='xs'
        >
          <form style={{backgroundcolor: "red"}} onSubmit={this.continue}>

            <AppBar title="Enter User Details" />
            <Box p={4}>
            
              <TextField required
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              fullWidth
              margin="normal"
							// fullWidth="true"
            />
            
            <br />
            <TextField required
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              fullWidth
              margin="normal"
							// fullWidth="true"
            />
            <br />
            <TextField required
              placeholder="Enter Your Contact Number"
              label="Contact Number"
              type="tel"
              onChange={handleChange('contact')}
              defaultValue={values.contact}
              fullWidth
              margin="normal"
							// fullWidth="true"
            />
            <br />
            <TextField required
              placeholder="Enter Your Email"
              label="Email"
              type="email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              fullWidth
              margin="normal"
							// fullWidth="true"
            />
            <br />
            <TextField required
              placeholder="Enter Your Address"
              label="Address"
              onChange={handleChange('address')}
              defaultValue={values.address}
              fullWidth
              margin="normal"
							// fullWidth="true"
            />
            <br />
            <TextField
              placeholder="YYYY/MM/DD"
              label="Birth Date"
              onChange={handleChange('DOB')}
              defaultValue={values.DOB}
              fullWidth
              margin="normal"
							// fullWidth="true"
            />
            <br />
            <TextField required
              placeholder="Full-time/Part-time"
              label="Employment Type"
              onChange={handleChange('eType')}
              defaultValue={values.eType}
              fullWidth
              margin="normal"
							// fullWidth="true"
            />
            <br />
            <Box align="center" pt={10}>
              <Button
              type="submit"
              color="primary"
              variant="contained"
            >Continue</Button>
            </Box>
            

          </Box>
            
          </form>
          </Dialog>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;