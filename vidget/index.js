/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/constants.js":
/*!**********************************!*\
  !*** ./src/modules/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"constants\": () => (/* binding */ constants)\n/* harmony export */ });\n\n\nvar constants = {\n  CONTAINER_CLASS: \"comments__container\",\n  LIST_CLASS: \"comments__list\",\n  ITEM_CLASS: \"comments__item\",\n  DEL_BTN_CLASS: \"comments__del-btn\",\n  DEL_BTN_TEXT: \"\\u0423\\u0434\\u0430\\u043B\\u0438\\u0442\\u044C\",\n  commentForm: {\n    CLASS: \"comments__form\",\n    ACTION: \"#\",\n    METHOD: \"GET\",\n    NAME: \"commentsForm\",\n    AUTHOR_NAME: \"author\",\n    AUTHOR_LABEL: \"\\u0412\\u0430\\u0448\\u0435 \\u0438\\u043C\\u044F:\",\n    COMMENT_NAME: \"comment\",\n    COMMENT_LABEL: \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439:\",\n    SUBMIT_TEXT: \"\\u041E\\u0441\\u0442\\u0430\\u0432\\u0438\\u0442\\u044C \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\"\n  }\n};\n\n\n//# sourceURL=webpack://comments-vidget/./src/modules/constants.js?");

/***/ }),

/***/ "./src/modules/getNodeIndex.js":
/*!*************************************!*\
  !*** ./src/modules/getNodeIndex.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNodeIndex\": () => (/* binding */ getNodeIndex)\n/* harmony export */ });\nfunction getNodeIndex(node) {\n  return Array.from(node.parentNode.children).indexOf(node);\n}\n\n//# sourceURL=webpack://comments-vidget/./src/modules/getNodeIndex.js?");

/***/ }),

/***/ "./src/modules/getTimeString.js":
/*!**************************************!*\
  !*** ./src/modules/getTimeString.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTimeString\": () => (/* binding */ getTimeString)\n/* harmony export */ });\nfunction getTimeString(date, isNeedTime) {\n  var year = date.getFullYear(),\n      month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,\n      day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),\n      hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),\n      minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();\n  return !isNeedTime ? \"\".concat(year, \"-\").concat(month, \"-\").concat(day) : \"\".concat(year, \"-\").concat(month, \"-\").concat(day, \" \").concat(hours, \":\").concat(minutes);\n}\n\n//# sourceURL=webpack://comments-vidget/./src/modules/getTimeString.js?");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _react_vidget_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react.vidget.js */ \"./src/modules/react.vidget.js\");\n/* harmony import */ var _storageArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageArray.js */ \"./src/modules/storageArray.js\");\n\n\n\n\nvar root = document.querySelector(\".js-comments-vidget\"),\n    storage = new _storageArray_js__WEBPACK_IMPORTED_MODULE_1__.StorageArray(\"comments\");\nReactDOM.render( /*#__PURE__*/React.createElement(_react_vidget_js__WEBPACK_IMPORTED_MODULE_0__.CommentsVidget, {\n  comments: storage\n}), root);\n\n//# sourceURL=webpack://comments-vidget/./src/modules/index.js?");

/***/ }),

/***/ "./src/modules/react.form.js":
/*!***********************************!*\
  !*** ./src/modules/react.form.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddCommentForm\": () => (/* binding */ AddCommentForm)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./src/modules/constants.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar AddCommentForm = /*#__PURE__*/function (_React$Component) {\n  _inherits(AddCommentForm, _React$Component);\n\n  var _super = _createSuper(AddCommentForm);\n\n  function AddCommentForm() {\n    _classCallCheck(this, AddCommentForm);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(AddCommentForm, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"form\", {\n        className: _constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.commentForm.CLASS,\n        action: _constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.commentForm.ACTION,\n        method: _constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.commentForm.METHOD,\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.commentForm.NAME,\n        onSubmit: this.props.onSubmit\n      }, /*#__PURE__*/React.createElement(\"label\", {\n        htmlFor: _constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.commentForm.AUTHOR_NAME\n      }, _constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.commentForm.AUTHOR_LABEL), /*#__PURE__*/React.createElement(\"input\", {\n        type: \"text\",\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.commentForm.AUTHOR_NAME\n      }), /*#__PURE__*/React.createElement(\"label\", {\n        htmlFor: _constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.commentForm.COMMENT_NAME\n      }, _constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.commentForm.COMMENT_LABEL), /*#__PURE__*/React.createElement(\"textarea\", {\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.commentForm.COMMENT_NAME\n      }), /*#__PURE__*/React.createElement(\"button\", {\n        type: \"submit\"\n      }, _constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.commentForm.SUBMIT_TEXT));\n    }\n  }]);\n\n  return AddCommentForm;\n}(React.Component);\n\n\n\n//# sourceURL=webpack://comments-vidget/./src/modules/react.form.js?");

/***/ }),

/***/ "./src/modules/react.item.js":
/*!***********************************!*\
  !*** ./src/modules/react.item.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CommentItem\": () => (/* binding */ CommentItem)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./src/modules/constants.js\");\n/* harmony import */ var _getTimeString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getTimeString.js */ \"./src/modules/getTimeString.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar CommentItem = /*#__PURE__*/function (_React$Component) {\n  _inherits(CommentItem, _React$Component);\n\n  var _super = _createSuper(CommentItem);\n\n  function CommentItem() {\n    _classCallCheck(this, CommentItem);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(CommentItem, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"li\", {\n        className: _constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.ITEM_CLASS\n      }, /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"h3\", null, this.props.author), /*#__PURE__*/React.createElement(\"p\", null, this.props.comment), /*#__PURE__*/React.createElement(\"time\", {\n        dateTime: (0,_getTimeString_js__WEBPACK_IMPORTED_MODULE_1__.getTimeString)(new Date(this.props.time), true)\n      }, new Date(this.props.time).toLocaleString(\"ru\"))), /*#__PURE__*/React.createElement(\"button\", {\n        className: _constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.DEL_BTN_CLASS,\n        onClick: this.props.onDelete\n      }, _constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.DEL_BTN_TEXT));\n    }\n  }]);\n\n  return CommentItem;\n}(React.Component);\n\n\n\n//# sourceURL=webpack://comments-vidget/./src/modules/react.item.js?");

/***/ }),

/***/ "./src/modules/react.list.js":
/*!***********************************!*\
  !*** ./src/modules/react.list.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CommentsList\": () => (/* binding */ CommentsList)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./src/modules/constants.js\");\n/* harmony import */ var _react_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react.item.js */ \"./src/modules/react.item.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar CommentsList = /*#__PURE__*/function (_React$Component) {\n  _inherits(CommentsList, _React$Component);\n\n  var _super = _createSuper(CommentsList);\n\n  function CommentsList() {\n    _classCallCheck(this, CommentsList);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(CommentsList, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var list = this.props.comments.map(function (comment) {\n        return /*#__PURE__*/React.createElement(_react_item_js__WEBPACK_IMPORTED_MODULE_1__.CommentItem, {\n          key: comment.key,\n          author: comment.author,\n          comment: comment.comment,\n          time: comment.time,\n          onDelete: _this.props.onDelItem\n        });\n      });\n      return /*#__PURE__*/React.createElement(\"ul\", {\n        className: _constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.LIST_CLASS\n      }, list);\n    }\n  }]);\n\n  return CommentsList;\n}(React.Component);\n\n\n\n//# sourceURL=webpack://comments-vidget/./src/modules/react.list.js?");

/***/ }),

/***/ "./src/modules/react.vidget.js":
/*!*************************************!*\
  !*** ./src/modules/react.vidget.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CommentsVidget\": () => (/* binding */ CommentsVidget)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./src/modules/constants.js\");\n/* harmony import */ var _react_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react.list.js */ \"./src/modules/react.list.js\");\n/* harmony import */ var _react_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./react.form.js */ \"./src/modules/react.form.js\");\n/* harmony import */ var _getNodeIndex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getNodeIndex.js */ \"./src/modules/getNodeIndex.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\nvar CommentsVidget = /*#__PURE__*/function (_React$Component) {\n  _inherits(CommentsVidget, _React$Component);\n\n  var _super = _createSuper(CommentsVidget);\n\n  function CommentsVidget(props) {\n    var _this;\n\n    _classCallCheck(this, CommentsVidget);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      comments: props.comments\n    };\n    _this.onAddCommentFormSubmit = _this.onAddCommentFormSubmit.bind(_assertThisInitialized(_this));\n    _this.onDelCommentBtnClick = _this.onDelCommentBtnClick.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(CommentsVidget, [{\n    key: \"onAddCommentFormSubmit\",\n    value: function onAddCommentFormSubmit(event) {\n      event.preventDefault();\n      var commentObj = {\n        key: Date.now(),\n        author: event.target[_constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.commentForm.AUTHOR_NAME].value,\n        comment: event.target[_constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.commentForm.COMMENT_NAME].value,\n        time: new Date()\n      };\n      this.setState(function (state, props) {\n        state.comments.push(commentObj); //storage.set(state.comments);\n\n        return {\n          comments: state.comments\n        };\n      });\n      event.target.reset();\n    }\n  }, {\n    key: \"onDelCommentBtnClick\",\n    value: function onDelCommentBtnClick(event) {\n      if (!event.target.matches(\".\".concat(_constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.DEL_BTN_CLASS))) return;\n      var parent = event.target.closest(\".\".concat(_constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.ITEM_CLASS)),\n          index = (0,_getNodeIndex_js__WEBPACK_IMPORTED_MODULE_3__.getNodeIndex)(parent);\n      this.setState(function (state, props) {\n        state.comments.splice(index, 1); //storage.set(state.comments);\n\n        return {\n          comments: state.comments\n        };\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"div\", {\n        className: _constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.CONTAINER_CLASS\n      }, /*#__PURE__*/React.createElement(_react_list_js__WEBPACK_IMPORTED_MODULE_1__.CommentsList, {\n        comments: this.state.comments,\n        onDelItem: this.onDelCommentBtnClick\n      }), /*#__PURE__*/React.createElement(_react_form_js__WEBPACK_IMPORTED_MODULE_2__.AddCommentForm, {\n        onSubmit: this.onAddCommentFormSubmit\n      }));\n    }\n  }]);\n\n  return CommentsVidget;\n}(React.Component);\n\n\n\n//# sourceURL=webpack://comments-vidget/./src/modules/react.vidget.js?");

/***/ }),

/***/ "./src/modules/storageArray.js":
/*!*************************************!*\
  !*** ./src/modules/storageArray.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StorageArray\": () => (/* binding */ StorageArray)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar StorageArray = /*#__PURE__*/function () {\n  function StorageArray(key) {\n    _classCallCheck(this, StorageArray);\n\n    this.key = key;\n\n    if (!localStorage.getItem(key)) {\n      this.set(new Array());\n    }\n  }\n\n  _createClass(StorageArray, [{\n    key: \"get\",\n    value: function get() {\n      return JSON.parse(localStorage.getItem(this.key));\n    }\n  }, {\n    key: \"set\",\n    value: function set(value) {\n      localStorage.setItem(this.key, JSON.stringify(value));\n    }\n  }, {\n    key: \"push\",\n    value: function push(value) {\n      var sArr = this.get(),\n          newLength = sArr.push(value);\n      this.set(sArr);\n      return newLength;\n    }\n  }, {\n    key: \"splice\",\n    value: function splice() {\n      var sArr = this.get(),\n          delArr = sArr.splice.apply(sArr, arguments);\n      this.set(sArr);\n      return delArr;\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.set(new Array());\n    }\n  }, {\n    key: \"map\",\n    value: function map() {\n      var sArr = this.get();\n      return Array.prototype.map.apply(sArr, arguments);\n    }\n  }, {\n    key: \"length\",\n    get: function get() {\n      return this.get().length;\n    }\n  }]);\n\n  return StorageArray;\n}();\n\n//# sourceURL=webpack://comments-vidget/./src/modules/storageArray.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/modules/index.js");
/******/ 	
/******/ })()
;