import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png"
import background from "../../assets/images/background.png"
import frame from "../../assets/images/Frame.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from  './login.module.css';
function login(){
    return(
        <div className='row'>
            <div className='col-5'>
            <div className={styles.login}>
            <div className={styles.logo1}>
            <img src={logo} alt="Logo"/> <h1>EduNova</h1>
            </div>
            <p>Username start with: STU_, TEA_ , AD_</p>
            <form>
               <div class='mb-3 mt-3'>
               <label for="username" class="form-label">Username:</label>
               <input type="text" class="form-control" id="username" placeholder="Enter username" name="username"></input>
               </div>

               <div class='mb-3'>
               <label for="pwd" class="form-label">Password:</label>
               <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"></input>
               </div>


               <div className={styles.btn}>
                 Login
                </div>
                <Link to="/password">
                <p id="pass">Forgot Password?</p>
                </Link>
               
            </form>
        </div>
            </div>
        <div class="col-5">
            <img src={background} alt="back" id={styles.back3} />
            <img src={frame} alt="frame" className={styles.overlay3}/>
        </div>
        </div>
        
    )
};

export default login;