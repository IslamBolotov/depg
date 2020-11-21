import React  from 'react';
import { Link } from 'react-router-dom';


import inst from './picture/instagram.png'
import facebook from './picture/facebook.png'
import telegram from './picture/telegram.png'
import whatsapp from './picture/whatsapp.png'
import first from './picture/6.png'



const  Footer = () =>  {
    
      return (
        <footer className="footer">
          
          <ul className="footer-link-main">Контакты
            <div></div>
            <li>+(996) 702 32 33 75</li>
            <li>+(996) 502 32 33 75</li>
            <li>+(996) 555 32 33 75</li>
            <li>+(996) 222 32 33 75</li>
            <div className="social-sets">
              <li><img  src={whatsapp} className="img-inst" alt=""></img></li>
              <li><a href="https://www.facebook.com/profile.php?id=100015231723132"><img  src={facebook} className="img-inst" alt=""></img></a></li>
              <li><a href="https://web.telegram.org/#/im?p=@bolotovislam"><img  src={telegram} className="img-inst"  alt=""></img></a></li>
              <li><a href="https://www.instagram.com/islam.bolotov/"><img  src={inst} className="img-inst" alt=""></img></a></li>
            
            </div>
            
          </ul>

          <ul className="footer-link-main">Каталог товаров
            <div></div>
            {/* <li><Link to="/all" className="footer-link-elements">Все товары</Link></li> */}
            <li><Link className="footer-link-elements" to="/meat"> Мясо, птица, рыба</Link></li>
            <li><Link className="footer-link-elements" to="/drink"> Напитки</Link></li>
            <li><Link className="footer-link-elements" to="/bread"> Хлеб, хлебобулочные изделия</Link></li>
            <li><Link className="footer-link-elements" to="/bakalea"> Бакалея</Link></li>
            <li><Link className="footer-link-elements" to="/tea"> Чай, кофе, какао, кисель</Link></li>
            <li><Link className="footer-link-elements" to="/diet"> Диетическая и диабетическая продукция</Link></li>
            <li><Link className="footer-link-elements" to="/confectionery"> Кондитерские изделия</Link></li>
            <li><Link className="footer-link-elements" to="/cooking"> Кулинария</Link></li>
            <li><Link className="footer-link-elements" to="/sausages"> Колбасы, сосиски, деликатесы</Link></li>
            <li><Link className="footer-link-elements" to="/frozen"> Замороженные полуфабрикаты</Link></li>
            <li><Link className="footer-link-elements" to="/milk"> Молочные продукты, яйца</Link></li>
            <li><Link className="footer-link-elements" to="/forbaby"> Для детей</Link></li>
            <li><Link className="footer-link-elements" to="/cleaning"> Уборка, стирка</Link></li>
            <li><Link className="footer-link-elements" to="/forhome"> Все для дома</Link></li>
            <li><Link className="footer-link-elements" to="/forpicknic"> Все для пикника</Link></li>
            <li><Link className="footer-link-elements" to="/accessories"> Автомобильные аксессуары</Link></li>
            <li><Link className="footer-link-elements" to="/clothes"> Одежда и обувь</Link></li>
            <li><Link className="footer-link-elements" to="/sport"> Товары для спорта</Link></li>
            <li><Link className="footer-link-elements" to="/souvenirs"> Сувениры</Link></li>
  
          </ul>
          
          <ul className="footer-link-main">Быстрый переход
          <div></div>
            <li><Link to="/" className="footer-link-elements">Главная</Link></li>
            <li><Link to="/about" className="footer-link-elements">О компании</Link></li>
            <li><Link to="/contact" className="footer-link-elements">Контакты</Link></li>
            <li><Link to="/basket" className="footer-link-elements">Корзина</Link></li>
          </ul>
        </footer>
      )
}

export default Footer;