
import { CommentItem } from './item.js';

function CommentsList({ onDelBtnClick, comments }) {
  const listItems = comments.map(({ id, author, comment, time }) => {
    return (<li key={id} className="comments__item">
      <CommentItem id={id} author={author} comment={comment} time={time} onDelBtnClick={onDelBtnClick} />
    </li>);
  });
  return <ul className="comments__list">{listItems}</ul>;
}

export { CommentsList };