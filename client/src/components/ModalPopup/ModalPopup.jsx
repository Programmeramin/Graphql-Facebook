import { LiaTimesSolid } from "react-icons/lia"
import "./ModalPopup.scss"

const ModalPopup = ({hide, title, shortDsc, children}) => {
    return (
        <>
            <div className="modal-popup">
                <div className="modal-popup-container">
                    <div className="modal-popup-header">
                        <div className="header-content">
                            {title && <h2>{title}</h2> }
                            {shortDsc && <p>{shortDsc}</p>}
                            
                        </div>
                        <button onClick={() => hide(false)}><LiaTimesSolid /></button>
                    </div>

                    <div className="modal-popup-content">
                        {children}
                    </div>
                </div>
            </div>
        
        
        </>
    )
}

export default ModalPopup