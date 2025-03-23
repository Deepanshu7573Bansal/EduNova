import '../Courses/Courses.css'
import image35 from '../../../images/students/courses/image35.png'
import image36 from '../../../images/students/courses/image36.png'
import image37 from '../../../images/students/courses/image37.png'
import image38 from '../../../images/students/courses/image38.png'
import image39 from '../../../images/students/courses/image39.png'
import image40 from '../../../images/students/courses/image40.png'
import image41 from '../../../images/students/courses/image41.png'
import squareC from '../../../images/students/courses/squareC.png'
function Courses(){
    return(
        <div className="mainCourse">
            <p id='Chead'>Courses</p>
            <div className="CAdd">
                <div class="searchC">
                    <img src={image41} id= "search" alt="" />
                    <div className="textC">
                    Search 
                    </div>
                </div>
                <div className="addC">
                        <p className="addTextC">
                        Add Book 
                        </p>
                </div>
                <div className="addImage">
                    <img src={squareC} alt="" />
                </div>
            </div>
            
            <div className="CBody">
                <div className="CheadBox">
                    <div className="CboxName">
                        All Courses (12)
                    </div>
                    <div className="seeAll">
                        See all
                    </div>
                </div>
                
                <div className="CContainer">
                    <img src={image35} id = "CouImage" alt="" />
                    <div className="Dname">
                        Maths Department
                    </div>
                    <div className="resume">
                        Resume
                    </div>
                </div>

                <div className="CContainer">
                    <img src={image36} id = "CouImage" alt="" />
                    <div className="Dname">
                        Chemistry Department
                    </div>
                    <div className="resume">
                        Resume
                    </div>
                </div>

                <div className="CContainer">
                    <img src={image37} id = "CouImage" alt="" />
                    <div className="Dname">
                        Physics Department
                    </div>
                    <div className="resume">
                        Resume
                    </div>
                </div>

                <div className="CContainer">
                    <img src={image40} id = "CouImage" alt="" />
                    <div className="Dname">
                        Computer Science Department
                    </div>
                    <div className="resume">
                        Resume
                    </div>
                </div>

                <div className="CContainer">
                    <img src={image38} id = "CouImage" alt="" />
                    <div className="Dname">
                        English Department
                    </div>
                    <div className="resume">
                        Resume
                    </div>
                </div>

                <div className="CContainer">
                    <img src={image39} id = "CouImage" alt="" />
                    <div className="Dname">
                        Social science Department
                    </div>
                    <div className="resume">
                        Resume
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Courses;