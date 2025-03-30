import '../Circulars/Circulars.css'
import image18 from '../../../assets/images/students/circulars/image18.png' 
import image19 from '../../../assets/images/students/circulars/image19.png'
import image22 from '../../../assets/images/students/circulars/image22.png'
import image23 from '../../../assets/images/students/circulars/image23.png'
function Circulars(){
    return(
        <div className="CircularMain">    
            <p id='CirHead'>Circulars</p>
            <div className="CirBody">
                <div className="CirContainer">
                    <img src={image18} id="CirImage" alt="" />
                    Google Doc
                </div>
                <div className="CirContainer">
                    <img src={image23} id="CirImage" alt="" />
                    Excel
                </div>
                <div className="CirContainer">
                    <img src={image19} id="CirImage" alt="" />
                    Word
                </div>
                <div className="CirContainer">
                    <img src={image22} id="CirImage" alt="" />
                    Powerpoint
                </div>
            </div>
        </div>
    )
}
export default Circulars;