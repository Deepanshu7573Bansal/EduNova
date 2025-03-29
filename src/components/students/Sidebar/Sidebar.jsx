import React from'react'
import "./Sidebar.module.css";
import {Link} from "react-router-dom";
import Group from '../../../assets/images/students/Group.png'
import Vector from '../../../assets/images/students/Vector.png'
import Calender from '../../../assets/images/students/Calendar.png'
import Library from '../../../assets/images/students/Library.png'
import Join from '../../../assets/images/students/Join.png'
import Classroom from '../../../assets/images/students/Classroom.png'
import Messages from '../../../assets/images/students/Messages.png'
import Logout from '../../../assets/images/students/Logout.png'
import Courses from '../../../assets/images/students/Courses.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "./Sidebar.module.css";
function Sidebar() {
    return(
        <div className={styles.Sidebar}>
            <div className={styles.row}> 
                <div class="col-10">
                    <div className={styles.logo}>
                        <img src={Group} id={styles.heading} />
                        <p id='head'>EduNova</p> 
                    </div>
                </div>
                <Link to="/student/dashboard">
                <div className="dashborad">
                    <img src={Vector} id='vector'/>
                    Dashboard
                </div>
                </Link>
               
                <Link to="/student/calendar">
                <div className="Calender">
                    <img src={Calender} id='calender'/>
                    Calender
                </div>
                </Link>
               
               <Link to="/student/library">
               <div className="Library">
                    <img src={Library} id='library'/>
                    Library
                </div>
               </Link>
                
                <Link to="/student/classroom">
                <div className="Classroom">
                    <img src={Classroom} id='classroom'/>
                    Classroom
                </div>
                </Link>
                

                <Link to="/student/courses">
                <div className="Courses">
                    <img src={Courses} id='course'/>
                    Courses
                </div>
                </Link>
                
                <Link to="/student/circulars">
                <div className="Join">
                    <img src={Join} id='join'/>
                    Integration
                </div>
                </Link>
               

               <Link to="/student/messages">
               <div className="Messages">
                    <img src={Messages} id='message'/>
                    Messages
                </div>
               </Link>
               
                <div className="Logout">
                    <img src={Logout} id='logout'/>
                    Log out
                </div>
            </div>
        </div>
    )
}

export default Sidebar;