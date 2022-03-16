
import { getIsoString } from '../utils.js';

function CommentItem({ id, onDelBtnClick, author, comment, time }) {
  const dateTime = getIsoString(new Date(time)),
    timeStr = new Date(time).toLocaleString(`ru`);
  return (<article id={id}>
    <div>
      <h2>{author}</h2>
      <p>{comment}</p>
      <time dateTime={dateTime}>{timeStr}</time>
    </div>
    <button className="comments__del-btn" onClick={onDelBtnClick} type="button">Удалить</button>
  </article>);
}

export { CommentItem };