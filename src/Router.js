import  List  from './components/List/List'
import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import SimpleContainer from './Container';
import  Home  from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ProductDetails from './components/List/ProductDetails';
import Basket from './components/Basket/Basket';
import  Modal  from './components/Modal/Modal';


const Router = () =>{

    
  return(
      <BrowserRouter>
      <SimpleContainer />

      <Route exact  path="/" component = {Home}/>
      <Route path="/product/:id" component={ProductDetails} />
      <Route   path="/basket" component= {Basket} />
      <Route   path="/signin" component= {Modal} />
      <Route   path="/meat" component = {()=><List catalog={'meat'}/>} />
      <Route   path="/drink" component = {()=><List catalog={'drink'}/>} />
      <Route   path="/bread" component = {()=><List catalog={'bread'}/>} />
      <Route   path="/bakalea" component = {()=><List catalog={'bakalea'}/>} />
       <Footer />
      </BrowserRouter>
  )
}

export default Router;