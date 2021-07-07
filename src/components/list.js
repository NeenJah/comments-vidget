
import { CommentItem } from './item.js';

class CommentsList extends React.Component {

  render() {
    const list = this.props.comments.map(comment => {
      return (<li key={comment.key}>
        <CommentItem author={comment.author} comment={comment.comment} time={comment.time} onDelete={this.props.onDelItem} />
      </li>);
    });
    return <ul className="comments__list">{list}</ul>;
  }

}

export { CommentsList };