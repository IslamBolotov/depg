import React, { Component } from 'react';
import Login from '../Login/Login';
import './Modal.css'
class Modal extends Component {
  render() {
    return (
      <>
        <div className="modal-main">
          
        </div>
        <div className="modal-form"><Login />
        <div className="modal__cross">X</div>
        </div>
        
      </>
    );
  }
}

export default Modal;