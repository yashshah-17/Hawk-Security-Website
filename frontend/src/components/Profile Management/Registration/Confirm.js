import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';


export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, contact, email, address, DOB, eType, username, password }
    } = this.props;
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
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} /> 
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} /> 
              </ListItem>
              <ListItem>
                <ListItemText primary="Contact" secondary={contact} /> 
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} /> 
              </ListItem>
              <ListItem>
                <ListItemText primary="Address" secondary={address} /> 
              </ListItem>
              <ListItem>
                <ListItemText primary="DOB" secondary={DOB} /> 
              </ListItem>
              <ListItem>
                <ListItemText primary="eType" secondary={eType} /> 
              </ListItem>
              <ListItem>
                <ListItemText primary="username" secondary={username} /> 
              </ListItem>
              <ListItem>
                <ListItemText primary="password" secondary={password} /> 
              </ListItem>
            </List>
            
            <Box align="center" pt={0}>
              <Button
                color="secondary"
                variant="contained"
                onClick={this.back}
              >Back</Button>
            </Box>

            <Box align="center" pt={2} pb={3}>
              <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
              >Confirm & Continue</Button>
            </Box>

          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}


export default Confirm;