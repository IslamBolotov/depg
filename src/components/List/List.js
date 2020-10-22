import React from 'react';
import Card from './Card';
import axios from 'axios'


class List extends React.Component{
    state ={
        data:[],
    }

    componentDidMount(){
        this.fetchContact();
        console.log('didmount');
        
    }

    componentDidUpdate(){
        this.fetchContact();
    }

    componentWillUnmount(){
        console.log('демонтирование');
        
    }

    fetchContact = async () => {
        
        const { data } = await axios.get('http://localhost:8000/products')
        if(JSON.stringify(this.state) === JSON.stringify({ data })) return;
        this.setState({ data })
    }

    
    

  

    render(){
        return(
            <>
                <ul className="listing">
                    {this.state.data.map((product) => (
                        <Card 
                            key = {product.id}
                            product = {product}
                        />
                    ))}
                </ul>
            </>
        )
    }
}

export default List;