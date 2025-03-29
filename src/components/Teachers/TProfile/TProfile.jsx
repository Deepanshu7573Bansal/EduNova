import React from'react'
import './TProfile.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import image from '../../../assets/images/teachers/TProfile/image.png'
function TProfile(){
    return(
        <div className="Tprofile">
            <div className="IProName">
                <div className="contentflex1">
                <img src={image} id='Tprofileimg'/>
                </div>
                <div className="contentflex">
                    <p className="Tname">Sweaksha Gupta</p>
                    <p className="Tdest">Teacher</p>
                </div>
            </div>
            <div className="Tusername">
                Username
            </div>
            <div className="Tmobile">
                Mobile Number
            </div>
            <div className="Tabout">
                About
            </div>
        </div>
    )
}

export default TProfile;