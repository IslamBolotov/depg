import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import './Modal.css'
class Modal extends Component {

  state = {
    status: false
  }
  
  componentDidMount = () =>{
    const status = this.props.status
    console.log(status);
    this.setState({ status})
  }

  handleCloseModal = () =>{
    this.setState({status: false})
  }

  render() {
    return this.state.status ? (
      <>
        <div className="modal-main">
          
        </div>
        <div className="modal-form"><Login />
        <div>
           <Link to='/'>X</Link>
        </div>
        </div>
        
      </>
    ):null
  }
}

export default Modal;