
class AddCommentForm extends React.Component {

  render() {
    const {onSubmit} = this.props;
    return (<form
      className="comments__form"
      name="commentsForm"
      onSubmit={onSubmit}
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