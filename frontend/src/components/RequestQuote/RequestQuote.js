/**
 * @file Request a Quote component.
 * @author Krutin Trivedi, Banner No: B00843515 <krutin@dal.ca>
 */

//importing Components & required Modules
import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userRequest } from "../../actions/authActions";
import classnames from "classnames";


class RequestQuote extends Component {
  constructor (props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      formErrors: {email: ''},
      emailValid: false,
      emailTouch: false,
      fnameValid: false,
      lnameValid: false,
      formValid: false,
      loginErrors: {},
    }
    
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name + ' ---> ', value);
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }
    
  validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;
    
      switch(fieldName) {
          case 'email':
              this.setState({
                  emailTouch: true
              });
              emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
              fieldValidationErrors.email = emailValid 
                  ? <p className="isValid">Sweet! Email Id is valid</p> 
                  : <p className="has-error">Please Enter a valid Email Id</p>;
              break;
          case 'firstName':
              this.setState({
                  fnameValid: true
              });
              break;
          case 'lastName':
              this.setState({
                  lnameValid: true
              });
              break;
          default:
              break;
      }
      
      this.setState({formErrors: fieldValidationErrors,
                      emailValid: emailValid
                    }, this.validateForm);
  }

  validateForm() {
      this.setState({formValid: this.state.emailValid});
  }

  onSubmitForm(e){
    e.preventDefault();
    
    if(this.state.formValid) {
        const employee = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
        }
        this.props.userRequest(employee, this.props.history);
    }
  }

  render () {
    return (
      <div>
        {/* Body Section */}
        <div className="full_window">
          
          {/* Login Container */}
          <div className="forgot_container">
            
            {/* Imaage View */}
            <div className="image_view">
              <img src={require('../../assets/images/request-a-quote.jpg')} alt=""/>
            </div>
            
            {/* Form Container */}
            <div className="form_container">
              
              {/* Login Text */}
              <div className="login_text">
                <b>Drop Box</b>
              </div>
              
              {/* Login Form Component */}
              <form>
                <div className="row">
                <div className="col-md-12">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <input className="form-control"
                                    type="text"  
                                    name="firstName"
                                    placeholder="First Name"
                                    value={this.state.firstName}  
                                    onChange={this.handleUserInput} required />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                {/* // TODO: change class dynamically to manipulate the border of the input */}
                                <input className="form-control"
                                    type="text"   
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={this.state.lastName}  
                                    onChange={this.handleUserInput} required />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="email">Email address</label>
                                <input className= { classnames("form-control", { is_valid: this.state.emailValid && this.state.emailTouch , has_error: !this.state.emailValid && this.state.emailTouch })}
                                    type="email" 
                                    name="email"
                                    placeholder="Your Email Address"
                                    value={this.state.email}
                                    onChange={this.handleUserInput} required />
                                {this.state.formErrors.email}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <Button className="btn pull-right" block 
                            type="submit" 
                            disabled={!this.state.formValid}
                            onClick={this.onSubmitForm}>Request A Quote</Button>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Body End */}

      </div>
    )
  }
}

RequestQuote.propTypes = {
  userRequest: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { userRequest })(withRouter(RequestQuote));