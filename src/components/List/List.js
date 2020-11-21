import React from 'react';
import Card from './Card';
import { Container, debounce, Typography } from '@material-ui/core';
import { goToTop } from 'react-scrollable-anchor';
import { connect } from 'react-redux';
import { getListData } from '../../redux/actions/app-actions';
import backPicture from '../images/1.png'


class List extends React.Component{
    componentDidMount(){
        goToTop() 
        this.props.getListData(this.props.catalog)
        
    }

    render(){
        const { data, addToBasket, addToFavourities} = this.props
        return(
            <>
            <Container fixed style={{}}>
                <Typography component="div"  style={{ backgroundColor: '#cfe8fc', height: 'auto',padding:'10px' }}>
                    <ul className="listing">
                        {data.map((product) =>
                      
                        (
                            <Card 
                                key = {product.id}
                                product = {product}
                            />
                        ))}
                    </ul>
                </Typography>
            </Container>
            </>
        )
    }
}

const mapStateToProps = (state) =>state.appReducer;

const mapDispatchToProps = (dispatch) => ({
    getListData: (catalog) =>dispatch(getListData(catalog)),
    addToBasket: () =>{},
    addToFavourities: () =>{}
})

export default connect(mapStateToProps,mapDispatchToProps)(List);