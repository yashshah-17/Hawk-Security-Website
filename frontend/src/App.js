import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";


//importing the required components
import NavHeader from './components/Navbar/NavHeader';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';

import Login from './components/ProfileManagement/Login/login';
import Register from './components/ProfileManagement/Registration/register';
import Forgot_password from './components/ProfileManagement/ForgotPassword/ForgotPassword';

import EmpDashboard from './components/EmployeeDashboard/EmpDashboard';
import User_schedule_display from './components/Schedule/user_schedule_display';
import User_update_profile from './components/ProfileManagement/Update/User_updateProfile';
import Availability_form from './components/Availability/availability_form';

import AdminDashboard from './components/AdminDashboard/AdminDashboard'
import Admin_update_profile from './components/ProfileManagement/Update/Admin_updateProfile';
import Admin_schedule_form from './components/Schedule/admin_schedule_form';
import Admin_schedule_display from './components/Schedule/admin_schedule_display';
import Availability_display from './components/Availability/availability_display';
import Add_location from './components/Location/Add_location';

import Remove_profile from './components/ProfileManagement/Update/RemoveProfile';
import resetPassword from './components/ProfileManagement/ForgotPassword/resetPassword';

import JobDisplay from "./components/Career/job_display";
import JobForm from "./components/Career/job_form";
import RequestQuote from "./components/RequestQuote/RequestQuote";

import PrivateRoute from "./components/private-route/PrivateRoute";


//Error pages
import error400 from "./components/error/error400";
import error404 from "./components/error/error404";


//importing CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './main.css'


// Check for token to keep user logged in
if (localStorage.jwtToken) {
	
	console.log("App.js -> localStorage.jwtToken ------> ", localStorage.jwtToken);
	
	// Set auth token header auth
  	const token = localStorage.jwtToken;
  	setAuthToken(token);
	console.log("App.js -> localStorage.jwtToken -> token ------> ", token);
	  
	// Decode token and get user info and exp
	const decoded = jwt_decode(token);
	console.log("App.js -> localStorage.jwtToken -> decoded ------> ", decoded);
	
	
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
	
	// Check for expired token
	const currentTime = Date.now() / 1000; // to get in milliseconds
	
	console.log("App.js -> localStorage.jwtToken -> decoded.exp < currentTime ------> ", decoded.exp < currentTime);

	if (decoded.exp < currentTime) {
		
		console.log("App.js -> localStorage.jwtToken -> decoded.exp < currentTime ------> ", decoded.exp < currentTime);
		
		// Logout user
		store.dispatch(logoutUser());
		
		// Redirect to login
		window.location.href = "./login";
  	}
}


class App extends Component{
    render() {
		return (
			<Provider store={store}>
				<Router>
					{/* creating Toasts in the Application */}
					<ToastContainer />
					
					{/* This will load the Navbar to all the Components */}
					<NavHeader />
					
					{/* Home Component */}
					<Route exact path='/' component={Home} />
					
					<Route path='/request' component={RequestQuote} />
					<Route path='/job_display' component={JobDisplay} />
					
					{/* Authentication Components */}
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/Forgot_password' component={Forgot_password} />

					{/* Private Routes */}
					<Switch>
						{/* Employee Dashboard Component */}
              			<PrivateRoute exact path="/employee_dashboard" component={EmpDashboard} />
						<PrivateRoute exact path='/employee_dashboard' component={EmpDashboard} />
						<PrivateRoute exact path='/user_schedule_display' component={User_schedule_display} />
						<PrivateRoute exact path='/User_update_profile' component={User_update_profile} />
						
						{/* Admin Dashboard Components */}
						<PrivateRoute exact path='/admin_dashboard' component={AdminDashboard} />
						<PrivateRoute exact path='/admin_schedule_display' component={Admin_schedule_display} />
						<PrivateRoute exact path='/admin_schedule_form' component={Admin_schedule_form} />
						<PrivateRoute exact path='/Admin_update_profile' component={Admin_update_profile} />
						<PrivateRoute exact path='/job_form' component={JobForm} />
						
						{/* This will be common Component for Admin and Employee */}
						<PrivateRoute exact path='/Remove_profile' component={Remove_profile} />

						{/* I don't have Knowledge regurding this thus in last(Misc) */}
						<PrivateRoute exact path='/availability_form' component={Availability_form} />
						<PrivateRoute exact path='/availability_display' component={Availability_display}/>
						<PrivateRoute exact path='/Add_location' component={Add_location} />
            		</Switch>

					{/* This will the reset Password route */}
					<Route path='/reset_password' component={resetPassword} />

					{/* This are the Error Pages for the application */}
					<Route path='/errorCode400' component={error400} />
					<Route path='/errorCode404' component={error404} />

					{/* This will load the Footer To all Components */}
					<Footer />
				</Router>
			</Provider>
		);
	}
}

export default App;