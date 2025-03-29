import React from'react'
import './Profile1.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import image from '../../../assets/images/students/profile/image.png'
function Profile1(){
    return(
        <div className="profile">
            <img src={image} id='profileimg'/>
            <div className="username">
                Username
            </div>
            <div className="mobile">
                Mobile Number
            </div>
            <div className="about">
                About
            </div>
        </div>
    )
}

export default Profile1;