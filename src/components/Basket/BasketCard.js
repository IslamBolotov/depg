import React, { Component } from 'react';

class BasketCard extends Component {
  render() {
    console.log(this.props);
    const { id, status, price,name, catalog, photo,quantity } = this.props.product
    return (
        <tr>
          <td style={{textAlign:'center'}}>{this.props.index+1}</td>
          <td style={{textAlign:'center'}}>{name}</td>
          <td style={{textAlign:'center'}}>{price}сом/шт</td>
          <td style={{textAlign:'center'}}>{quantity}</td>
          <td style={{textAlign:'center'}}>{quantity*price}</td>
          <td style={{textAlign:'center'}}>{id}</td>
        </tr>
    );
  }
}

export default BasketCard;