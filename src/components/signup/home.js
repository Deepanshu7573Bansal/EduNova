import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png"
import background from "../../assets/images/background.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./home.module.css";
function home(){
    return(
            <div className='row'>
            <div className='col-5'>
              <div className={styles.logo}>
              <img src={logo} alt="Logo"/> <h1>EduNova</h1>
              </div>
              <div className="row">
                <div className="col-5">
                <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                <div className={styles.btn1}>
                 Login as Student
                </div>
                </Link>
               
                </div>
                <div className="col">
                    <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                    <div className={styles.btn2}>
                    Login as Teacher
                </div>
                    </Link>
               
                </div>
                </div>
                <br/>
            <div className="row">
                <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                <div className={styles.btn3}>
                    Login as Admin
                </div>
                </Link>
           
            </div>
            <Link to="/signup" >
            <p class="para">Not a member yet? Create account</p>
            </Link>
           
        </div>
        <div className={styles.back}>
            <img src={background} alt="back1" id={styles.back1}/>
        </div>
    </div>  
    )
};

export default home;
