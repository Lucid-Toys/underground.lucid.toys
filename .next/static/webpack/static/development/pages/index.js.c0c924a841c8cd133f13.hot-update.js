webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Timeline.js":
/*!********************************!*\
  !*** ./components/Timeline.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timeline; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");

var _jsxFileName = "/Users/dte/Repos/underground.lucid.toys/components/Timeline.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  list-style-type: none;\n  flex: 0 0 12rem;\n  padding: 1rem;\n  display: flex;\n  justify-content: stretch;\n  font-size: 0.75em;\n\n  li {\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var List = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].ul(_templateObject());
function Timeline() {
  var timestamps = Array(24).fill(undefined).map(function (_, i) {
    return "".concat(i).padStart(2, "0");
  });
  return __jsx(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, timestamps.map(function (timestamp) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, timestamp, ":00"), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, timestamp, ":30"));
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.c0c924a841c8cd133f13.hot-update.js.map