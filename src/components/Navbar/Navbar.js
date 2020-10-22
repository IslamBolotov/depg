
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import { Tooltip } from '@material-ui/core';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    fontSize:'13px',
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);


class Navbar extends Component {
  render() {
    return (
    <>
      <div className="menu">
      <nav className="navbar navbar-toggleable-md">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          <Link className="navbar-brand" to="/">ДЕПГ</Link>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  <button  className="btn btn-primary">Главная</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <button type="button" className="btn btn-primary">О Компании</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <button type="button"  className="btn btn-primary">Контакты</button>
                </Link>
              </li>
              <li  className="nav-item">
                <Link style={{paddingTop:"0px"}} className="nav-link" to="/catalog"></Link>
                  <div className="dropdown">

                    <Link to="" className="btn btn-secondary dropdown-toggle"  type="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                      Каталог
                    </Link>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <Link className="dropdown-item" to="/all"> Все товары</Link>
                      <Link className="dropdown-item" to="/proza"> Мясо, птица, рыба</Link>
                      <Link className="dropdown-item" to="/priklyucheniya"> Напитки</Link>
                      <Link className="dropdown-item" to="/poeziya"> Хлеб, хлебобулочные изделия</Link>
                      <Link className="dropdown-item" to="/poeziya"> Бакалея</Link>
                      <Link className="dropdown-item" to="/poeziya"> Чай, кофе, какао, кисель</Link>
                      <Link className="dropdown-item" to="/poeziya"> Диетическая и диабетическая продукция</Link>
                      <Link className="dropdown-item" to="/poeziya"> Кондитерские изделия</Link>
                      <Link className="dropdown-item" to="/poeziya"> Кулинария</Link>
                      <Link className="dropdown-item" to="/poeziya"> Колбасы, сосиски, деликатесы</Link>
                      <Link className="dropdown-item" to="/poeziya"> Замороженные полуфабрикаты</Link>
                      <Link className="dropdown-item" to="/poeziya"> Молочные продукты, яйца</Link>
                      <Link className="dropdown-item" to="/poeziya"> Для детей</Link>
                      <Link className="dropdown-item" to="/poeziya"> Уборка, стирка</Link>
                      <Link className="dropdown-item" to="/poeziya"> Все для дома</Link>
                      <Link className="dropdown-item" to="/poeziya"> Все для пикника</Link>
                      <Link className="dropdown-item" to="/poeziya"> Автомобильные аксессуары</Link>
                      <Link className="dropdown-item" to="/poeziya"> Одежда и обувь</Link>
                      <Link className="dropdown-item" to="/poeziya"> Товары для спорта</Link>
                      <Link className="dropdown-item" to="/poeziya"> Сувениры</Link>


                    </div>
                  </div>
                
              </li>
              <li className=" nav-basket">
                <Tooltip title="Избранное">
                  <IconButton aria-label="cart">
                    <CollectionsBookmarkIcon fontSize="large"/>
                  </IconButton>
                </Tooltip>
              </li>
                <li className=" nav-basket-1">
              <Tooltip title="Корзина">
                <IconButton aria-label="cart" className="bbas">
                  <StyledBadge badgeContent={4} color="secondary">
                    <ShoppingCartIcon fontSize="large" />
                  </StyledBadge>
                </IconButton>
              </Tooltip>
              </li>
             
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
</>
    );
  }
}

export default Navbar;
