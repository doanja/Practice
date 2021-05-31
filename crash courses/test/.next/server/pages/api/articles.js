(function() {
var exports = {};
exports.id = "pages/api/articles";
exports.ids = ["pages/api/articles"];
exports.modules = {

/***/ "./pages/api/articles/index.ts":
/*!*************************************!*\
  !*** ./pages/api/articles/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data */ "./data.ts");
 // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// for typescript
// define the res parameter as the return type
function handler(req, res) {
  res.status(200).json(_data__WEBPACK_IMPORTED_MODULE_0__.articles);
} // you can access this by going to http://localhost:3000/api/articles

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["data_ts"], function() { return __webpack_exec__("./pages/api/articles/index.ts"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNyYXNoLWNvdXJzZS8uL3BhZ2VzL2FwaS9hcnRpY2xlcy9pbmRleC50cyJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImFydGljbGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDNkQ7QUFFN0Q7QUFDZSxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQ0MsR0FBdEMsRUFBdUU7QUFDcEZBLEtBQUcsQ0FBQ0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCQywyQ0FBckI7QUFDRCxDLENBRUQscUUiLCJmaWxlIjoicGFnZXMvYXBpL2FydGljbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXJ0aWNsZXMgfSBmcm9tICcuLi8uLi8uLi9kYXRhJztcclxuXHJcbi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnOyAvLyBmb3IgdHlwZXNjcmlwdFxyXG5cclxuLy8gZGVmaW5lIHRoZSByZXMgcGFyYW1ldGVyIGFzIHRoZSByZXR1cm4gdHlwZVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlPEFydGljbGVbXT4pIHtcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbihhcnRpY2xlcyk7XHJcbn1cclxuXHJcbi8vIHlvdSBjYW4gYWNjZXNzIHRoaXMgYnkgZ29pbmcgdG8gaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hcnRpY2xlc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9