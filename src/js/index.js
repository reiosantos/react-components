import store from './store/index'
import {ACTIONS} from './actions';

window.store = store;
window.addArticle = ACTIONS.ADD_ARTICLE;
window.loginUser = ACTIONS.LOGIN_USE;
window.addCard = ACTIONS.ADD_CARD;
