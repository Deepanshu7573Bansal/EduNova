import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png"
import background from "../../assets/images/background.png"
import frame from "../../assets/images/Frame.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/signup.css';
function signup(){
    return(
        <div class='row'>
            <div class='col-5 vh-1030'>
            <div className="signup-form">
            <div className="logo">
            <img src={logo} alt="Logo"/> EduNova
            </div>
            <p>Register your details</p>
            <form>
               <div class="mb -3 mt-3">
                  <label for="role" class="form-label">Select role:</label>
                  <select class="form-control" name="role" id="role">
                    <option>Select</option>
                    <option>Student</option>
                    <option>Teacher/Instructor</option>
                    <option>Admin</option>
                  </select>
               </div>
               <div class='mb-3 mt-3'>
               <label for="username" class="form-label">Username:</label>
               <input type="text" class="form-control" id="username" placeholder="Enter username" name="username"></input>
               </div>

               <div class='mb-3'>
               <label for="pwd" class="form-label">Password:</label>
               <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"></input>
               </div>

               <div class='mb-3'>
               <label for="pwd" class="form-label">Confirm Password:</label>
               <input type="password" class="form-control" id="pwd" placeholder="Confirm password" name="pwd"></input>
               </div>

               <div class='mb-3'>
               <label for="number" class="form-label">Mobile Number:</label>
               <input type="text" class="form-control" id="num" placeholder="Mobile Number" name="number"></input>
               </div>

               <div class="btn">
               Signup
                </div>
                <Link to="/login">
                <p>Login?</p>
                </Link>
              
            </form>
        </div>
            </div>
        <div class="col-5 vh-1030">
            <img src={background} alt="back" />
            <img src={frame} alt="frame" className="overlay"/>
        </div>
        </div>
        
    )
};

export default signup;