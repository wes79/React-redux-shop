import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class ProductsIndex extends Component{
	componentDidMount(){
		this.props.fetchProducts();
	}

	renderList(){
		return _.map(this.props.products, product =>{
			return(
				<div className="col-md-4" key={product.id}>
					<li className="list-group-item" key={product.id}>	
						<Link to={`/product/${product.id}`}>					
						{product.title}
						<img src="/images/dummy-cat.png" />
						{product.content}
						</Link>
					</li>
					</div>
				);

		});
	};

	render(){
		return(

				<div>
					<h1>Product list</h1>
					<div className="text-xs-right">
						<Link className="btn btn-primary" to="/product-new">
							Add product!
						</Link>
					</div>
					
      				<ul className="list-group">
						{this.renderList()}
					</ul>
				</div>
			);
	}
}
function mapStateToProps(state){
	return{products: state.products};
}

export default connect(mapStateToProps, {fetchProducts})(ProductsIndex);