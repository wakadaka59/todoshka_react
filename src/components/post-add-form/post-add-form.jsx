import React, {Component} from "react";
import './post-add-form.css';

export default class PostAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
		}
		this.onValueChange = this.onValueChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onValueChange(e) {
		this.setState({
			text: e.target.value
		})
	}
	onSubmit(e) {
		e.preventDefault();
		this.props.onAdd(this.state.text);
		this.setState({
			text: ''
		})
	}
 	render() {
		return (
			<form 
				onSubmit={this.onSubmit} 
				className="bottom-panel d-flex" 
				action="">
				<input
					onChange={this.onValueChange}
					value={this.state.text}
					className="form-control new-post-label"
					type="text"
					placeholder="Что надо сделать?"
				/>
				<button className="btn btn-outline-secondary" type="submit">
					Добавить
				</button>
			</form>
		);
	}
} 
	