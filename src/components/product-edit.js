import React, {Component} from 'react';
import { Field, reduxForm} from "redux-form";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchProduct, deleteProduct, editProduct} from '../actions';


class productEdit extends Component{
	componentDidMount(){

		const {id} = this.props.match.params;
		 this.props.fetchProduct(id);
		

	}
	renderField(field){
		const { meta: {touched, error}} = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;



		return(
				<div className={className}>

					<label>{field.label}</label>
					<input className="form-control"
						type="text"
						
						{...field.input}
						value={field.setSomeValue}					
					/>
					<div className="text-help">
						{ touched ? error : ''}
					</div>
				</div>
			)
	}

	renderTextareaField(field){
		const { meta: {touched, error}} = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;


		return(
			<div className={className}>
					<label>{field.label}</label>
					<textarea className="form-control"
						type="text"

						{...field.input}
						value={field.setSomeValue}
					/>
					<div className="text-help">
						{ touched ? error : ''}
					</div>
				</div>
		)
	}

	onSubmit(values){
		this.props.editedProduct(values, () =>{
			this.props.history.push('/');
		});
	}
	render(){

		const { handleSubmit } = this.props;
		const { product } = this.props;

		if(!product){
			return(
					<div>Loading...</div>
				)
		}
		return(
				<div>
					<h2>Edit product!</h2>
					<h3>{product.title}</h3>
					<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
						<Field 
							label="Product id"

							name="id"
							setSomeValue={product.id}
							component={this.renderField}
						/>
						<Field 
							label="Product name"
							name="title"
							setSomeValue={product.title}
							component={this.renderField}
						/>
						<Field 
							label="Product category"
							name="categories"
							setSomeValue={product.categories}
							component={this.renderField}
						/>
						<Field 
							label="Product description"
							name="content"
							setSomeValue={product.content}
							component={this.renderTextareaField}
						/>
						<button type="submit" className="btn btn-primary">Submit!</button>

						<div className="text-xs-right">
							<Link className="btn btn-danger" to="/">
								Cancel!
							</Link>
						</div>
					</form>
				</div>
			);
	}
}


function mapStateToProps({products}, ownProps){
	return { product: products[ownProps.match.params.id] };
}

function validate(values){
	const errors = {};

	if(!values.title){
		errors.title = 'Enter a product name!'
	}

	if(!values.categories){
		errors.categories = 'Enter a category!'
	}

	if(!values.content){
		errors.content = 'Enter a description!'
	}

	return errors;
}

export default reduxForm({
	validate,
	form: 'ProductNewForm'
})(
  connect(mapStateToProps, {fetchProduct, editProduct})(productEdit)
  );
