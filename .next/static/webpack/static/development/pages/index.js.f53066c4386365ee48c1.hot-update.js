webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TFLLineStatusList.js":
/*!*****************************************!*\
  !*** ./components/TFLLineStatusList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _TFLLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TFLLine */ "./components/TFLLine.js");

var _jsxFileName = "/Users/dte/Repos/underground.lucid.toys/components/TFLLineStatusList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  flex: 0 1 auto;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  justify-content: stretch;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var List = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].ul(_templateObject());

var TFLLineStatusList = function TFLLineStatusList(_ref) {
  var lineStatuses = _ref.lineStatuses;
  var lines = lineStatuses.sort(function (a, b) {
    switch (a.lineStatuses[0].statusSeverityDescription) {
      case "Good Service":
        return 1;

      case "Severe Delays":
      default:
        return -1;
    }
  });
  return __jsx(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, lines.map(function (line) {
    return __jsx(_TFLLine__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: line.id,
      lineID: line.id,
      lineName: line.name,
      status: line.lineStatuses,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TFLLineStatusList);

/***/ })

})
//# sourceMappingURL=index.js.f53066c4386365ee48c1.hot-update.js.map