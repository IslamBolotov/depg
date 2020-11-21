import axios from 'axios'

const setListData = (data) => ({
  type:'SET_DATA',
  payload:data
});

export const getListData = (catalog) => async (dispatch) =>{
  const { data } = await axios.get(`http://localhost:8000/products?catalog=${catalog}`)
  dispatch(setListData(data))
}

const setUserData = (userData) =>({
  type:'SET_USER_VAL',
  payload:userData
})

export const getUserData = (value) => (dispatch) =>{
  dispatch(setUserData(value))
}

export const addToBasket = (product) => async (dispatch) =>{
  const newProduct1 = {...product}
  const newProduct2 = {...product}
  newProduct1.status = true
  newProduct1.quantity = 1;
  newProduct2.status = true
  await axios.put(`http://localhost:8000/products/${product.id}`,newProduct2)
  await axios.post(`http://localhost:8000/basket`,newProduct1)
  dispatch(getListData(product.catalog))
}

const setBasketData = (data) =>({
  type:'SET_BASKET_DATA',
  payload:data
})

export const getBasketData = () => async (dispatch) =>{
  const  { data }  = await axios.get(`http://localhost:8000/basket`)
  dispatch(setBasketData(data))
}
