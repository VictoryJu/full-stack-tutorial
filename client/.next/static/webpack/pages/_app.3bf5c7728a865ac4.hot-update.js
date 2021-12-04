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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_work_full_stack_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/regenerator-runtime/runtime.js */ \"../node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_work_full_stack_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_work_full_stack_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar UserIds = [\n    \"roy\",\n    \"jay\"\n];\nvar getRendomUserId = function() {\n    return UserIds[Math.round(Math.random())];\n}; // 랜덤으로 0아니면 1이 나옴 그러면 로이나 제이 중에 하나가 골라짐\nvar MsgList = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)(), _query = ref.query, _userId = _query.userId, userId = _userId === void 0 ? \"\" : _userId;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), msgs1 = ref1[0], setMsgs = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), editingId = ref2[0], setEditingId = ref2[1];\n    var onCreate = _asyncToGenerator(C_work_full_stack_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text) {\n        var newMsg;\n        return C_work_full_stack_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"post\", \"/messages\", {\n                        text: text,\n                        userId: userId\n                    });\n                case 2:\n                    newMsg = _ctx.sent;\n                    if (newMsg) {\n                        _ctx.next = 5;\n                        break;\n                    }\n                    throw Error('없습다.');\n                case 5:\n                    setMsgs(function(msgs) {\n                        return [\n                            newMsg\n                        ].concat(_toConsumableArray(msgs));\n                    });\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    var onUpdate = _asyncToGenerator(C_work_full_stack_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text, id) {\n        var newMsg;\n        return C_work_full_stack_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"put\", \"/messages/\".concat(id), {\n                        text: text,\n                        userId: userId\n                    });\n                case 2:\n                    newMsg = _ctx.sent;\n                    if (newMsg) {\n                        _ctx.next = 5;\n                        break;\n                    }\n                    throw Error('없습다.');\n                case 5:\n                    setMsgs(function(msgs) {\n                        var targetIndex = msgs.findIndex(function(msg) {\n                            return msg.id === id;\n                        });\n                        if (targetIndex < 0) return;\n                        var newMsgs = _toConsumableArray(msgs);\n                        newMsgs.splice(targetIndex, 1, newMsg);\n                        return newMsgs;\n                    });\n                    doneEdit();\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    var getMessages = _asyncToGenerator(C_work_full_stack_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var msgs;\n        return C_work_full_stack_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"get\", \"/messages\");\n                case 2:\n                    msgs = _ctx.sent;\n                    setMsgs(msgs);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        getMessages();\n    }, []);\n    var onDelete = _asyncToGenerator(C_work_full_stack_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n        var receiveidId;\n        return C_work_full_stack_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('delete', \"/messages/\".concat(id), {\n                        params: {\n                            userId: userId\n                        }\n                    });\n                case 2:\n                    receiveidId = _ctx.sent;\n                    setMsgs(function(msgs) {\n                        var targetIndex = msgs.findIndex(function(msg) {\n                            return msg.id === receiveidId + '';\n                        });\n                        if (targetIndex < 0) return msgs;\n                        var newMsgs = _toConsumableArray(msgs);\n                        newMsgs.splice(targetIndex, 1);\n                        return newMsgs;\n                    });\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mutate: onCreate,\n                __source: {\n                    fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgList.js\",\n                    lineNumber: 57,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"ul\", {\n                className: \"messages\",\n                __source: {\n                    fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgList.js\",\n                    lineNumber: 58,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: msgs1.map(function(item) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({\n                    }, item, {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(item.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(item.id);\n                        },\n                        isEdting: editingId === item.id,\n                        myId: userId,\n                        __source: {\n                            fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgList.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        },\n                        __self: _this1\n                    }), item.id);\n                })\n            })\n        ]\n    }));\n};\n_s(MsgList, \"dhV1FoMom5x/z7xW8LlYozLAApM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xCUyxRQUFRLEVBQUUsUUFBUTs0QkFBRkEsTUFBTSxDQUFOQSxRQUFRLENBQUNPLElBQUksQ0FBQ2YsRUFBRTs7d0JBQ2hDZ0IsU0FBUyxFQUFFLFFBQVE7NEJBQUZ0QixNQUFNLENBQU5BLFlBQVksQ0FBQ3FCLElBQUksQ0FBQ2YsRUFBRTs7d0JBQ3JDaUIsUUFBUSxFQUFFeEIsU0FBUyxLQUFLc0IsSUFBSSxDQUFDZixFQUFFO3dCQUMvQmtCLElBQUksRUFBRTVCLE1BQU07Ozs7Ozs7d0JBTlB5QixJQUFJLENBQUNmLEVBQUU7Ozs7O0FBWXhCLENBQUM7R0FoRUtaLE9BQU87O1FBRXNCUCxrREFBUzs7O0tBRnRDTyxPQUFPO0FBa0ViLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzFhZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0l0ZW0gZnJvbSBcIi4vTXNnSXRlbVwiO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGZldGNoZXIgZnJvbSBcIi4uL2ZldGNoZXJcIjtcclxuY29uc3QgVXNlcklkcyA9IFtcInJveVwiLCBcImpheVwiXTtcclxuY29uc3QgZ2V0UmVuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXTsgLy8g656c642k7Jy866GcIDDslYTri4jrqbQgMeydtCDrgpjsmLQg6re465+s66m0IOuhnOydtOuCmCDsoJzsnbQg7KSR7JeQIO2VmOuCmOqwgCDqs6jrnbzsp5BcclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHtxdWVyeTogeyB1c2VySWQgPSBcIlwiIH19ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3Qgb25DcmVhdGUgPSBhc3luYyB0ZXh0ID0+IHtcclxuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoXCJwb3N0XCIsIFwiL21lc3NhZ2VzXCIsIHsgdGV4dCwgdXNlcklkIH0pO1xyXG4gICAgaWYoIW5ld01zZykgdGhyb3cgRXJyb3IoJ+yXhuyKteuLpC4nKVxyXG4gICAgc2V0TXNncygobXNncykgPT4gW25ld01zZywgLi4ubXNnc10pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKHRleHQsIGlkKSA9PiB7XHJcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKFwicHV0XCIsYC9tZXNzYWdlcy8ke2lkfWAse3RleHQsdXNlcklkfSk7XHJcbiAgICBpZighbmV3TXNnKSB0aHJvdyBFcnJvcign7JeG7Iq164ukLicpXHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybjtcclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcclxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIG5ld01zZylcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuICAgIGRvbmVFZGl0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XHJcblxyXG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbXNncyA9IGF3YWl0IGZldGNoZXIoXCJnZXRcIiwgXCIvbWVzc2FnZXNcIik7XHJcbiAgICBzZXRNc2dzKG1zZ3MpO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldE1lc3NhZ2VzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jIGlkID0+IHtcclxuICAgIGNvbnN0IHJlY2VpdmVpZElkID0gYXdhaXQgZmV0Y2hlcignZGVsZXRlJywgYC9tZXNzYWdlcy8ke2lkfWAse3BhcmFtczoge3VzZXJJZH0gfSk7IC8v7YG065287J207Ja47Yq47JeQ7ISc64qUIO2MjOuejOyKpOuhnCDrs7TrgrTsp4Drp4wg7ISc67KE7JeQ7ISc64qUIOy/vOumrOuhnCDrsJvslYTsp5BcclxuICAgIHNldE1zZ3MobXNncyA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSByZWNlaXZlaWRJZCArICcnKTtcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XHJcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxyXG4gICAgICAgIHttc2dzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPE1zZ0l0ZW1cclxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICB7Li4uaXRlbX1cclxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoaXRlbS5pZCl9XHJcbiAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKGl0ZW0uaWQpfVxyXG4gICAgICAgICAgICBpc0VkdGluZz17ZWRpdGluZ0lkID09PSBpdGVtLmlkfVxyXG4gICAgICAgICAgICBteUlkPXt1c2VySWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJNc2dJdGVtIiwiTXNnSW5wdXQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImZldGNoZXIiLCJVc2VySWRzIiwiZ2V0UmVuZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiTXNnTGlzdCIsInF1ZXJ5IiwidXNlcklkIiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJvbkNyZWF0ZSIsInRleHQiLCJuZXdNc2ciLCJFcnJvciIsIm9uVXBkYXRlIiwiaWQiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsImdldE1lc3NhZ2VzIiwib25EZWxldGUiLCJyZWNlaXZlaWRJZCIsInBhcmFtcyIsIm11dGF0ZSIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsInN0YXJ0RWRpdCIsImlzRWR0aW5nIiwibXlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});