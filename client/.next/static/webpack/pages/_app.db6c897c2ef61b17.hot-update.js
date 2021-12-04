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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_work_full_stack_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/regenerator-runtime/runtime.js */ \"../node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_work_full_stack_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_work_full_stack_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar UserIds = [\n    \"roy\",\n    \"jay\"\n];\nvar getRendomUserId = function() {\n    return UserIds[Math.round(Math.random())];\n}; // 랜덤으로 0아니면 1이 나옴 그러면 로이나 제이 중에 하나가 골라짐\nvar MsgList = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)(), _query = ref.query, _userId = _query.userId, userId = _userId === void 0 ? \"\" : _userId;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), msgs1 = ref1[0], setMsgs = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), editingId = ref2[0], setEditingId = ref2[1];\n    var onCreate = _asyncToGenerator(C_work_full_stack_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text) {\n        var newMsg;\n        return C_work_full_stack_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"post\", \"/messages\", {\n                        text: text,\n                        userId: userId\n                    });\n                case 2:\n                    newMsg = _ctx.sent;\n                    if (newMsg) {\n                        _ctx.next = 5;\n                        break;\n                    }\n                    throw Error('없습다.');\n                case 5:\n                    setMsgs(function(msgs) {\n                        return [\n                            newMsg\n                        ].concat(_toConsumableArray(msgs));\n                    });\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    var onUpdate = _asyncToGenerator(C_work_full_stack_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text, id) {\n        var newMsg;\n        return C_work_full_stack_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"put\", \"/messages/\".concat(userId), {\n                        text: text,\n                        userId: userId\n                    });\n                case 2:\n                    newMsg = _ctx.sent;\n                    if (newMsg) {\n                        _ctx.next = 5;\n                        break;\n                    }\n                    throw Error('없습다.');\n                case 5:\n                    setMsgs(function(msgs) {\n                        var targetIndex = msgs.findIndex(function(msg) {\n                            return msg.id === id;\n                        });\n                        if (targetIndex < 0) return;\n                        var newMsgs = _toConsumableArray(msgs);\n                        newMsgs.splice(targetIndex, 1, newMsg);\n                        return newMsgs;\n                    });\n                    doneEdit();\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    var getMessages = _asyncToGenerator(C_work_full_stack_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var msgs;\n        return C_work_full_stack_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"get\", \"/messages\");\n                case 2:\n                    msgs = _ctx.sent;\n                    setMsgs(msgs);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        getMessages();\n    }, []);\n    var onDelete = function(id) {\n        setMsgs(function(msgs) {\n            var targetIndex = msgs.findIndex(function(msg) {\n                return msg.id === id;\n            });\n            if (targetIndex < 0) return;\n            var newMsgs = _toConsumableArray(msgs);\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mutate: onCreate,\n                __source: {\n                    fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgList.js\",\n                    lineNumber: 56,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"ul\", {\n                className: \"messages\",\n                __source: {\n                    fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgList.js\",\n                    lineNumber: 57,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: msgs1.map(function(item) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({\n                    }, item, {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(item.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(item.id);\n                        },\n                        isEdting: editingId === item.id,\n                        myId: userId,\n                        __source: {\n                            fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgList.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        },\n                        __self: _this1\n                    }), item.id);\n                })\n            })\n        ]\n    }));\n};\n_s(MsgList, \"dhV1FoMom5x/z7xW8LlYozLAApM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUxQixNQUFNOzs7Ozs7O3dCQU5QdUIsSUFBSSxDQUFDYixFQUFFOzs7OztBQVl4QixDQUFDO0dBL0RLWixPQUFPOztRQUVzQlAsa0RBQVM7OztLQUZ0Q08sT0FBTztBQWlFYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcz8xYWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNc2dJdGVtIGZyb20gXCIuL01zZ0l0ZW1cIjtcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBmZXRjaGVyIGZyb20gXCIuLi9mZXRjaGVyXCI7XHJcbmNvbnN0IFVzZXJJZHMgPSBbXCJyb3lcIiwgXCJqYXlcIl07XHJcbmNvbnN0IGdldFJlbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07IC8vIOuenOuNpOycvOuhnCAw7JWE64uI66m0IDHsnbQg64KY7Ji0IOq3uOufrOuptCDroZzsnbTrgpgg7KCc7J20IOykkeyXkCDtlZjrgpjqsIAg6rOo65287KeQXHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB7cXVlcnk6IHsgdXNlcklkID0gXCJcIiB9fSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IG9uQ3JlYXRlID0gYXN5bmMgdGV4dCA9PiB7XHJcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKFwicG9zdFwiLCBcIi9tZXNzYWdlc1wiLCB7IHRleHQsIHVzZXJJZCB9KTtcclxuICAgIGlmKCFuZXdNc2cpIHRocm93IEVycm9yKCfsl4bsirXri6QuJylcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICh0ZXh0LCBpZCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcihcInB1dFwiLGAvbWVzc2FnZXMvJHt1c2VySWR9YCx7dGV4dCx1c2VySWR9KTtcclxuICAgIGlmKCFuZXdNc2cpIHRocm93IEVycm9yKCfsl4bsirXri6QuJylcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwgbmV3TXNnKVxyXG4gICAgICByZXR1cm4gbmV3TXNncztcclxuICAgIH0pO1xyXG4gICAgZG9uZUVkaXQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKTtcclxuXHJcbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBtc2dzID0gYXdhaXQgZmV0Y2hlcihcImdldFwiLCBcIi9tZXNzYWdlc1wiKTtcclxuICAgIHNldE1zZ3MobXNncyk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0TWVzc2FnZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlID0gKGlkKSA9PiB7XHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybjtcclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcclxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xyXG4gICAgICByZXR1cm4gbmV3TXNncztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAge21zZ3MubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8TXNnSXRlbVxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIHsuLi5pdGVtfVxyXG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZShpdGVtLmlkKX1cclxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoaXRlbS5pZCl9XHJcbiAgICAgICAgICAgIGlzRWR0aW5nPXtlZGl0aW5nSWQgPT09IGl0ZW0uaWR9XHJcbiAgICAgICAgICAgIG15SWQ9e3VzZXJJZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcclxuIl0sIm5hbWVzIjpbIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiZmV0Y2hlciIsIlVzZXJJZHMiLCJnZXRSZW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJNc2dMaXN0IiwicXVlcnkiLCJ1c2VySWQiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsIm9uQ3JlYXRlIiwidGV4dCIsIm5ld01zZyIsIkVycm9yIiwib25VcGRhdGUiLCJpZCIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0IiwiZ2V0TWVzc2FnZXMiLCJvbkRlbGV0ZSIsIm11dGF0ZSIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsInN0YXJ0RWRpdCIsImlzRWR0aW5nIiwibXlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});