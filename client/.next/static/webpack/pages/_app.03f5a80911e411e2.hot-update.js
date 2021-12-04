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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar UserIds = [\n    'roy',\n    'jay'\n];\nvar getRendomUserId = function() {\n    return UserIds[Math.round(Math.random())] // 랜덤으로 0아니면 1이 나옴 그러면 로이나 제이 중에 하나가 골라짐\n    ;\n};\nvar originalMsgs = Array(50).fill(0).map(function(_, i) {\n    return {\n        id: i + 1,\n        userId: getRendomUserId(),\n        timestamp: 1234567890123 + i * 1000 * 60,\n        text: \"\".concat(i + 1, \" mock text\")\n    };\n}).reverse();\nvar MsgList = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(originalMsgs), msgs1 = ref[0], setMsgs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), editingId = ref1[0], setEditingId = ref1[1];\n    var onCreate = function(text) {\n        var newMsg = {\n            id: msgs1.length + 1,\n            userId: getRendomUserId(),\n            timestamp: Date.now(),\n            text: \"\".concat(msgs1.length + 1, \" \").concat(text)\n        };\n        setMsgs(function(msgs) {\n            return [\n                newMsg\n            ].concat(_toConsumableArray(msgs));\n        });\n    };\n    var onUpdate = function(text, id) {\n        setMsgs(function(msgs) {\n            var targetIndex = msgs.findIndex(function(msg) {\n                return msg.id === id;\n            });\n            if (targetIndex < 0) return;\n            var newMsgs = _toConsumableArray(msgs);\n            newMsgs.splice(targetIndex, 1, _objectSpread({\n            }, msgs[targetIndex], {\n                text: text\n            }));\n            return newMsgs;\n        });\n        doneEdit();\n    };\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    var onDelete = function(id) {\n        setMsgs(function(msgs) {\n            var targetIndex = msgs.findIndex(function(msg) {\n                return msg.id === id;\n            });\n            if (targetIndex < 0) return;\n            var newMsgs = _toConsumableArray(msgs);\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: onCreate,\n                __source: {\n                    fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgList.js\",\n                    lineNumber: 56,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                className: \"messages\",\n                __source: {\n                    fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgList.js\",\n                    lineNumber: 57,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: msgs1.map(function(item) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _objectSpread({\n                    }, item, {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(item.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(item.id);\n                        },\n                        isEdting: editingId === item.id,\n                        __source: {\n                            fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgList.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        },\n                        __self: _this1\n                    }), item.id);\n                })\n            })\n        ]\n    }));\n};\n_s(MsgList, \"98aREoWYavyOBv5xOQhoiAi3TBY=\");\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b250ZW50IjpbImltcG9ydCBNc2dJdGVtIGZyb20gXCIuL01zZ0l0ZW1cIlxyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFVzZXJJZHMgPSBbJ3JveScsJ2pheSddXHJcbmNvbnN0IGdldFJlbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV0gLy8g656c642k7Jy866GcIDDslYTri4jrqbQgMeydtCDrgpjsmLQg6re465+s66m0IOuhnOydtOuCmCDsoJzsnbQg7KSR7JeQIO2VmOuCmOqwgCDqs6jrnbzsp5BcclxuXHJcbmNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKS5maWxsKDApLm1hcCgoXyxpKT0+ICh7XHJcbiAgaWQ6IGkgKyAxLFxyXG4gIHVzZXJJZDogZ2V0UmVuZG9tVXNlcklkKCksXHJcbiAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgaSAqIDEwMDAgKiA2MCxcclxuICB0ZXh0OiBgJHtpICsgMX0gbW9jayB0ZXh0YFxyXG59KSkucmV2ZXJzZSgpO1xyXG5cclxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcclxuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShvcmlnaW5hbE1zZ3MpXHJcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3Qgb25DcmVhdGUgPSB0ZXh0ID0+e1xyXG4gICAgY29uc3QgbmV3TXNnID0ge1xyXG4gICAgICBpZDogbXNncy5sZW5ndGgrMSxcclxuICAgICAgdXNlcklkOiBnZXRSZW5kb21Vc2VySWQoKSxcclxuICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICB0ZXh0OiBgJHttc2dzLmxlbmd0aCsxfSAke3RleHR9YFxyXG4gICAgfVxyXG4gICAgc2V0TXNncyhtc2dzID0+IChbbmV3TXNnLCAuLi5tc2dzXSkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25VcGRhdGUgPSAodGV4dCxpZCkgPT57XHJcbiAgICBzZXRNc2dzKG1zZ3MgPT57XHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpXHJcbiAgICAgIGlmKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuOyAgXHJcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc11cclxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEse1xyXG4gICAgICAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxyXG4gICAgICAgIHRleHRcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIG5ld01zZ3NcclxuICAgIH0pXHJcbiAgICBkb25lRWRpdCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlID0gKGlkKT0+e1xyXG4gICAgc2V0TXNncyhtc2dzID0+e1xyXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IGlkKVxyXG4gICAgICBpZih0YXJnZXRJbmRleCA8IDApIHJldHVybjtcclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXVxyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSlcclxuICAgICAgcmV0dXJuIG5ld01zZ3NcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9Lz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAge21zZ3MubWFwKGl0ZW09PiAoXHJcbiAgICAgICAgICA8TXNnSXRlbSBrZXk9e2l0ZW0uaWR9IHsuLi5pdGVtfSBcclxuICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cclxuICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZShpdGVtLmlkKX1cclxuICAgICAgICAgIHN0YXJ0RWRpdD17KCk9PiBzZXRFZGl0aW5nSWQoaXRlbS5pZCl9XHJcbiAgICAgICAgICBpc0VkdGluZz17ZWRpdGluZ0lkID09PSBpdGVtLmlkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0Il0sIm5hbWVzIjpbIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsInVzZVN0YXRlIiwiVXNlcklkcyIsImdldFJlbmRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9yaWdpbmFsTXNncyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiaWQiLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0IiwicmV2ZXJzZSIsIk1zZ0xpc3QiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsIm9uQ3JlYXRlIiwibmV3TXNnIiwibGVuZ3RoIiwiRGF0ZSIsIm5vdyIsIm9uVXBkYXRlIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvbkRlbGV0ZSIsIm11dGF0ZSIsInVsIiwiY2xhc3NOYW1lIiwiaXRlbSIsInN0YXJ0RWRpdCIsImlzRWR0aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});