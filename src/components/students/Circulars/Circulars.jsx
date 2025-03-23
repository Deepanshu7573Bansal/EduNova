import '../Circulars/Circulars.css'
import image18 from '../../../images/students/circulars/image18.png' 
import image19 from '../../../images/students/circulars/image19.png'
import image22 from '../../../images/students/circulars/image23.png'
import image23 from '../../../images/students/circulars/image23.png'
function Circulars(){
    return(
        <div className="CircularMain">    
            <p id='CirHead'>Circulars</p>
            <div className="CirBody">
                <div className="CirContainer">
                    <img src={image18} id="CirImage" alt="" />
                    <p id='CirName'>
                        Google Doc
                    </p>
                </div>
                <div className="CirContainer">
                    <img src={image23} id="CirImage" alt="" />
                    <p id='CirName'>
                        Excel
                    </p>
                </div>
                <div className="CirContainer">
                    <img src={image19} id="CirImage" alt="" />
                    <p id='CirName'>
                        Word
                    </p>
                </div>
                <div className="CirContainer">
                    <img src={image22} id="CirImage" alt="" />
                    <p id='CirName'>
                        Power point
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Circulars;