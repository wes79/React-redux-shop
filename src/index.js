import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter, Route ,Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';

import ProductsIndex from './components/products-index';
import ProductNew from './components/product-new';
import productDescription from './components/product-description';
import productEdit from './components/product-edit';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
	    	<Switch>
	    		<Route path="/product-edit/:id" component={productEdit} />
	    		<Route path="/product/:id" component={productDescription} />
	    		<Route path="/product-new" component={ProductNew} />
	    		<Route path="/" component={ProductsIndex} />
	    	</Switch>
    	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
