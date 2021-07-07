
class AddCommentForm extends React.Component {

  render() {
    return (<form
      className="comments__form"
      name="commentsForm"
      onSubmit={this.props.onSubmit}
    >
      <label>Ваше имя:
        <input type="text" name="author" required />
      </label>
      <label>Комментарий:
        <textarea name="comment" required></textarea>
      </label>
      <button type="submit">Оставить комментарий</button>
    </form>);
  }

}

export { AddCommentForm };