import axios from 'axios';
import React, { Component } from 'react';

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
    console.log(this.state);
  }

  render() {

    const product = this.state.product 

    return (
      <div>
        <img alt="" src={product.photo}></img>
      </div>
    );
  }
}

export default ProductDetails;