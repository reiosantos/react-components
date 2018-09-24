import {ACTION_TYPE} from '../constants/action-types';

const ADD_ARTICLE = article => ({
	type: ACTION_TYPE.ADD_ARTICLE,
	payload: article
});

const ADD_CARD = card => ({
	type: ACTION_TYPE.ADD_CARD,
	payload: card
});

const LOGIN_USE = user => ({
	type: ACTION_TYPE.LOGIN_USER,
	payload: user
});

export const ACTIONS = {
	ADD_ARTICLE,
	LOGIN_USE,
	ADD_CARD
};
