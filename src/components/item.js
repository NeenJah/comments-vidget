
import { getTimeString } from '../utils.js';
/*
class CommentItem extends React.Component {

  render() {
    const dateTime = getTimeString(new Date(this.props.time), true),
          timeStr = new Date(this.props.time).toLocaleString(`ru`),
          {onDelete, author, comment} = this.props;
    return (<article>
      <div>
        <h2>{author}</h2>
        <p>{comment}</p>
        <time dateTime={dateTime}>{timeStr}</time>
      </div>
      <button className="comments__del-btn" onClick={onDelete} type="button">Удалить</button>
    </article>);
  }

}
*/

function CommentItem(props) {
    const dateTime = getTimeString(new Date(props.time), true),
          timeStr = new Date(props.time).toLocaleString(`ru`),
          {id, onDelBtnClick, author, comment} = props;
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