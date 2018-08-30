import ActionType from '../constants/ActionTypes'

const initialState = {
  team1: '',
  score1: '',
  team2: '',
  score2: ''
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
