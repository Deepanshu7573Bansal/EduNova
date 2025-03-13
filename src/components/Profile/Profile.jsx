import React from'react'
import '../styles/Profile.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import image from '../../assets/images/profile/image.png'
function Profile(){
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

export default Profile;