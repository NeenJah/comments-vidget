
import { CommentItem } from './item.js';

class CommentsList extends React.Component {

  render() {
    const {onDelItem} = this.props,
          list = this.props.comments.map(comment => {
      return (<li key={comment.key} className="comments__item">
        <CommentItem author={comment.author} comment={comment.comment} time={comment.time} onDelete={onDelItem} />
      </li>);
    });
    return <ul className="comments__list">{list}</ul>;
  }

}

export { CommentsList };