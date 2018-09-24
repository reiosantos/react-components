
const ARTICLE_STATE = {
	articles: [
		{'name': 'article one', 'date': new Date()},
		{'name': 'article two', 'date': new Date()}
	]
};

const CARD_STATE = {
	cards: [
		// {name: 'O\'relly Santos', company: 'Github', avatar_url: 'https://avatars.githubusercontent.com/u/8445?v=3'},
		// {name: 'Nakigudde', company: 'Facebook', avatar_url: 'https://avatars.githubusercontent.com/u/8425?v=3'},
		// {name: 'Ben Alpert', company: 'Facebook', avatar_url: 'https://avatars.githubusercontent.com/u/6820?v=3'},
		// {
		// 	name: 'Reiosantos',
		// 	company: 'Reiosantos',
		// 	avatar_url: 'https://avatars1.githubusercontent.com/u/23090105?v=4'
		// }
	]
};

const USER_STATE = {
	username: 'your-name',
	email: 'user@site.com',
	loggedIn: false
};

export const DEFAULT_STATES = {
	ARTICLE_STATE,
	USER_STATE,
	CARD_STATE
};
