import { constants } from '../constants.js';

class AddCommentForm extends React.Component {

  render() {
    return <form
      className={constants.commentForm.CLASS}
      action={constants.commentForm.ACTION}
      method={constants.commentForm.METHOD}
      name={constants.commentForm.NAME}
      onSubmit={this.props.onSubmit}
    >
      <label htmlFor={constants.commentForm.AUTHOR_NAME}>{constants.commentForm.AUTHOR_LABEL}</label>
      <input type="text" name={constants.commentForm.AUTHOR_NAME} />
      <label htmlFor={constants.commentForm.COMMENT_NAME}>{constants.commentForm.COMMENT_LABEL}</label>
      <textarea name={constants.commentForm.COMMENT_NAME}></textarea>
      <button type="submit">{constants.commentForm.SUBMIT_TEXT}</button>
    </form>;
  }

}

export { AddCommentForm };