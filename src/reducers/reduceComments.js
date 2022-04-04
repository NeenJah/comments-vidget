import { localStorageState } from "../store";

export default function reduceComments(state = [], action) {
  switch(action.type) {
    case `comments/addComment`:
      state = [...state, action.payload];
      localStorageState.set(state);
      return state;
    case `comments/delComment`:
      state = state.filter(comment => comment.id !== action.payload);
      localStorageState.set(state);
      return state;
    default:
      return state;
  }
}
