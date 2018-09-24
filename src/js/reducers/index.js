import {ACTION_TYPE} from '../constants/action-types';
import {combineReducers} from 'redux';
import {DEFAULT_STATES} from './default-states';


const articleState = (state = DEFAULT_STATES.ARTICLE_STATE, action) => {
	switch (action.type) {
		case ACTION_TYPE.ADD_ARTICLE:
			return {...state, articles: [...state.articles, action.payload]};

		default:
			return state;
	}
};

const cardState = (state = DEFAULT_STATES.CARD_STATE, action) => {
	switch (action.type) {
		case ACTION_TYPE.ADD_CARD:
			console.log(...state);
			let cards = state.cards.filter((card) => card.login !== action.payload.login);

			return {...state, cards: [...cards, action.payload]};

		default:
			return state;
	}
};

const userState = (state = DEFAULT_STATES.USER_STATE, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOGIN_USER:
			return {...state, ...action.payload, isLoggedIn: true};
		default:
			return state
	}
};


const rootReducer = combineReducers({
	articleState,
	userState,
	cardState,
});

export default rootReducer;

