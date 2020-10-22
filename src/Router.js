import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Navbar/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SimpleContainer from './Container';


const Router = () =>{

    
  return(
      <BrowserRouter>
      <SimpleContainer />
        
       <Footer   />
      </BrowserRouter>
  )
}

export default Router;