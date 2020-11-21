import { combineReducers } from 'redux'
import AppReducer from './app-reducer'
import { reducer as formReducer} from 'redux-form'


const rootReducer = combineReducers({ 
  appReducer: AppReducer,
  form: formReducer
});


export default rootReducer;