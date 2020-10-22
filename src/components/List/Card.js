import React from 'react';


class Card extends React.Component{
    
    
    render(){

            const { product } = this.props;

        return(
            <li className=''>
              <div className="photo-block" style={{backgroundImage:`url(${product.photo})`,marginBottom:"5px"}}></div>
                <div style={{fontSize:'15px'}}> {product.name}</div>
                <h6> {product.price}сом/шт</h6>
            </li>
        );      
    }   
}

export default Card