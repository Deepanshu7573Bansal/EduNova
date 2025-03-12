import React from "react";
import logo from "../../assets/images/logo.png"
import background from "../../assets/images/background.png"
import frame from "../../assets/images/Frame.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
function home(){
    return(
        <div class='row'>
            <div class='col-5 vh-1030'>
            <div className="pass-form">
            <div className="logo">
            <img src={logo} alt="Logo"/> EduNova
            </div>
            <div class="row">
                <div class="col-sm">
                <div class="btn1">
                 Login as Student
                </div>
                </div>
                <div class="col-sm">
                <div class="btn2">
                    Login as Teacher
                </div>
                </div>
               
                </div>
                <br/>
            <div class="row">
            <div class="btn3">
                    Login as Admin
                </div>
            </div>
        </div>
            </div>
        <div class="col-5 vh-1030">
            <img src={background} alt="back" />
            <img src={frame} alt="frame" className="overlay"/>
        </div>
        </div>
        
    )
};

export default home;