const initialState = {
  data : [],
  userData:[],
  basketData:[]
}

const AppReducer = ( state = initialState, action) =>{
  switch (action.type) {
    case 'SET_DATA': return{
      ...state,
      data:action.payload
      
    }
    case 'SET_USER_VAL': return{
    
      ...state,
      userData:action.payload
    }
    case 'SET_BASKET_DATA': return{
      ...state,
      basketData:action.payload
    }
    default: return state;
  }
}

export default AppReducer;
