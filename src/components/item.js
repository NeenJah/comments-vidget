
import { getIsoString } from '../utils.js';

function CommentItem(props) {
  const dateTime = getIsoString(new Date(props.time)),
    timeStr = new Date(props.time).toLocaleString(`ru`),
    { id, onDelBtnClick, author, comment } = props;
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