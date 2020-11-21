import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBasketData } from '../../redux/actions/app-actions';
import '../Basket/Basket.css'
import BasketCard from './BasketCard';

class Basket extends Component {

  componentDidMount(){
    this.props.getBasketData();
  }
  render() {
    
    
    
    return (
      

            <table className="table-basket">
                <thead>
                    <tr>
                        <th>№</th>
                        <th style={{padding:"5px"}}>Названия</th>
                        <th>Цена</th>
                        <th style={{textAlign:"center"}}>Количество</th>
                        <th style={{textAlign:"right"}}>Стоимость</th>
                        <th style={{textAlign:"center"}}>Удаление</th>
                    </tr>

                </thead>
                <tbody>
                    {this.props.basketData.map((product,index) => (
                            <BasketCard
                            key = {product.id}
                            product = {product}
                            index = {index}
                            />
                    ))}
                </tbody>
            </table>
    ) 
  }
}
const mapStateToProps = (state) => state.appReducer;

const mapDispatchToProps = () => (dispatch) =>({
  getBasketData:() =>dispatch(getBasketData())
})

export default connect(mapStateToProps,mapDispatchToProps)(Basket);