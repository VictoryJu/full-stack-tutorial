"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar UserIds = [\n    'roy',\n    'jay'\n];\nvar getRendomUserId = function() {\n    return UserIds[Math.round(Math.random())] // 랜덤으로 0아니면 1이 나옴 그러면 로이나 제이 중에 하나가 골라짐\n    ;\n};\nvar msgs = Array(50).fill(0).map(function(_, i) {\n    return {\n        id: i + 1,\n        userId: getRendomUserId(),\n        timestamp: 1234567890123 + i * 1000 * 60,\n        text: \"\".concat(i + 1, \" mock text\")\n    };\n}).reverse();\nvar MsgList = function() {\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n        className: \"message\",\n        __source: {\n            fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgList.js\",\n            lineNumber: 14,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: msgs.map(function(item) {\n            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _objectSpread({\n            }, item, {\n                __source: {\n                    fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgList.js\",\n                    lineNumber: 16,\n                    columnNumber: 22\n                },\n                __self: _this\n            }), item.id);\n        })\n    });\n};\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQUM7SUFBQSxDQUFLO0lBQUMsQ0FBSztBQUFBLENBQUM7QUFDN0IsR0FBSyxDQUFDQyxlQUFlLEdBQUcsUUFBUTtJQUFGRCxNQUFNLENBQU5BLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxJQUFLLENBQXdDOzs7QUFFekcsR0FBSyxDQUFDQyxJQUFJLEdBQUdDLEtBQUssQ0FBQyxFQUFFLEVBQUVDLElBQUksQ0FBQyxDQUFDLEVBQUVDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLENBQUMsRUFBQ0MsQ0FBQztJQUFJLE1BQ3pDQyxDQUQwQyxDQUFDO1FBQzNDQSxFQUFFLEVBQUVELENBQUMsR0FBRyxDQUFDO1FBQ1RFLE1BQU0sRUFBRVgsZUFBZTtRQUN2QlksU0FBUyxFQUFFLGFBQWEsR0FBR0gsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFO1FBQ3hDSSxJQUFJLEVBQUcsR0FBUSxNQUFVLENBQWhCSixDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQVU7SUFDM0IsQ0FBQztHQUFHSyxPQUFPO0FBRVgsR0FBSyxDQUFDQyxPQUFPLEdBQUcsUUFDaEI7a0JBQUUsTUFBTSx3REFBTEMsQ0FBRTtRQUFDQyxTQUFTLEVBQUMsQ0FBUzs7Ozs7OztrQkFFbkJiLElBQUksQ0FBQ0csR0FBRyxDQUFDVyxRQUFRLENBQVJBLElBQUk7MEJBQUUsTUFBTSx3REFBTHBCLGdEQUFPO2VBQW1Cb0IsSUFBSTs7Ozs7OztnQkFBakJBLElBQUksQ0FBQ1IsRUFBRTs7OztLQUhwQ0ssT0FBTztBQU9iLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcz8xYWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNc2dJdGVtIGZyb20gXCIuL01zZ0l0ZW1cIlxyXG5cclxuY29uc3QgVXNlcklkcyA9IFsncm95JywnamF5J11cclxuY29uc3QgZ2V0UmVuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXSAvLyDrnpzrjaTsnLzroZwgMOyVhOuLiOuptCAx7J20IOuCmOyYtCDqt7jrn6zrqbQg66Gc7J2064KYIOygnOydtCDspJHsl5Ag7ZWY64KY6rCAIOqzqOudvOynkFxyXG5cclxuY29uc3QgbXNncyA9IEFycmF5KDUwKS5maWxsKDApLm1hcCgoXyxpKT0+ICh7XHJcbiAgaWQ6IGkgKyAxLFxyXG4gIHVzZXJJZDogZ2V0UmVuZG9tVXNlcklkKCksXHJcbiAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgaSAqIDEwMDAgKiA2MCxcclxuICB0ZXh0OiBgJHtpICsgMX0gbW9jayB0ZXh0YFxyXG59KSkucmV2ZXJzZSgpO1xyXG5cclxuY29uc3QgTXNnTGlzdCA9ICgpID0+IFxyXG4gIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XHJcbiAgICB7XHJcbiAgICAgIG1zZ3MubWFwKGl0ZW09PjxNc2dJdGVtIGtleT17aXRlbS5pZH0gey4uLml0ZW19IC8+KVxyXG4gICAgfTwvdWw+XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdCJdLCJuYW1lcyI6WyJNc2dJdGVtIiwiVXNlcklkcyIsImdldFJlbmRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm1zZ3MiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsInJldmVyc2UiLCJNc2dMaXN0IiwidWwiLCJjbGFzc05hbWUiLCJpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});