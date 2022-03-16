
class AddCommentForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      author: ``,
      comment: ``,
    };

    this.onFieldChange = this.onFieldChange.bind(this);
  }

  onFieldChange(event) {
    this.setState(() => {
      return {
        [event.target.name]: event.target.value,
      }
    })
  }

  render() {
    const { onSubmit } = this.props;
    
    return (<form
      className="comments__form"
      name="commentsForm"
      onSubmit={onSubmit}
      onChange={this.onFieldChange}
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