import React, { useState } from 'react';
import '../Courses/Courses.css';
import image35 from '../../../assets/images/students/courses/image35.png';
import image36 from '../../../assets/images/students/courses/image36.png';
import image37 from '../../../assets/images/students/courses/image37.png';
import image38 from '../../../assets/images/students/courses/image38.png';
import image39 from '../../../assets/images/students/courses/image39.png';
import image40 from '../../../assets/images/students/courses/image40.png';
import image41 from '../../../assets/images/students/courses/image41.png';
import squareC from '../../../assets/images/students/courses/squareC.png';

function Courses() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState('');

    // Sample video IDs (replace with your actual YouTube video IDs)
    const departmentVideos = {
        'Maths Department': 'tqJbGmtPeHk',
        'Chemistry Department': 'PWHsWKMEHzI',
        'Physics Department': 'HEkESd9Gcbk',
        'Computer Science Department': '8mAITcNt710',
        'English Department': '25lG5C7ygW4',
        'Social science Department': 'HEkESd9Gcbk'
    };

    const handleResumeClick = (department) => {
        setCurrentVideo(departmentVideos[department]);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="mainCourse">
            <p id='Chead'>Courses</p>
            <div className="CAdd">
                <div className="searchC">
                    <img src={image41} id="search" alt="" />
                    <div className="textC">
                        Search 
                    </div>
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
                
                {/* Departments */}
                <div className="CContainer">
                    <img src={image35} id="CouImage" alt="" />
                    <div className="Dname">
                        Maths Department
                    </div>
                    <div className="resume" onClick={() => handleResumeClick('Maths Department')}>
                        Resume
                    </div>
                </div>

                <div className="CContainer">
                    <img src={image36} id="CouImage" alt="" />
                    <div className="Dname">
                        Chemistry Department
                    </div>
                    <div className="resume" onClick={() => handleResumeClick('Chemistry Department')}>
                        Resume
                    </div>
                </div>

                <div className="CContainer">
                    <img src={image37} id="CouImage" alt="" />
                    <div className="Dname">
                        Physics Department
                    </div>
                    <div className="resume" onClick={() => handleResumeClick('Physics Department')}>
                        Resume
                    </div>
                </div>

                <div className="CContainer">
                    <img src={image40} id="CouImage" alt="" />
                    <div className="Dname">
                        Computer Science Department
                    </div>
                    <div className="resume" onClick={() => handleResumeClick('Computer Science Department')}>
                        Resume
                    </div>
                </div>

                <div className="CContainer">
                    <img src={image38} id="CouImage" alt="" />
                    <div className="Dname">
                        English Department
                    </div>
                    <div className="resume" onClick={() => handleResumeClick('English Department')}>
                        Resume
                    </div>
                </div>

                <div className="CContainer">
                    <img src={image39} id="CouImage" alt="" />
                    <div className="Dname">
                        Social science Department
                    </div>
                    <div className="resume" onClick={() => handleResumeClick('Social science Department')}>
                        Resume
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={closeModal}>×</button>
                        <div className="video-container">
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${currentVideo}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Courses;