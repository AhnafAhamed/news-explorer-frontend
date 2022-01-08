import "./Popup.css";

function Popup({children}) {
    return (
        <div className="popup">
            <div className="popup__container">
                {children}
                <button className="popup__close-button"></button>
            </div>
        </div>
    )
}

export default Popup;