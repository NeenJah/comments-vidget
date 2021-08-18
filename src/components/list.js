
import { CommentItem } from './item.js';
/*
class CommentsList extends React.Component {

  render() {
    const {onDelBtnClick} = this.props,
          list = this.props.comments.map(comment => {
      return (<li id={comment.id} className="comments__item">
        <CommentItem author={comment.author} comment={comment.comment} time={comment.time} onDelete={onDelBtnClick} />
      </li>);
    });
    return <ul className="comments__list">{list}</ul>;
  }

}
*/

function CommentsList(props) {
  const {onDelBtnClick} = props,
        listItems = props.comments.map(({id, author, comment, time}) => {
                 return (<li key={id} className="comments__item">
                    <CommentItem id={id} author={author} comment={comment} time={time} onDelBtnClick={onDelBtnClick} />
                 </li>);
               });
  return <ul className="comments__list">{listItems}</ul>;
}

export { CommentsList };