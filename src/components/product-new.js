import React, { Component } from 'react';
import { Field, reduxForm} from "redux-form";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProduct } from '../actions';


class ProductNew extends Component{
	renderField(field){
		const { meta: {touched, error}} = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return(
				<div className={className}>
					<label>{field.label}</label>
					<input className="form-control"
						type="text"
						{...field.input}						
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
					/>
					<div className="text-help">
						{ touched ? error : ''}
					</div>
				</div>
		)
	}

	onSubmit(values){
		this.props.createProduct(values, () =>{
			this.props.history.push('/');
		});
	}

	render(){
		const {handleSubmit} = this.props;
		return(
				<div>
					<h2>New product!</h2>
					
					<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
						<Field 
							label="Product name"
							name="title"
							component={this.renderField}
						/>
						<Field 
							label="Product category"
							name="categories"
							component={this.renderField}
						/>
						<Field 
							label="Product description"
							name="content"
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
  connect(null, {createProduct})(ProductNew)
  );