import ActionType from '../constants/ActionTypes'

const initialState = {
  email: '',
  username: '',
  password: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case ActionType.USER_GOAL:
    //   return {...state, goal: action.goal}
    default:
      return state
  }
}

export default reducer
