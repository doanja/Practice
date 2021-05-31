(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/ArticleItem.tsx":
/*!************************************!*\
  !*** ./components/ArticleItem.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ArticleItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Article_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Article.module.css */ "./styles/Article.module.css");
/* harmony import */ var _styles_Article_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Article_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\doanj\\Documents\\GitHub\\next-crash-course\\components\\ArticleItem.tsx";


function ArticleItem({
  article
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/article/[id]",
    as: `/article/${article.id}`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      className: (_styles_Article_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: [article.title, " \u2192"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: article.body
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/ArticleList.tsx":
/*!************************************!*\
  !*** ./components/ArticleList.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ArticleList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Article_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Article.module.css */ "./styles/Article.module.css");
/* harmony import */ var _styles_Article_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Article_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ArticleItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleItem */ "./components/ArticleItem.tsx");

var _jsxFileName = "C:\\Users\\doanj\\Documents\\GitHub\\next-crash-course\\components\\ArticleList.tsx";


function ArticleList({
  articles
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Article_module_css__WEBPACK_IMPORTED_MODULE_2___default().grid),
    children: articles.map(article => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArticleItem__WEBPACK_IMPORTED_MODULE_1__.default, {
      article: article
    }, article.id, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ArticleList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ArticleList */ "./components/ArticleList.tsx");

var _jsxFileName = "C:\\Users\\doanj\\Documents\\GitHub\\next-crash-course\\pages\\index.tsx";

function Home({
  articles
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArticleList__WEBPACK_IMPORTED_MODULE_1__.default, {
      articles: articles
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();
  return {
    props: {
      articles
    }
  };
};

/***/ }),

/***/ "./styles/Article.module.css":
/*!***********************************!*\
  !*** ./styles/Article.module.css ***!
  \***********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"grid": "Article_grid__2WPYc",
	"card": "Article_card__2DgoW",
	"logo": "Article_logo__p8cMG"
};


/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/index.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNyYXNoLWNvdXJzZS8uL2NvbXBvbmVudHMvQXJ0aWNsZUl0ZW0udHN4Iiwid2VicGFjazovL25leHQtY3Jhc2gtY291cnNlLy4vY29tcG9uZW50cy9BcnRpY2xlTGlzdC50c3giLCJ3ZWJwYWNrOi8vbmV4dC1jcmFzaC1jb3Vyc2UvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbmV4dC1jcmFzaC1jb3Vyc2UvLi9zdHlsZXMvQXJ0aWNsZS5tb2R1bGUuY3NzIiwid2VicGFjazovL25leHQtY3Jhc2gtY291cnNlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL25leHQtY3Jhc2gtY291cnNlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL25leHQtY3Jhc2gtY291cnNlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0LWNyYXNoLWNvdXJzZS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vbmV4dC1jcmFzaC1jb3Vyc2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXh0LWNyYXNoLWNvdXJzZS9pZ25vcmVkfEM6XFxVc2Vyc1xcZG9hbmpcXERvY3VtZW50c1xcR2l0SHViXFxuZXh0LWNyYXNoLWNvdXJzZVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkFydGljbGVJdGVtIiwiYXJ0aWNsZSIsImlkIiwiYXJ0aWNsZVN0eWxlcyIsInRpdGxlIiwiYm9keSIsIkFydGljbGVMaXN0IiwiYXJ0aWNsZXMiLCJtYXAiLCJIb21lIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFNZSxTQUFTQSxXQUFULENBQXFCO0FBQUVDO0FBQUYsQ0FBckIsRUFBb0Q7QUFDakUsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsZUFBWDtBQUEyQixNQUFFLEVBQUcsWUFBV0EsT0FBTyxDQUFDQyxFQUFHLEVBQXREO0FBQUEsMkJBQ0U7QUFBRyxlQUFTLEVBQUVDLHdFQUFkO0FBQUEsOEJBQ0U7QUFBQSxtQkFBS0YsT0FBTyxDQUFDRyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFBSUgsT0FBTyxDQUFDSTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJEO0FBQ0E7QUFNZSxTQUFTQyxXQUFULENBQXFCO0FBQUVDO0FBQUYsQ0FBckIsRUFBcUQ7QUFDbEUsc0JBQ0U7QUFBSyxhQUFTLEVBQUVKLHdFQUFoQjtBQUFBLGNBQ0dJLFFBQVEsQ0FBQ0MsR0FBVCxDQUFjUCxPQUFELGlCQUNaLDhEQUFDLGlEQUFEO0FBQWEsYUFBTyxFQUFFQTtBQUF0QixPQUFvQ0EsT0FBTyxDQUFDQyxFQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmRDtBQU1lLFNBQVNPLElBQVQsQ0FBYztBQUFFRjtBQUFGLENBQWQsRUFBdUM7QUFDcEQsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyw0REFBRDtBQUFhLGNBQVEsRUFBRUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEO0FBRU0sTUFBTUcsY0FBYyxHQUFHLFlBQVk7QUFDeEMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxxREFBRixDQUF2QjtBQUNBLFFBQU1MLFFBQVEsR0FBRyxNQUFNSSxHQUFHLENBQUNFLElBQUosRUFBdkI7QUFFQSxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUNMUDtBQURLO0FBREYsR0FBUDtBQUtELENBVE0sQzs7Ozs7Ozs7OztBQ2RQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGFydGljbGVTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0FydGljbGUubW9kdWxlLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgQXJ0aWNsZUxpc3RQcm9wcyB7XHJcbiAgYXJ0aWNsZTogQXJ0aWNsZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0aWNsZUl0ZW0oeyBhcnRpY2xlIH06IEFydGljbGVMaXN0UHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj0nL2FydGljbGUvW2lkXScgYXM9e2AvYXJ0aWNsZS8ke2FydGljbGUuaWR9YH0+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT17YXJ0aWNsZVN0eWxlcy5jYXJkfT5cclxuICAgICAgICA8aDM+e2FydGljbGUudGl0bGV9ICZyYXJyOzwvaDM+XHJcbiAgICAgICAgPHA+e2FydGljbGUuYm9keX08L3A+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBhcnRpY2xlU3R5bGVzIGZyb20gJy4uL3N0eWxlcy9BcnRpY2xlLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQXJ0aWNsZUl0ZW0gZnJvbSAnLi9BcnRpY2xlSXRlbSc7XHJcblxyXG5pbnRlcmZhY2UgQXJ0aWNsZUxpc3RQcm9wcyB7XHJcbiAgYXJ0aWNsZXM6IEFydGljbGVbXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0aWNsZUxpc3QoeyBhcnRpY2xlcyB9OiBBcnRpY2xlTGlzdFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXthcnRpY2xlU3R5bGVzLmdyaWR9PlxyXG4gICAgICB7YXJ0aWNsZXMubWFwKChhcnRpY2xlOiBhbnkpID0+IChcclxuICAgICAgICA8QXJ0aWNsZUl0ZW0gYXJ0aWNsZT17YXJ0aWNsZX0ga2V5PXthcnRpY2xlLmlkfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IEFydGljbGVMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QnO1xuXG5pbnRlcmZhY2UgSG9tZVByb3BzIHtcbiAgYXJ0aWNsZXM6IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGFydGljbGVzIH06IEhvbWVQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8QXJ0aWNsZUxpc3QgYXJ0aWNsZXM9e2FydGljbGVzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHM/X2xpbWl0PTZgKTtcbiAgY29uc3QgYXJ0aWNsZXMgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFydGljbGVzLFxuICAgIH0sXG4gIH07XG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZ3JpZFwiOiBcIkFydGljbGVfZ3JpZF9fMldQWWNcIixcblx0XCJjYXJkXCI6IFwiQXJ0aWNsZV9jYXJkX18yRGdvV1wiLFxuXHRcImxvZ29cIjogXCJBcnRpY2xlX2xvZ29fX3A4Y01HXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==