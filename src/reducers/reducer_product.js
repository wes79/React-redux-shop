import _ from 'lodash';
import { FETCH_PRODUCTS, FETCH_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT }from '../actions';


export default function(state = {}, action){
	switch (action.type){

		case FETCH_PRODUCT:
		return{...state, [action.payload.data.id]: action.payload.data};

		case FETCH_PRODUCTS:
		return _.mapKeys(action.payload.data, 'id');

		case EDIT_PRODUCT:
		return{...state, [action.payload.data.id]: action.payload.data};
		
		case DELETE_PRODUCT:
		return _.omit(state, action.payload);

		default: 
		return state;
	}
}

/*export default function(){

	return[
		{id:"0",title: 'product-1',src:'/images/dummy-cat.png' , price: '15', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
		{id:"1",title: 'product-2',src:'/images/dummy-cat.png', price: '25', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
		{id:"2",title: 'product-3',src:'/images/dummy-cat.png', price: '5', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
		{id:"3",title: 'product-4',src:'/images/dummy-cat.png', price: '18', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
		{id:"4",title: 'product-5',src:'/images/dummy-cat.png', price: '23', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
		{id:"5",title: 'product-6',src:'/images/dummy-cat.png', price: '16', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'}
	]
}*/