"use strict";

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
    SUBMIT_TEXT: `Оставить комментарий`
  }
};

const root = document.querySelector(`.js-comments-vidget`),
      storage = new StorageArray(`comments`); //-----------------------

class CommentsVidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
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
      time: new Date()
    };
    this.setState((state, props) => {
      state.comments.push(commentObj);
      storage.set(state.comments);
      return {
        comments: state.comments
      };
    });
  }

  onDelCommentBtnClick(event) {
    if (!event.target.matches(`.${constants.DEL_BTN_CLASS}`)) return;
    const parent = event.target.closest(`.${constants.ITEM_CLASS}`),
          index = getNodeIndex(parent);
    this.setState((state, props) => {
      state.comments.splice(index, 1);
      storage.set(state.comments);
      return {
        comments: state.comments
      };
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: constants.CONTAINER_CLASS,
      onSubmit: this.onAddCommentFormSubmit,
      onClick: this.onDelCommentBtnClick
    }, /*#__PURE__*/React.createElement(CommentsList, {
      comments: this.state.comments
    }), this.props.children);
  }

} //-----------------------


class CommentsList extends React.Component {
  render() {
    const list = this.props.comments.map(comment => {
      return /*#__PURE__*/React.createElement(CommentItem, {
        key: comment.key,
        author: comment.author,
        comment: comment.comment,
        time: comment.time
      });
    });
    return /*#__PURE__*/React.createElement("ul", {
      className: constants.LIST_CLASS
    }, list);
  }

} //-----------------------


class CommentItem extends React.Component {
  componentWillUnmount() {
    alert(`deleted`);
  }

  render() {
    return /*#__PURE__*/React.createElement("li", {
      className: constants.ITEM_CLASS
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, this.props.author), /*#__PURE__*/React.createElement("p", null, this.props.comment), /*#__PURE__*/React.createElement("time", {
      dateTime: getTimeString(this.props.time, true)
    }, this.props.time.toLocaleString(`ru`))), /*#__PURE__*/React.createElement("button", {
      className: constants.DEL_BTN_CLASS
    }, constants.DEL_BTN_TEXT));
  }

} //-----------------------


class AddCommentForm extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("form", {
      className: constants.commentForm.CLASS,
      action: constants.commentForm.ACTION,
      method: constants.commentForm.METHOD,
      name: constants.commentForm.NAME
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: constants.commentForm.AUTHOR_NAME
    }, constants.commentForm.AUTHOR_LABEL), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: constants.commentForm.AUTHOR_NAME
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: constants.commentForm.COMMENT_NAME
    }, constants.commentForm.COMMENT_LABEL), /*#__PURE__*/React.createElement("textarea", {
      name: constants.commentForm.COMMENT_NAME
    }), /*#__PURE__*/React.createElement("button", {
      type: "submit"
    }, constants.commentForm.SUBMIT_TEXT));
  }

} //-----------------------


ReactDOM.render( /*#__PURE__*/React.createElement(CommentsVidget, {
  comments: storage.get()
}, /*#__PURE__*/React.createElement(AddCommentForm, null)), root);