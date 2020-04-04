import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';


export class Success extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
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
            align="center"
            open="true"
            fullWidth="true"
            maxWidth='sm'>
            <AppBar title="Success"/>
              <h1>Thank You For Your Submission</h1>
              <p>You will get an email with further instructions</p>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}


export default Success;