import axios from 'axios';

export const FETCH_PRODUCTS = 'fetch_products';
export const FETCH_PRODUCT = 'fetch_product';
export const ADD_PRODUCTS = 'add_products';
export const DELETE_PRODUCT = 'delete_product';
export const EDIT_PRODUCT = 'edit_product';
export const EDITED_PRODUCT = 'edited_product';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=wes79SPASOV';

export function fetchProducts(){
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	
	return{
		type: FETCH_PRODUCTS,
		payload: request
	}
}

export function createProduct(values, callback){
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
		.then(() => callback());
	
	return{
		type: ADD_PRODUCTS,
		payload: request
	}
}

export function fetchProduct(id){
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return{
		type: FETCH_PRODUCT,
		payload: request
	};
}
export function editProduct(id , callback){
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
	.then(() => callback());
	return{
		type: EDIT_PRODUCT,
		payload: request
	};
}
export function editedProduct(id, callback){
	const request = axios.post(`${ROOT_URL}/posts/${id}${API_KEY}`, values)
	.then(() => callback());
	return{
		type: EDITED_PRODUCT,
		payload: request
	};
}

export function deleteProduct(id, callback){
	const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
	.then(() => callback());

	return{
		type: DELETE_PRODUCT,
		payload: id
	};
}
