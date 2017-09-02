import types from './action-types';

const initialState = {
  prompt: 'def'
};

export default function prompts(state = initialState, action = {}) {
  switch (action.type) {
  case types.GET_PROMPTS:
    return {
      ...state
    };

  case types.GET_PROMPTS_SUCCESS:
    //console.log("action.result", action.result);
    return {
      ...state,
      prompt: action.result
    };

  case types.GET_PROMPTS_FAIL:
    return {
      ...state
    };

  default:
    return state;
  }
}

export function getPrompts() {
  return {
    types: [
      types.GET_PROMPTS,
      types.GET_PROMPTS_SUCCESS,
      types.GET_PROMPTS_FAIL
    ]

    //promise: () => db().ref('/one/').once('value').then((snapshot) => {
    //var data = snapshot.val();
    //console.log("Got data", data);
    //return data;
    //}).catch((err) => console.log("ERR", err)),
  };
}
