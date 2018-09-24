import * as React from 'react';
import * as axios from 'axios';

class Form extends React.Component {

	styles = styles();

	state = {userName: ''};
	handleSubmit = (event) => {
		event.preventDefault();

		axios.get(`https://api.github.com/users/${this.state.userName}`)
			.then(resp => {
				this.props.onSubmit(resp.data);
			})
			.catch(error => {
				console.log(error);
				console.log(error.message);
			});
	};

	render() {
		return (
			<form style={this.styles.form} onSubmit={this.handleSubmit}>
				<input
					value={this.state.userName}
					onChange={event => this.setState({userName: event.target.value})}
					type={'text'} placeholder={'Github username'} required/>

				<button type={'submit'}>Add Card</button>

			</form>
		);
	}
}

const styles = () => ({
	form: {
		margin: 10
	}
});

export default Form
