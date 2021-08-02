
import { getTimeString } from '../utils.js';

class CommentItem extends React.Component {

  render() {
    const dateTime = getTimeString(new Date(this.props.time), true),
          timeStr = new Date(this.props.time).toLocaleString(`ru`),
          {onDelete, author} = this.props;
    return (<article className="comments__item">
      <div>
        <h3>{author}</h3>
        <p>{this.props.comment}</p>
        <time dateTime={dateTime}>{timeStr}</time>
      </div>
      <button className="comments__del-btn" onClick={onDelete} type="button">Удалить</button>
    </article>);
  }

}

export { CommentItem };