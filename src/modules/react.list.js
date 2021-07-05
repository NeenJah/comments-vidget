import { constants } from '../constants.js';
import { CommentItem } from './react.item.js';

class CommentsList extends React.Component {

  render() {
    const list = this.props.comments.map(comment => {
      return <CommentItem key={comment.key} author={comment.author} comment={comment.comment} time={comment.time} onDelete={this.props.onDelItem} />
    });
    return <ul className={constants.LIST_CLASS}>{list}</ul>;
  }

}

export { CommentsList };