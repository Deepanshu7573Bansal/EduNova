import React from'react'
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Search from "./../../../assets/images/Search.png"
import image1 from '../../../assets/images/dashboard/image1.png'
import image2 from '../../../assets/images/dashboard/image2.png'
import image3 from '../../../assets/images/dashboard/image3.png'
import image4 from '../../../assets/images/dashboard/image4.png'
import Profile from "../../students/Profile/Profile1";
function Dashboard(){
    return (
        <div className="heading">
        Dashboard
            <div class="search">
                <img src={Search} id= "search" alt="" />
                <div className="text">
                Search student and teacher
                </div>
            </div>
            <div class="teachers">
                <div className="head">
                    Teachers
                </div>
                <div className="profile1">
                    <img src={image1} id='image'/>
                    Shyam Nithin
                    <a href="">View Profile</a>
                </div>
                <div className="profile1">
                    <img src={image2} id='image' />
                    Nivin Kumar
                    <a href="">View Profile</a>
                </div>
                <div className="profile1">
                    <img src={image3} id='image'/>
                    Nivetha Dinesh
                    <a href="">View Profile</a>
                </div>
                <div className="profile1">
                    <img src={image4} id='image'/>
                    Rudhra Shankar
                    <a href="">View Profile</a>
                </div>
            </div> 
            
            <div class="student">
                <div className="head">
                    Students
                </div>
               <div className="profile1">
                    <img src={image1} id='image'/>
                    Shyam Nithin
                    <a href="">View Profile</a>
                </div>
                <div className="profile1">
                    <img src={image2} id='image' />
                    Nivin Kumar
                    <a href="">View Profile</a>
                </div>
                <div className="profile1">
                    <img src={image3} id='image'/>
                    Nivetha Dinesh
                    <a href="">View Profile</a>
                </div>
                <div className="profile1">
                    <img src={image4} id='image'/>
                    Rudhra Shankar
                    <a href="">View Profile</a>
                </div>
            </div>   
            <div className="comp">
                <Profile></Profile>
                </div> 
        </div>
    )
}

export default Dashboard;