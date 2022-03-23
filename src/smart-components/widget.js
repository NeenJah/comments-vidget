import React from 'react';
import CommentsList from '../components/list.js';
import AddCommentForm from './form.js';
import { v4 as uuidv4 } from 'uuid';
import '../css/widget.css';
import { connect } from 'react-redux';
import { addComment, delComment } from '../actions/index.js';

class CommentsWidget extends React.Component {

  constructor(props) {
    super(props);

    this.onAddCommentFormSubmit = this.onAddCommentFormSubmit.bind(this);
    this.onDelCommentBtnClick = this.onDelCommentBtnClick.bind(this);
  }

  onAddCommentFormSubmit(event) {
    event.preventDefault();

    const { addComment } = this.props;

    const commentObj = {
      id: uuidv4(),  // создаём идентификатор для элемента
      author: event.target.author.value,
      comment: event.target.comment.value,
      time: new Date(),
    };

    addComment(commentObj);

    event.target.reset(); // сбрасываем форму
  }

  onDelCommentBtnClick(event) {
    const { delComment } = this.props;

    // получаем индекс комментария
    const delId = event.target.closest(`article`).id;

    // убираем комментарий
    delComment(delId);
  }

  render() {
    const { comments } = this.props;

    return (<div className="comments__container">
      <CommentsList comments={comments} onDelBtnClick={this.onDelCommentBtnClick} />
      <AddCommentForm onSubmit={this.onAddCommentFormSubmit} />
    </div>);
  }

}

function mapStateToProps(state) {
  return { comments: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: commentObj => dispatch(addComment(commentObj)),
    delComment: commentId => dispatch(delComment(commentId)),
  };
}

CommentsWidget = connect(mapStateToProps, mapDispatchToProps)(CommentsWidget);

export default CommentsWidget;
