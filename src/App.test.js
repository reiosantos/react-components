import React from 'react';
import {ACTIONS} from './js/actions';
import {ACTION_TYPE} from './js/constants/action-types';

describe('actions', () => {
  it('should create an action to add an article', () => {
    const payload = 'Finish docs';
    const expectedAction = {
      type: ACTION_TYPE.ADD_ARTICLE,
      payload
    };
    expect(ACTIONS.ADD_ARTICLE(payload)).toEqual(expectedAction)
  })
});
