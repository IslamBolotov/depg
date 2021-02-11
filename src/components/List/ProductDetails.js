import axios from 'axios';
import React, { Component } from 'react';
import cookie from 'react-cookies'

class ProductDetails extends Component {
  state={
    product:{

    }
  }

  componentDidMount = async () => {
    const { data } = await axios.get('http://localhost:8000/products')
    const id = this.props.match.params.id;
    const product = data.filter(a => (a.id === +id))[0]


    this.setState({ product })
  }

  setToCoookie = (a) =>{
    cookie.save(a, a, { path: '/' })
  }

  deleteToCookie = (a) =>{
    cookie.remove(a, { path: '/' })
  }

  render() {

    const product = this.state.product 
    const a = 1
    return (
      <div>
        <img alt="" src={product.photo}></img>
        <button onClick={()=>this.setToCoookie(1)}>set to cookie 1</button>
        <button onClick={()=>this.setToCoookie(2)}>set to cookie 2</button>
        <button onClick={()=>this.deleteToCookie(1)}>delete to cookie 1</button>
        <button onClick={()=>this.deleteToCookie(2)}>delete to cookie 2</button>
      </div>
    );
  }
}

export default ProductDetails;