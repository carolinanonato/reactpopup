import React from "react";
import '../index.css'

const Popup = props => {
    return (
        <div className="popup">
            <div className="popup__box">
                <span className="popup__close-icon" onClick={props.handleClose}><span className="close">
                    X
                </span></span>
                {props.content}
            </div>
        </div>
    );
};

export default Popup;