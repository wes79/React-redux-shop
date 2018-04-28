import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProduct, deleteProduct, editProduct} from '../actions';
import {Link} from 'react-router-dom';

class productDescription extends Component{
	componentDidMount(){

		const {id} = this.props.match.params;
		 this.props.fetchProduct(id);
		

	}
	onDeleteClick(){
		const {id} = this.props.match.params;
		this.props.deleteProduct(id, () => {
			this.props.history.push('/');
		});
	}
	onEditClick(){
		const {id} = this.props.match.params;
		this.props.editProduct(id, () => {
			this.props.history.push(`/product-edit/${id}`);
		});
	}
	render(){

		const { product } = this.props;
		if(!product){
			return(
					<div>Loading...</div>
				)
		}
		return(
				<div>
					<h1>Product description</h1>
					<h3>{product.title}</h3>
					<img src="/images/dummy-cat.png" />
					<h5>{product.categories}</h5>
					<p>{product.content}</p>

					<Link className="btn btn-primary" to="/">Back to home</Link>

					<button
						className="btn btn-primary"
						onClick={this.onEditClick.bind(this)}
						>
						Edit product
					</button>

					<button
						className="btn btn-danger pull-xs-right"
						onClick={this.onDeleteClick.bind(this)}
						>
						Delete product
					</button>
				</div>
			);
	}
}

function mapStateToProps({products}, ownProps){
	return { product: products[ownProps.match.params.id] };
}
export default connect(mapStateToProps, {fetchProduct, deleteProduct, editProduct}) (productDescription);