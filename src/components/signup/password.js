import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png"
import background from "../../assets/images/background.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from  './password.module.css';
function password(){
    return(
        <div className='row'>
            <div className='col-5 vh-1030'>
            <div className={styles.pass}>
            <div className={styles.logo2}>
            <img src={logo} alt="Logo"/> EduNova
            </div>
            <p>Username start with: STU_, TEA_ , AD_</p>
            <form>
               <div class='mb-3 mt-3'>
               <label for="username" class="form-label">Username or mobile number:</label>
               <input type="text" class="form-control" id="username" placeholder="Enter username" name="username"></input>
               </div>

               <div class='mb-3'>
               <label for="pwd" class="form-label">New Password:</label>
               <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"></input>
               </div>

               <div class='mb-3'>
               <label for="pwd" class="form-label">Confirm Password:</label>
               <input type="password" class="form-control" id="pwd" placeholder="Confirm password" name="pwd"></input>
               </div>


               <div className={styles.btn}>
                 Change Password
                </div>
                 <Link to="/signup">
                            <p>Not a member yet? Create account</p>
                            </Link>
            </form>
        </div>
            </div>
        <div className={styles.back}>
            <img src={background} alt="back4" id={styles.back4} />
        </div>
        </div>
        
    )
};

export default password;