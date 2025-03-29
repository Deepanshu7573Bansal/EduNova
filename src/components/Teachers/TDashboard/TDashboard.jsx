import React from'react'
import './TDashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Search from '../../../assets/images/teachers/TDasshboard/Search.png'
import image1 from '../../../assets/images/teachers/TDasshboard/image1.png'
import image2 from '../../../assets/images/teachers/TDasshboard/image2.png'
import image3 from '../../../assets/images/teachers/TDasshboard/image3.png'
import image4 from '../../../assets/images/teachers/TDasshboard/image4.png'
function TDashboard(){
    return (
        <div className="Theading">
        Dashboard
            <div class="Tsearch">
                <img src={Search} id= "Tsearch" alt="" />
                <div className="Ttext">
                Search student and teacher
                </div>
            </div>
            
            <div class="Tstudent">
                <div className="Thead">
                    Students
                </div>
               <div className="Tprofile1">
                    <img src={image1} id='Timage'/>
                    Shyam Nithin
                    <a href="">View Profile</a>
                </div>
                <div className="Tprofile1">
                    <img src={image2} id='Timage' />
                    Nivin Kumar
                    <a href="">View Profile</a>
                </div>
                <div className="Tprofile1">
                    <img src={image3} id='Timage'/>
                    Nivetha Dinesh
                    <a href="">View Profile</a>
                </div>
            </div> 

            <div className="About">
                <p className="AboutText">
                    About EduNova
                </p>
            </div> 
        </div>
    )
}

export default TDashboard;