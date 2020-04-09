/**
 * @file Actions for redux. 
 * @use it will hit the API of the Application and dispatch the actions to reducer.
 * @author Krutin Trivedi <krutin@dal.ca>
 */

 import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  GET_SUCCESS
} from "./types";
import { toast } from "react-toastify";

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/employee/add", userData)
    .then(res => {
      if(res.data.length > 0) {
        console.log(res.data);
        if(res.data === "Oops! Email id is already taken.") {
          dispatch({
            type: GET_ERRORS,
            payload: res.data
          })
        } else {
          // // TODO: show this in elegant way so user can understand.
          // re-direct to login on successful register
          dispatch({
            type: GET_SUCCESS,
            payload: res.data
          })
        }
      }
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/employee/login", userData)
    .then(res => {
      //* Save to localStorage
      console.log("User fetched...");

      // Set token to localStorage
      console.log("trying to store it in the local_Storage...");
      const { token } = res.data;
      localStorage.setItem("jwtToken", JSON.stringify(token));
      console.log("User Stored...");
      
      // Set token to Auth header
      console.log("Setting token to Auth Header...");
      setAuthToken(token);
      console.log("Token set...");

      // Decode token to get user data
      console.log("Decoding the Token...");
      const decoded = jwt_decode(token);
      console.log("Decoded...");

      // Set current user
      console.log("Setting the Current User...");
      dispatch(setCurrentUser(decoded));
      console.log("Current User Set...");
    })
    .catch(err => {
      
      //console.log("ERROR -----> ", err);
      console.log("ERROR.response -----> ", err.response);
      //console.log("ERROR.response.data -----> ", err.response.data);
      console.log("ERROR.data -----> ", err.data);

      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    });
};

// Set logged in user
export const setCurrentUser = decoded => {
  console.log("called the setCurrentUser");
  console.log("called the setCurrentUser -> decoded ----> ", decoded);
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

// Remove user
export const removeUser = (userId) => dispatch => {
  
  axios.delete("/employee/delete" + userId)
    .then(res => {
      console.log(res);
      toast.success("You are DELETED..!!", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    })
    .catch(err => {
      console.log(err);
      toast.error("Something Went wrong", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    })
  
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

// Update User
export const updateUser = (userData, history) => dispatch => {
  console.log("in the actions....");
  axios
    .post("/employee/update", userData)
    .then(res => {
      if(res.data.length > 0) {
        console.log(res.data);
        if(res.data.includes("Error:")) {
          dispatch({
            type: GET_ERRORS,
            payload: res.data
          })
        } else {
          // // TODO: show this in elegant way so user can understand.
          // re-direct to previous page on successful update
          history.goBack();
        }
      }
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Forgot User Password
export const forgotUserPassword = (userEmail, history) => dispatch => {
  console.log("in the forgot password actions....");
  console.log("userEmail --->", userEmail);
  
  axios
    .post("/employee/forgot", userEmail)
    .then(res => {
      if(res.data.length > 0) {
        console.log(res.data);
        if(res.data.includes("Error:")) {
          dispatch({
            type: GET_ERRORS,
            payload: res.data
          })
        } else {
          // // TODO: show this in elegant way so user can understand.
          // make a toast for user to know that the email is sent
          toast.success("Email has been sent to your mail ID", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
          // re-direct to previous page on successful email sent
          history.goBack();
        }
      }
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Reset User Password
export const resetUserPassword = (userPass, history) => dispatch => {
  console.log("in the forgot password actions....");
  axios
    .post("/employee/reset", userPass)
    .then(res => {
      if(res.data.length > 0) {
        console.log(res.data);
        if(res.data.includes("Error:")) {
          dispatch({
            type: GET_ERRORS,
            payload: res.data
          })
        } else {
          // // TODO: show this in elegant way so user can understand.
          // make a toast for user to know that the email is sent
          toast.success("Password changed successfully", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
          // re-direct to previous page on successful email sent
          history.push("/login");
        }
      }
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// User Request
export const userRequest = (userPass, history) => dispatch => {
  axios
    .post("/employee/request_quote", userPass)
    .then(res => {
      if(res.data.length > 0) {
        console.log(res.data);
        if(res.data.includes("Error:")) {
          dispatch({
            type: GET_ERRORS,
            payload: res.data
          })
        } else {
          // // TODO: show this in elegant way so user can understand.
          // make a toast for user to know that the email is sent
          toast.success("Request received.! we will get back to you sortly..", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
          // re-direct to previous page on successful email sent
          history.push("/");
        }
      }
    })
    .catch(err => {
        console.log("err", err)
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      }
    );
};


