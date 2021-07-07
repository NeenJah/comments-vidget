
import { getTimeString } from '../utils.js';

class CommentItem extends React.Component {

  render() {
    return <article className="comments__item">
      <div>
        <h3>{this.props.author}</h3>
        <p>{this.props.comment}</p>
        <time dateTime={getTimeString(new Date(this.props.time), true)}>{new Date(this.props.time).toLocaleString(`ru`)}</time>
      </div>
      <button className="comments__del-btn" onClick={this.props.onDelete} type="button">Удалить</button>
    </article>;
  }

}

export { CommentItem };