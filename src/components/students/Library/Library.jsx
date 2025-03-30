import '../Library/Library.css'
import image47 from '../../../assets/images/students/library/image47.png'
import image48 from '../../../assets/images/students/library/image48.png'
import image49 from '../../../assets/images/students/library/image49.png'
import image50 from '../../../assets/images/students/library/image50.png'
import image51 from '../../../assets/images/students/library/image51.png'
import image52 from '../../../assets/images/students/library/image52.png'
import image53 from '../../../assets/images/students/library/image53.png'
import image54 from '../../../assets/images/students/library/image54.png'
import image55 from '../../../assets/images/students/library/image55.png'
import square from '../../../assets/images/students/library/Square.png'
import Download from '../../../assets/images/students/library/Download.png'
function Library(){
    return(
        <div className="mainLibrary">
            <p id='Libhead'>Library</p>
            <div className="SAdd">
                <div class="searchLib">
                    <img src={image55} id= "search" alt="" />
                    <div className="textLib">
                    Search 
                    </div>
                </div>
                {/* <div className="add">
                        <p className="addText">
                        Add Book 
                        </p>
                </div> */}
                {/* <div className="addImage">
                    <img src={square} alt="" />
                </div> */}
            </div>
            
            <div className="LibBody">
                <div className="book">
                    <img src={image47} id = "bookImage" alt="" />
                    <div className="Dimage">
                        {/* <p className="Bookname">Chemistry</p> */}
                        <img src={Download} id="down" alt="" /> 
                    </div>
                </div>
                <div className="book">
                    <img src={image48} id = "bookImage" alt="" />
                    <div className="Dimage">
                        {/* <p className="Bookname">Chemistry</p> */}
                        <img src={Download} id="down" alt="" /> 
                    </div>
                </div>
                <div className="book">
                    <img src={image49} id = "bookImage" alt="" />
                    <div className="Dimage">
                        {/* <p className="Bookname">Mathematics</p> */}
                        <img src={Download} id="down" alt="" /> 
                    </div>
                </div>
                <div className="book">
                    <img src={image50} id = "bookImage" alt="" />
                    <div className="Dimage">
                        {/* <p className="Bookname">Mathematics</p> */}
                        <img src={Download} id="down" alt="" /> 
                    </div>
                </div>
                <div className="book">
                    <img src={image51} id = "bookImage" alt="" />
                    <div className="Dimage">
                        {/* <p className="Bookname">Physics</p> */}
                        <img src={Download} id="down" alt="" /> 
                    </div>
                </div>
                <div className="book">
                    <img src={image52} id = "bookImage" alt="" />
                    <div className="Dimage">
                        {/* <p className="Bookname">Physics</p> */}
                        <img src={Download} id="down" alt="" /> 
                    </div>
                </div>
                <div className="book">
                    <img src={image53} id = "bookImage" alt="" />
                    <div className="Dimage">
                        {/* <p className="Bookname">English</p> */}
                        <img src={Download} id="down" alt="" /> 
                    </div>
                </div>
                <div className="book">
                    <img src={image54} id = "bookImage" alt="" />
                    <div className="Dimage">
                        {/* <p className="Bookname">English</p> */}
                        <img src={Download} id="down" alt="" /> 
                    </div>
                </div>
                <div className="book">
                    <img src={image53} id = "bookImage" alt="" />
                    <div className="Dimage">
                        {/* <p className="Bookname">English</p> */}
                        <img src={Download} id="down" alt="" /> 
                    </div>
                </div>
                <div className="book">
                    <img src={image52} id = "bookImage" alt="" />
                    <div className="Dimage">
                        {/* <p className="Bookname">Physics</p> */}
                        <img src={Download} id="down" alt="" /> 
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Library;