import React from "react";

const Modal = (props) => {
  console.log(props);
  return (
    <>
      {props.showModal && (
        <div id="alertOverlay" className="alert-overlay">
          <div className="alert-box">
            <span className="alert-close" onClick={props.closeAlert}>
              &times;
            </span>
            <div className="alert-content">{props.message}</div>
            <div className="alert-buttons">
              <button
                className="alert-button alert-button-yes"
                onClick={props.onClick}
              >
                YES
              </button>
              <button
                className="alert-button alert-button-no"
                onClick={props.onClose}
              >
                NO
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
