module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/TFLLine.js":
/*!*******************************!*\
  !*** ./components/TFLLine.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TFLLine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_lineColors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/lineColors */ "./utils/lineColors.js");
var _jsxFileName = "/Users/dte/Repos/underground.lucid.toys/components/TFLLine.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ListItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.li`
  background-color: ${props => props.color};
  font-size: ${props => props.severity < 10 ? "1.5rem" : "1rem"};
  color: white;
  padding: 1em 5%;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.severity < 10 ? "start" : "center"};
  flex: ${props => props.severity < 10 ? 3 : 1};
  line-height: 1;

  small {
    opacity: 0.8;
    font-variant-caps: all-small-caps;
    font-weight: 600;
  }
`;
function TFLLine({
  status,
  lineID,
  lineName
}) {
  const severity = status[0].statusSeverity;
  return __jsx(ListItem, {
    color: _utils_lineColors__WEBPACK_IMPORTED_MODULE_2__["default"][lineID],
    severity: severity,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, lineName), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, status[0].statusSeverityDescription)));
}

/***/ }),

/***/ "./components/TFLLineStatusList.js":
/*!*****************************************!*\
  !*** ./components/TFLLineStatusList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TFLLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TFLLine */ "./components/TFLLine.js");
var _jsxFileName = "/Users/dte/Repos/underground.lucid.toys/components/TFLLineStatusList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const List = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.ul`
  flex: 1 1 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: stretch;
  z-index: 2;
`;

const TFLLineStatusList = ({
  lineStatuses
}) => {
  const lines = lineStatuses.sort((a, b) => {
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
      lineNumber: 26
    },
    __self: undefined
  }, lines.map(line => __jsx(_TFLLine__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: line.id,
    lineID: line.id,
    lineName: line.name,
    status: line.lineStatuses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TFLLineStatusList);

/***/ }),

/***/ "./components/Timeline.js":
/*!********************************!*\
  !*** ./components/Timeline.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timeline; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/dte/Repos/underground.lucid.toys/components/Timeline.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const List = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default.a.ul`
  display: flex;
  flex-direction: column;
  flex: 0 0 10rem;
  font-size: 0.75em;
  font-variant-numeric: tabular-nums;
  justify-content: stretch;
  list-style-type: none;
  padding: 1rem;
`;
const ListItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default.a.li`
  align-items: center;
  display: flex;
  flex: 1;
`;
const ClockListItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default.a.li`
  align-items: flex-start;
  background-color: var(--background);
  border-top: 1px solid;
  box-shadow: 0.25em 2px 4px var(--background);
  color: ${props => props.busy ? "var(--danger)" : "var(--foreground)"};
  display: flex;
  margin: -0.5em;
  margin-left: -1.25em;
  width: 90%;
  padding: 0.5em;
  padding-left: 1.25em;
  position: absolute;
  top: ${props => props.progress}%;
  transform: translateY(50%);
  transition: 0.3s ease;
  z-index: 1;

  p + p {
    margin-left: 0.75em;
  }

  ::after {
    content: "•";
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.25rem;
    margin-top: -0.725em;
    margin-right: -0.25em;
  }
`;

function Clock(props) {
  const timer = useNewTimer(new Date());
  const interval = 1000 * 60 * 60 * 24;
  const startOfDay = Math.floor(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() / interval) * interval;
  const elapsed = Math.abs(timer - startOfDay) / interval;
  const hours = timer.getHours();
  let isBusy = false;

  if (hours >= 8 && hours < 11 || hours >= 4 && hours < 7) {
    isBusy = true;
  }

  return __jsx(ClockListItem, {
    busy: isBusy,
    progress: elapsed * 100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, timer.toLocaleTimeString(undefined, {
    timeStyle: "short"
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, isBusy ? "Usually very busy" : "Usually not very busy"));
}

function useNewTimer(currentDate) {
  const [date, setDate] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(currentDate);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return date;
}

function Timeline() {
  const timestamps = Array(24).fill(undefined).map((_, i) => `${i}`.padStart(2, "0"));
  const currentTime = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default.a;
  return __jsx(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(Clock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), timestamps.map(timestamp => __jsx(ListItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, timestamp, ":00")));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_TFLLineStatusList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TFLLineStatusList */ "./components/TFLLineStatusList.js");
/* harmony import */ var _components_Timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Timeline */ "./components/Timeline.js");
var _jsxFileName = "/Users/dte/Repos/underground.lucid.toys/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const GlobalStyles = () => __jsx(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["Global"], {
  styles: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
      :root {
        --light: #f7f7f7;
        --dark: #1a1a1a;
        --med: #808080;
        --interactive: rgb(0, 150, 255);
        --interactive-alpha: rgb(0, 150, 255, 0.25);
        --focus: #f3bf4e;
        --danger: rgb(227, 61, 38);

        --foreground: var(--light);
        --background: var(--dark);

        --fontStack: "IBM Plex Sans", -apple-system, system-ui,
          BlinkMacSystemFont, sans-serif;
      }

      @media (prefers-color-scheme: dark) {
        :root {
          --foreground: var(--light);
          --background: var(--dark);
        }
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        position: relative;
      }

      html {
        font: 115%/1.25 var(--fontStack);
        min-height: 100%;
        color: var(--foreground);
        background-color: var(--background);
      }

      body,
      #__next {
        min-height: 100vh;
      }

      #__next {
        display: flex;
      }
    `,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
});

const Index = ({
  lineStatuses
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx(GlobalStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), __jsx(_components_TFLLineStatusList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    lineStatuses: lineStatuses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx(_components_Timeline__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }));
};

Index.getInitialProps = async function () {
  const result = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("https://api.tfl.gov.uk/line/mode/tube/status");
  const data = await result.json();
  return {
    lineStatuses: data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./utils/lineColors.js":
/*!*****************************!*\
  !*** ./utils/lineColors.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  bakerloo: "#894F24",
  central: "#DD251F",
  circle: "#FFCF03",
  district: "#00732A",
  "hammersmith-city": "#D799B0",
  jubilee: "#6B7279",
  metropolitan: "#751056",
  northern: "#000000",
  piccadilly: "#001AA8",
  victoria: "#05A0E3",
  "waterloo-city": "#77D0BD"
});

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dte/Repos/underground.lucid.toys/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map