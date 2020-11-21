import React, { Component } from 'react';
import '../../App.css'
import Login from '../Login/Login';

class Home extends Component {
  render() {
    return (
      <>
      {/* <Login /> */}
      <div className="home">
        <div width="300px"></div>
        <div style={{marginTop:"50px"}}>
          <h2 style={{color:"blue"}} className="main-text">Все,что нужно </h2>
          <h2 className="main-text">Не выходя</h2>
          <h2 className="main-text">Из дома </h2>
        </div>
         
        <img style={{width:"700px",position:"relative"}} alt="" src="https://habrastorage.org/files/835/267/1e9/8352671e9b9644b292497eab6002a01f.jpg">
    
        </img>


       
      </div>
      
      </>
    );
  }
}

export default Home;