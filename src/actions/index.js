export function addComment(commentObj) {
  return {
    type: `comments/addComment`,
    payload: commentObj,
  };
}

export function delComment(commentId) {
  return {
    type: `comments/delComment`,
    payload: commentId,
  }
}
