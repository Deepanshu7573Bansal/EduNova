import React from'react'
import './TSidebar.css'
import Group from '../../../assets/images/teachers/Tsidebar/Group.png'
import Vector from '../../../assets/images/teachers/Tsidebar/Vector.png'
import Calender from '../../../assets/images/teachers/Tsidebar/Calendar.png'
import Library from '../../../assets/images/teachers/Tsidebar/Library.png'
import Join from '../../../assets/images/teachers/Tsidebar/Join.png'
import Classroom from '../../../assets/images/teachers/Tsidebar/Classroom.png'
import Messages from '../../../assets/images/teachers/Tsidebar/Messages.png'
import Logout from '../../../assets/images/teachers/Tsidebar/Logout.png'
import Courses from '../../../assets/images/teachers/Tsidebar/Courses.png'
import Task from '../../../assets/images/teachers/Tsidebar/Task.png'
import Attendance from '../../../assets/images/teachers/Tsidebar/Attendance.png'
import 'bootstrap/dist/css/bootstrap.min.css'
function TSidebar() {
    return(
        <div className="TSidebar">
            <div class="Trow"> 
                <div class="Tcol-10">
                    <div class="Tlogo">
                        <img src={Group} id='Theading' />
                        <p id='Thead'>EduNova</p> 
                    </div>
                </div>
                <div className="Tdashborad">
                    <img src={Vector} id='Tvector'/>
                    Dashboard
                </div>
                <div className="TCalender">
                    <img src={Calender} id='Tcalender'/>
                    Calender
                </div>
                <div className="TLibrary">
                    <img src={Library} id='Tlibrary'/>
                    Library
                </div>
                <div className="TClassroom">
                    <img src={Classroom} id='Tclassroom'/>
                    Classroom
                </div>
                <div className="TCourses">
                    <img src={Courses} id='Tcourse'/>
                    Courses
                </div>
                <div className="TJoin">
                    <img src={Join} id='Tjoin'/>
                    Integration
                </div>
                <div className="assignment">
                    <img src={Task} alt="" />
                    Assignments
                </div>
                <div className="attendance">
                    <img src={Attendance} alt="" />
                    Attendance
                </div>
                <div className="TMessages">
                    <img src={Messages} id='Tmessage'/>
                    Messages
                </div>
                <div className="TLogout">
                    <img src={Logout} id='Tlogout'/>
                    Log out
                </div>
            </div>
        </div>
    )
}

export default TSidebar;