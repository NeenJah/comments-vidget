`use strict`;

const constants = {
  CONTAINER_CLASS: `comments__container`,
  LIST_CLASS: `comments__list`,
  ITEM_CLASS: `comments__item`,
  DEL_BTN_CLASS: `comments__del-btn`,
  DEL_BTN_TEXT: `Удалить`,
  commentForm: {
    CLASS: `comments__form`,
    ACTION: `#`,
    METHOD: `GET`,
    NAME: `commentsForm`,
    AUTHOR_NAME: `author`,
    AUTHOR_LABEL: `Ваше имя:`,
    COMMENT_NAME: `comment`,
    COMMENT_LABEL: `Комментарий:`,
    SUBMIT_TEXT: `Оставить комментарий`,
  }
};


const root = document.querySelector(`.js-comments-vidget`),
      storage = new StorageArray(`comments`);
      
//-----------------------

class CommentsVidget extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      comments: props.comments,
    };
    
    this.onAddCommentFormSubmit = this.onAddCommentFormSubmit.bind(this);
    this.onDelCommentBtnClick = this.onDelCommentBtnClick.bind(this);
  }
  
  onAddCommentFormSubmit(event) {
    event.preventDefault();
    
    const commentObj = {
      key: Date.now(),
      author: event.target[constants.commentForm.AUTHOR_NAME].value,
      comment: event.target[constants.commentForm.COMMENT_NAME].value,
      time: new Date(),
    }
    
    this.setState((state, props) => {
      state.comments.push(commentObj);
      storage.set(state.comments);
      return {
        comments: state.comments,
      };
    });
  }
  
  onDelCommentBtnClick(event) {
    if(!event.target.matches(`.${constants.DEL_BTN_CLASS}`)) return;
    
    const parent = event.target.closest(`.${constants.ITEM_CLASS}`),
          index = getNodeIndex(parent);
          
    this.setState((state, props) => {
      state.comments.splice(index, 1);
      storage.set(state.comments);
      return {
        comments: state.comments,
      }
    });
  }

  render() {
    return <div className={constants.CONTAINER_CLASS} onSubmit={this.onAddCommentFormSubmit} onClick={this.onDelCommentBtnClick}>
      <CommentsList comments={this.state.comments} />
      {this.props.children}
    </div>;
  }

}

//-----------------------

class CommentsList extends React.Component {

  render() {
    const list = this.props.comments.map(comment => {
      return <CommentItem key={comment.key} author={comment.author} comment={comment.comment} time={comment.time}/>
    });
    return <ul className={constants.LIST_CLASS}>{list}</ul>;
  }

}

//-----------------------

class CommentItem extends React.Component {

  componentWillUnmount() {
    alert(`deleted`);
  }

  render() {
    return <li className={constants.ITEM_CLASS}>
      <div>
        <h3>{this.props.author}</h3>
        <p>{this.props.comment}</p>
        <time dateTime={getTimeString(new Date(this.props.time), true)}>{new Date(this.props.time).toLocaleString(`ru`)}</time>
     </div>
     <button className={constants.DEL_BTN_CLASS}>{constants.DEL_BTN_TEXT}</button>
    </li>;
  }

}

//-----------------------

class AddCommentForm extends React.Component {

  render() {
    return <form className={constants.commentForm.CLASS} action={constants.commentForm.ACTION} method={constants.commentForm.METHOD} name={constants.commentForm.NAME}>
        <label htmlFor={constants.commentForm.AUTHOR_NAME}>{constants.commentForm.AUTHOR_LABEL}</label>
        <input type="text" name={constants.commentForm.AUTHOR_NAME} />
        <label htmlFor={constants.commentForm.COMMENT_NAME}>{constants.commentForm.COMMENT_LABEL}</label>
        <textarea name={constants.commentForm.COMMENT_NAME}></textarea>
        <button type="submit">{constants.commentForm.SUBMIT_TEXT}</button>
      </form>;
  }

}

//-----------------------

ReactDOM.render(
  <CommentsVidget comments={storage.get()}>
    <AddCommentForm />
  </CommentsVidget>,
  root
);