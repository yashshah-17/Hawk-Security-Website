import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';

export class Credentials extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider >
        <React.Fragment>
          <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h5" color="inherit">
                <pre>  Hack Security</pre>
              </Typography>
            </Toolbar>
          </AppBar>

          <Dialog 
            open="true"
            fullWidth="true"
            maxWidth='sm'>
          
          <form onSubmit={this.continue}>
            <AppBar title="Enter System Details" />
            <Box p={4}>

            <TextField required
              placeholder="Enter Your Username"
              label="Username"
              onChange={handleChange('username')}
              defaultValue={values.username}
              margin="normal"
              fullWidth="true"/>
            <br/>
            <TextField required
              type="password"
              min="8"
              placeholder="Enter Your Password"
              label="Password"
              onChange={handleChange('password')}
              defaultValue={values.password}
              margin="normal"
    			    fullWidth="true"/>
            <br/>
            
            <Box align="center" pt={10}>
              <Button
                color="secondary"
                variant="contained"
                onClick={this.back}>Back</Button>
            </Box>
            <Box align="center" pt={2} pb={3}>
              <Button
                type="submit"
                color="primary"
                variant="contained">Confirm & Continue</Button>
            </Box>
          </Box>
        </form>
      </Dialog>
    </React.Fragment>
  </MuiThemeProvider>
);
}
}


export default Credentials;