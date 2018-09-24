import React, {Component} from 'react';
import {CardList} from './components/github-cards/github-cards';
import Form from './components/forms/user-input';

class App extends Component {

	constructor (props) {
		super(props);
		this.state = window.store.getState().cardState;
	}

	componentWillMount() {
		this.unsubscribeStore = window.store.subscribe(this.handleChange);
	}

	componentWillUnmount () {
		this.unsubscribeStore();
	}
	handleChange = () => {
		this.setState(window.store.getState().cardState);
	};

	addCard = (cardInfo) => {
		window.store.dispatch(window.addCard(cardInfo))
	};

	render() {

		return (
			<div className="App">
				<Form onSubmit={this.addCard}/>
				<CardList cards={this.state.cards}/>
			</div>
		);
	}
}

export default App;
