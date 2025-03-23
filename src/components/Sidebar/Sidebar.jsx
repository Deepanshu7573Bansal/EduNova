import React from'react'
import './Sidebar.css'
import Group from '../../assets/images/Group.png'
import Vector from '../../assets/images/Vector.png'
import Calender from '../../assets/images/Calendar.png'
import Library from '../../assets/images/Library.png'
import Join from '../../assets/images/Join.png'
import Classroom from '../../assets/images/Classroom.png'
import Messages from '../../assets/images/Messages.png'
import Logout from '../../assets/images/Logout.png'
import Courses from '../../assets/images/Courses.png'
import 'bootstrap/dist/css/bootstrap.min.css'
function Sidebar() {
    return(
        <div className="Sidebar">
            <div class="row"> 
                <div class="col-10">
                    <div class="logo">
                        <img src={Group} id='logo' />
                        EduNova
                    </div>
                </div>
                <div className="dashborad">
                    <img src={Vector} id='vector'/>
                    Dashboard
                </div>
                <div className="Calender">
                    <img src={Calender} id='calender'/>
                    Calender
                </div>
                <div className="Library">
                    <img src={Library} id='library'/>
                    Library
                </div>
                <div className="Classroom">
                    <img src={Classroom} id='classroom'/>
                    Classroom
                </div>
                <div className="Courses">
                    <img src={Courses} id='course'/>
                    Courses
                </div>
                <div className="Join">
                    <img src={Join} id='join'/>
                    Integration
                </div>
                <div className="Messages">
                    <img src={Messages} id='message'/>
                    Messages
                </div>
                <div className="Logout">
                    <img src={Logout} id='logout'/>
                    Log out
                </div>
            </div>
        </div>
    )
}

export default Sidebar