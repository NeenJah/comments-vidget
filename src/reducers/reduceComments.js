export default function reduceComments(state = [], action) {
  switch(action.type) {
    case `comments/addComment`:
      console.log([...state, action.payload]);
      return [...state, action.payload];
    case `comments/delComment`:
      return state.filter(comment => comment.id !== action.payload);
    default:
      return state;
  }
}
