import { combineReducers } from 'redux';
import ProductReducer from './reducer_product';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  products: ProductReducer,
  form: formReducer
});




export default rootReducer;
