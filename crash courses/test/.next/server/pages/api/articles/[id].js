(function() {
var exports = {};
exports.id = "pages/api/articles/[id]";
exports.ids = ["pages/api/articles/[id]"];
exports.modules = {

/***/ "./pages/api/articles/[id].ts":
/*!************************************!*\
  !*** ./pages/api/articles/[id].ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data */ "./data.ts");
 // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function handler(req, res) {
  const id = req.query.id;
  const filtered = _data__WEBPACK_IMPORTED_MODULE_0__.articles.filter(article => article.id.toString() === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({
      message: `Article with the id of ${id} is not found.`
    });
  }
} // you can access this by going to http://localhost:3000/api/articles/1

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["data_ts"], function() { return __webpack_exec__("./pages/api/articles/[id].ts"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNyYXNoLWNvdXJzZS8uL3BhZ2VzL2FwaS9hcnRpY2xlcy9baWRdLnRzIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsInF1ZXJ5IiwiZmlsdGVyZWQiLCJhcnRpY2xlcyIsImFydGljbGUiLCJ0b1N0cmluZyIsImxlbmd0aCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFHZSxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQ0MsR0FBdEMsRUFBMkY7QUFDeEcsUUFBTUMsRUFBRSxHQUFHRixHQUFHLENBQUNHLEtBQUosQ0FBVUQsRUFBckI7QUFDQSxRQUFNRSxRQUFRLEdBQUdDLGtEQUFBLENBQWlCQyxPQUFELElBQXNCQSxPQUFPLENBQUNKLEVBQVIsQ0FBV0ssUUFBWCxPQUEwQkwsRUFBaEUsQ0FBakI7O0FBRUEsTUFBSUUsUUFBUSxDQUFDSSxNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCUCxPQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQk4sUUFBUSxDQUFDLENBQUQsQ0FBN0I7QUFDRCxHQUZELE1BRU87QUFDTEgsT0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFHLDBCQUF5QlQsRUFBRztBQUF4QyxLQUFyQjtBQUNEO0FBQ0YsQyxDQUVELHVFIiwiZmlsZSI6InBhZ2VzL2FwaS9hcnRpY2xlcy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXJ0aWNsZXMgfSBmcm9tICcuLi8uLi8uLi9kYXRhJztcclxuXHJcbi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZTxBcnRpY2xlIHwgeyBtZXNzYWdlOiBzdHJpbmcgfT4pIHtcclxuICBjb25zdCBpZCA9IHJlcS5xdWVyeS5pZDtcclxuICBjb25zdCBmaWx0ZXJlZCA9IGFydGljbGVzLmZpbHRlcigoYXJ0aWNsZTogQXJ0aWNsZSkgPT4gYXJ0aWNsZS5pZC50b1N0cmluZygpID09PSBpZCk7XHJcblxyXG4gIGlmIChmaWx0ZXJlZC5sZW5ndGggPiAwKSB7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihmaWx0ZXJlZFswXSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogYEFydGljbGUgd2l0aCB0aGUgaWQgb2YgJHtpZH0gaXMgbm90IGZvdW5kLmAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyB5b3UgY2FuIGFjY2VzcyB0aGlzIGJ5IGdvaW5nIHRvIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYXJ0aWNsZXMvMVxyXG4iXSwic291cmNlUm9vdCI6IiJ9