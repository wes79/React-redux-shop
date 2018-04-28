import React, { Component } from 'react';
import {connect} from 'react-redux';


class ProductList extends Component{
	renderList(){
		return this.props.products.map((product) =>{
			return(
			
					<li className="list-group-item col-md-4" key={product.title}>						
						{product.title}
						<img src={product.src} alt="Product image"/>
						{product.price} $
					</li>
				);

		});
	};



	render(){
		return(
				<ul className="list-group">
					{this.renderList()}
				</ul>
			)

		}
}

function mapStateToProps(state){
	return{
		products: state.products
	};
}

export default connect(mapStateToProps)(ProductList);