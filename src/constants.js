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

export {constants};