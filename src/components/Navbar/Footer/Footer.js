import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import inst from './picture/instagram.png'
import facebook from './picture/facebook.png'
import telegram from './picture/telegram.png'
import whatsapp from './picture/whatsapp.png'

class  Footer extends Component {

    sss = (a) => {
      // if(a==1){
      //   document.location.href = "https://web.telegram.org/#/im?p=@bolotovislam";
      // }
      // else if(a==2){
      //   document.location.href = "https://web.telegram.org/#/im?p=@bolotovislam";
      // }
      // else if(a==3){
      //   document.location.href = "https://web.telegram.org/#/im?p=@bolotovislam";
      // }
      // else{
      //   document.location.href = "https://web.telegram.org/#/im?p=@bolotovislam";
      // }
    }

    render() {
      return (
        <footer className="footer">
          
          <ul className="footer-link-main">Контакты
            <div></div>
            <li>+(996) 702 32 33 75</li>
            <li>+(996) 502 32 33 75</li>
            <li>+(996) 555 32 33 75</li>
            <li>+(996) 222 32 33 75</li>
            <div className="social-sets">
              <li><img onClick={this.sss} src={whatsapp} className="img-inst" alt=""></img></li>
              <li><a href="https://www.facebook.com/profile.php?id=100015231723132"><img onClick={this.sss} src={facebook} className="img-inst" alt=""></img></a></li>
              <li><a href="https://web.telegram.org/#/im?p=@bolotovislam"><img onClick={this.sss} src={telegram} className="img-inst"  alt=""></img></a></li>
              <li><a href="https://www.instagram.com/islam.bolotov/"><img onClick={this.sss} src={inst} className="img-inst" alt=""></img></a></li>
            
            </div>
          </ul>

          <ul className="footer-link-main">Каталог товаров
            <div></div>
            <li><Link to="/all" className="footer-link-elements">Все товары</Link></li>
            <li><Link to="/proza" className="footer-link-elements">Молочные</Link></li>
            <li><Link to="/priklyucheniya" className="footer-link-elements">Напитки</Link></li>
            <li><Link to="/poeziya" className="footer-link-elements">Мучные</Link></li>
            <li><Link to="/proza" className="footer-link-elements">Молочные</Link></li>
            <li><Link to="/priklyucheniya" className="footer-link-elements">Напитки</Link></li>
            <li><Link to="/poeziya" className="footer-link-elements">Мучные</Link></li>
            
          </ul>
          
          <ul className="footer-link-main">Быстрый переход
          <div></div>
            <li><Link to="/" className="footer-link-elements">Главная</Link></li>
            <li><Link to="/about" className="footer-link-elements">О компании</Link></li>
            <li><Link to="/contact" className="footer-link-elements">Контакты</Link></li>
            <li><Link to="/basket" className="footer-link-elements">Корзина</Link></li>
          </ul>
        </footer>
      );
  }
  
}

export default Footer;