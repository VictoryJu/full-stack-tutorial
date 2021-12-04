"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar UserIds = [\n    'roy',\n    'jay'\n];\nvar getRendomUserId = function() {\n    return UserIds[Math.round(Math.random())] // 랜덤으로 0아니면 1이 나옴 그러면 로이나 제이 중에 하나가 골라짐\n    ;\n};\nvar originalMsgs = Array(50).fill(0).map(function(_, i) {\n    return {\n        id: i + 1,\n        userId: getRendomUserId(),\n        timestamp: 1234567890123 + i * 1000 * 60,\n        text: \"\".concat(i + 1, \" mock text\")\n    };\n}).reverse();\nvar MsgList = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(originalMsgs), msgs1 = ref[0], setMsgs = ref[1];\n    var onCreate = function(text) {\n        var newMsg = {\n            id: msgs1.length + 1,\n            userId: getRendomUserId(),\n            timestamp: Date.now(),\n            text: \"\".concat(msgs1.length + 1, \" \").concat(text)\n        };\n        setMsgs(function(msgs) {\n            return [\n                newMsg\n            ].concat(_toConsumableArray(msgs));\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: onCreate,\n                __source: {\n                    fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgList.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                className: \"message\",\n                __source: {\n                    fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgList.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: msgs1.map(function(item) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _objectSpread({\n                    }, item, {\n                        __source: {\n                            fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgList.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        },\n                        __self: _this1\n                    }), item.id);\n                })\n            })\n        ]\n    }));\n};\n_s(MsgList, \"XvWLZlE3BmwO7Gi6JdpkUXSm5Sg=\");\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStCO0FBQ0U7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxHQUFLLENBQUNHLE9BQU8sR0FBRyxDQUFDO0lBQUEsQ0FBSztJQUFDLENBQUs7QUFBQSxDQUFDO0FBQzdCLEdBQUssQ0FBQ0MsZUFBZSxHQUFHLFFBQVE7SUFBRkQsTUFBTSxDQUFOQSxPQUFPLENBQUNFLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sSUFBSyxDQUF3Qzs7O0FBRXpHLEdBQUssQ0FBQ0MsWUFBWSxHQUFHQyxLQUFLLENBQUMsRUFBRSxFQUFFQyxJQUFJLENBQUMsQ0FBQyxFQUFFQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxDQUFDLEVBQUNDLENBQUM7SUFBSSxNQUNqREMsQ0FEa0QsQ0FBQztRQUNuREEsRUFBRSxFQUFFRCxDQUFDLEdBQUcsQ0FBQztRQUNURSxNQUFNLEVBQUVYLGVBQWU7UUFDdkJZLFNBQVMsRUFBRSxhQUFhLEdBQUdILENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRTtRQUN4Q0ksSUFBSSxFQUFHLEdBQVEsTUFBVSxDQUFoQkosQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFVO0lBQzNCLENBQUM7R0FBR0ssT0FBTztBQUVYLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLFFBQVEsR0FBRixDQUFDOzs7SUFDckIsR0FBSyxDQUFtQmpCLEdBQXNCLEdBQXRCQSwrQ0FBUSxDQUFDTSxZQUFZLEdBQXRDWSxLQUFJLEdBQWFsQixHQUFzQixLQUFqQ21CLE9BQU8sR0FBSW5CLEdBQXNCO0lBQzlDLEdBQUssQ0FBQ29CLFFBQVEsR0FBR0wsUUFBUSxDQUFSQSxJQUFJLEVBQUcsQ0FBQztRQUN2QixHQUFLLENBQUNNLE1BQU0sR0FBRyxDQUFDO1lBQ2RULEVBQUUsRUFBRU0sS0FBSSxDQUFDSSxNQUFNLEdBQUMsQ0FBQztZQUNqQlQsTUFBTSxFQUFFWCxlQUFlO1lBQ3ZCWSxTQUFTLEVBQUVTLElBQUksQ0FBQ0MsR0FBRztZQUNuQlQsSUFBSSxFQUFHLEdBQW1CQSxNQUFJLENBQXJCRyxLQUFJLENBQUNJLE1BQU0sR0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFPLE9BQUxQLElBQUk7UUFDaEMsQ0FBQztRQUNESSxPQUFPLENBQUNELFFBQVEsQ0FBUkEsSUFBSTtZQUFJLE1BQU0sQ0FBTCxDQUFDRztnQkFBQUEsTUFBTTtZQUFTLENBQUMsQ0FBakIsTUFBaUIsb0JBQUxILElBQUk7O0lBQ25DLENBQUM7SUFFRCxNQUFNOztpRkFFRG5CLGlEQUFRO2dCQUFDMEIsTUFBTSxFQUFFTCxRQUFROzs7Ozs7OztpRkFDekJNLENBQUU7Z0JBQUNDLFNBQVMsRUFBQyxDQUFTOzs7Ozs7OzBCQUNwQlQsS0FBSSxDQUFDVCxHQUFHLENBQUNtQixRQUFRLENBQVJBLElBQUk7a0NBQ1osTUFBTSx3REFBTDlCLGdEQUFPO3VCQUFtQjhCLElBQUk7Ozs7Ozs7d0JBQWpCQSxJQUFJLENBQUNoQixFQUFFOzs7OztBQUsvQixDQUFDO0dBdEJLSyxPQUFPO0tBQVBBLE9BQU87QUEwQmIsK0RBQWVBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzFhZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0l0ZW0gZnJvbSBcIi4vTXNnSXRlbVwiXHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVXNlcklkcyA9IFsncm95JywnamF5J11cclxuY29uc3QgZ2V0UmVuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXSAvLyDrnpzrjaTsnLzroZwgMOyVhOuLiOuptCAx7J20IOuCmOyYtCDqt7jrn6zrqbQg66Gc7J2064KYIOygnOydtCDspJHsl5Ag7ZWY64KY6rCAIOqzqOudvOynkFxyXG5cclxuY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApLmZpbGwoMCkubWFwKChfLGkpPT4gKHtcclxuICBpZDogaSArIDEsXHJcbiAgdXNlcklkOiBnZXRSZW5kb21Vc2VySWQoKSxcclxuICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyBpICogMTAwMCAqIDYwLFxyXG4gIHRleHQ6IGAke2kgKyAxfSBtb2NrIHRleHRgXHJcbn0pKS5yZXZlcnNlKCk7XHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKG9yaWdpbmFsTXNncylcclxuICBjb25zdCBvbkNyZWF0ZSA9IHRleHQgPT57XHJcbiAgICBjb25zdCBuZXdNc2cgPSB7XHJcbiAgICAgIGlkOiBtc2dzLmxlbmd0aCsxLFxyXG4gICAgICB1c2VySWQ6IGdldFJlbmRvbVVzZXJJZCgpLFxyXG4gICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgIHRleHQ6IGAke21zZ3MubGVuZ3RoKzF9ICR7dGV4dH1gXHJcbiAgICB9XHJcbiAgICBzZXRNc2dzKG1zZ3MgPT4gKFtuZXdNc2csIC4uLm1zZ3NdKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9Lz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cclxuICAgICAgICB7bXNncy5tYXAoaXRlbT0+IChcclxuICAgICAgICAgIDxNc2dJdGVtIGtleT17aXRlbS5pZH0gey4uLml0ZW19IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdCJdLCJuYW1lcyI6WyJNc2dJdGVtIiwiTXNnSW5wdXQiLCJ1c2VTdGF0ZSIsIlVzZXJJZHMiLCJnZXRSZW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJvcmlnaW5hbE1zZ3MiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsInJldmVyc2UiLCJNc2dMaXN0IiwibXNncyIsInNldE1zZ3MiLCJvbkNyZWF0ZSIsIm5ld01zZyIsImxlbmd0aCIsIkRhdGUiLCJub3ciLCJtdXRhdGUiLCJ1bCIsImNsYXNzTmFtZSIsIml0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});