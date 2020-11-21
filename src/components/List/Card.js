import { Paper, rgbToHex, Tooltip } from '@material-ui/core';
import React from 'react';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { addToBasket } from '../../redux/actions/app-actions';

class Card extends React.Component{

 
    render(){

            const { product } = this.props;
        return(
            <li className=''>
              <Paper className="paper" elevation={1} style={{padding:'10px'}} >
                  <Tooltip title="Добавить в избранное"><BookmarkBorderIcon style={{fontSize:"30px",marginLeft:"170px",marginRight:"auto",cursor:'pointer'}}/></Tooltip>
                <div className="photo-block" style={{backgroundImage:`url(${product.photo})`,marginBottom:"5px"}}>
                </div>
                <Link to={`/product/${product.id}`} style={{fontSize:'15px',color:"black"}}> {product.name}</Link>
                <h6 style={{marginTop:"10px"}}> {product.price}сом/шт</h6>
                <Tooltip title="Добавить"> 
                <button onClick={() => this.props.addToBasket(product)} style={
                  product.status ? {
                    display:"none"
                  }
                  :{
                  display:"block",
                  backgroundColor:"rgb(77,161,21)",
                  borderRadius:"3px",
                  padding:"10px",
                  border:"none",
                  marginTop:"20px",
                  cursor:"pointer",
                  color:"white"
                }
                }>В корзину</button>
                
                </Tooltip>
                <button style={product.status ?
                  {
                  display:"block",
                  backgroundColor:"rgb(77,161,21)",
                  borderRadius:"3px",
                  padding:"10px",
                  border:"none",
                  marginTop:"20px",
                  cursor:"pointer",
                  color:"white"
                }: {
                  display:"none"
                }
                }><Link to="/basket" style={{color:"white"}}>В корзине</Link>
                </button>
              </Paper>
            </li>
        );      
    }   
}

const mapDispatchToProps = (dispath) =>({
  addToBasket:(product) => dispath(addToBasket(product))
})

export default connect(null,mapDispatchToProps)(Card)  