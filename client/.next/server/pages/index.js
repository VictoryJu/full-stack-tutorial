"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/MsgInput.js":
/*!********************************!*\
  !*** ./components/MsgInput.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MsgInput = ({ mutate , id =undefined , text: text1 = ''  })=>{\n    const textRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const onSubmit = (e)=>{\n        e.preventDefault();\n        e.stopPropagation();\n        const text = textRef.current.value;\n        textRef.current.value = '';\n        mutate(text, id);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n        className: \"messages__input\",\n        onSubmit: onSubmit,\n        __source: {\n            fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgInput.js\",\n            lineNumber: 14,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"textarea\", {\n                ref: textRef,\n                defaultValue: text1,\n                placeholder: \"내용을 입력하세요.\",\n                __source: {\n                    fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgInput.js\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                type: \"submit\",\n                __source: {\n                    fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgInput.js\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: \"입력하기\"\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgInput);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0lucHV0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QjtBQUU1QixLQUFLLENBQUNDLFFBQVEsSUFBSSxDQUFDQyxDQUFBQSxNQUFNLEdBQUVDLEVBQUUsRUFBR0MsU0FBUyxHQUFDQyxJQUFJLEVBQUpBLEtBQUksR0FBQyxDQUFFLElBQUMsR0FBRyxDQUFDO0lBQ3BELEtBQUssQ0FBQ0MsT0FBTyxHQUFHTiw2Q0FBTSxDQUFDLElBQUk7SUFFM0IsS0FBSyxDQUFDTyxRQUFRLElBQUdDLENBQUMsR0FBRSxDQUFDO1FBQ25CQSxDQUFDLENBQUNDLGNBQWM7UUFDaEJELENBQUMsQ0FBQ0UsZUFBZTtRQUNqQixLQUFLLENBQUNMLElBQUksR0FBR0MsT0FBTyxDQUFDSyxPQUFPLENBQUNDLEtBQUs7UUFDbENOLE9BQU8sQ0FBQ0ssT0FBTyxDQUFDQyxLQUFLLEdBQUcsQ0FBRTtRQUMxQlYsTUFBTSxDQUFDRyxJQUFJLEVBQUVGLEVBQUU7SUFDakIsQ0FBQztJQUNELE1BQU0sdUVBQ0hVLENBQUk7UUFBQ0MsU0FBUyxFQUFDLENBQWlCO1FBQUNQLFFBQVEsRUFBRUEsUUFBUTs7Ozs7Ozs7aUZBQ2pEUSxDQUFRO2dCQUFDQyxHQUFHLEVBQUVWLE9BQU87Z0JBQUVXLFlBQVksRUFBRVosS0FBSTtnQkFBRWEsV0FBVyxFQUFDLENBQVk7Ozs7Ozs7O2lGQUNuREMsQ0FBVjtnQkFBQ0MsSUFBSSxFQUFDLENBQVE7Ozs7Ozs7MEJBQUMsQ0FBSTs7OztBQUdoQyxDQUFDO0FBRUQsaUVBQWVuQixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dJbnB1dC5qcz9jYzJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUmVmfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IE1zZ0lucHV0ID0gKHttdXRhdGUsIGlkID0gdW5kZWZpbmVkLHRleHQ9Jyd9KT0+e1xyXG4gIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBlPT57XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIGNvbnN0IHRleHQgPSB0ZXh0UmVmLmN1cnJlbnQudmFsdWVcclxuICAgIHRleHRSZWYuY3VycmVudC52YWx1ZSA9ICcnXHJcbiAgICBtdXRhdGUodGV4dCwgaWQpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJtZXNzYWdlc19faW5wdXRcIiBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICA8dGV4dGFyZWEgcmVmPXt0ZXh0UmVmfSBkZWZhdWx0VmFsdWU9e3RleHR9IHBsYWNlaG9sZGVyPVwi64K07Jqp7J2EIOyeheugpe2VmOyEuOyalC5cIj48L3RleHRhcmVhPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7snoXroKXtlZjquLA8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0lucHV0Il0sIm5hbWVzIjpbInVzZVJlZiIsIk1zZ0lucHV0IiwibXV0YXRlIiwiaWQiLCJ1bmRlZmluZWQiLCJ0ZXh0IiwidGV4dFJlZiIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsInZhbHVlIiwiZm9ybSIsImNsYXNzTmFtZSIsInRleHRhcmVhIiwicmVmIiwiZGVmYXVsdFZhbHVlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgInput.js\n");

/***/ }),

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n\n\nconst MsgItem = ({ startEdit , id , userId , timestamp , text , onUpdate , isEdting , onDelete , myId  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n        className: \"messages__item\",\n        __source: {\n            fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgItem.js\",\n            lineNumber: 6,\n            columnNumber: 3\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h3\", {\n                __source: {\n                    fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgItem.js\",\n                    lineNumber: 7,\n                    columnNumber: 5\n                },\n                __self: undefined,\n                children: [\n                    userId,\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"sub\", {\n                        __source: {\n                            fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgItem.js\",\n                            lineNumber: 9,\n                            columnNumber: 7\n                        },\n                        __self: undefined,\n                        children: new Date(timestamp).toLocaleDateString('ko-KR', {\n                            year: 'numeric',\n                            month: 'numeric',\n                            day: 'numeric',\n                            hour: '2-digit',\n                            minute: '2-digit',\n                            hour12: true\n                        })\n                    })\n                ]\n            }),\n            isEdting ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    mutate: onUpdate,\n                    text: text,\n                    id: id,\n                    __source: {\n                        fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgItem.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    },\n                    __self: undefined\n                })\n            }) : text,\n            myId === userId && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"messages__buttons\",\n                __source: {\n                    fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgItem.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                        onClick: startEdit,\n                        __source: {\n                            fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgItem.js\",\n                            lineNumber: 30,\n                            columnNumber: 9\n                        },\n                        __self: undefined,\n                        children: \"수정\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                        onClick: onDelete,\n                        __source: {\n                            fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgItem.js\",\n                            lineNumber: 31,\n                            columnNumber: 9\n                        },\n                        __self: undefined,\n                        children: \"삭제\"\n                    })\n                ]\n            })\n        ]\n    })\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgItem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0l0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFFakMsS0FBSyxDQUFDQyxPQUFPLElBQUksQ0FBQyxDQUNoQkMsU0FBUyxHQUFDQyxFQUFFLEdBQUVDLE1BQU0sR0FBQ0MsU0FBUyxHQUFDQyxJQUFJLEdBQUVDLFFBQVEsR0FBRUMsUUFBUSxHQUFFQyxRQUFRLEdBQUVDLElBQUksRUFDekUsQ0FBQyx5RUFDRUMsQ0FBRTtRQUFDQyxTQUFTLEVBQUMsQ0FBZ0I7Ozs7Ozs7O2tGQUMzQkMsQ0FBRTs7Ozs7Ozs7b0JBQ0FULE1BQU07eUZBQ05VLENBQUc7Ozs7Ozs7a0NBQ0QsR0FBRyxDQUFDQyxJQUFJLENBQUNWLFNBQVMsRUFBRVcsa0JBQWtCLENBQUMsQ0FBTyxRQUFDLENBQUM7NEJBQy9DQyxJQUFJLEVBQUUsQ0FBUzs0QkFDZkMsS0FBSyxFQUFFLENBQVM7NEJBQ2hCQyxHQUFHLEVBQUUsQ0FBUzs0QkFDZEMsSUFBSSxFQUFFLENBQVM7NEJBQ2ZDLE1BQU0sRUFBRSxDQUFTOzRCQUNqQkMsTUFBTSxFQUFDLElBQUk7d0JBQ2IsQ0FBQzs7OztZQUlKZCxRQUFROytGQUVKUixpREFBUTtvQkFBQ3VCLE1BQU0sRUFBRWhCLFFBQVE7b0JBQUVELElBQUksRUFBRUEsSUFBSTtvQkFBRUgsRUFBRSxFQUFFQSxFQUFFOzs7Ozs7OztpQkFHaERHLElBQUk7WUFFTEksSUFBSSxLQUFHTixNQUFNLDBFQUNYb0IsQ0FBRztnQkFBQ1osU0FBUyxFQUFDLENBQW1COzs7Ozs7Ozt5RkFDL0JhLENBQU07d0JBQUNDLE9BQU8sRUFBRXhCLFNBQVM7Ozs7Ozs7a0NBQUUsQ0FBRTs7eUZBQ3pCdUIsQ0FBRTt3QkFBQ0MsT0FBTyxFQUFFakIsUUFBUTs7Ozs7OztrQ0FBRSxDQUFFOzs7Ozs7O0FBTXJDLGlFQUFlUixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dJdGVtLmpzP2MzMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCJcclxuXHJcbmNvbnN0IE1zZ0l0ZW0gPSAoe1xyXG4gIHN0YXJ0RWRpdCxpZCwgdXNlcklkLHRpbWVzdGFtcCx0ZXh0LCBvblVwZGF0ZSwgaXNFZHRpbmcsIG9uRGVsZXRlLCBteUlkXHJcbn0pID0+KFxyXG4gIDxsaSBjbGFzc05hbWU9XCJtZXNzYWdlc19faXRlbVwiPlxyXG4gICAgPGgzPlxyXG4gICAgICB7dXNlcklkfVxyXG4gICAgICA8c3ViPlxyXG4gICAgICAgIHtuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlRGF0ZVN0cmluZygna28tS1InLHtcclxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcclxuICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgaG91cjEyOnRydWVcclxuICAgICAgICB9KX1cclxuICAgICAgPC9zdWI+XHJcbiAgICA8L2gzPlxyXG4gICAgXHJcbiAgICB7aXNFZHRpbmcgPyAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25VcGRhdGV9IHRleHQ9e3RleHR9IGlkPXtpZH0vPlxyXG4gICAgICA8Lz5cclxuICAgICkgOiAoXHJcbiAgICAgIHRleHRcclxuICAgICl9XHJcbiAgICB7bXlJZD09PXVzZXJJZCAmJiAoICAvL215SWQg656RIHVzZXJJZOuekSDqsJnsnLzrqbQg7JWE656Y7Lac66ClXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZXNfX2J1dHRvbnNcIj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkRlbGV0ZX0+7IKt7KCcPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKX1cclxuICA8L2xpPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dJdGVtIl0sIm5hbWVzIjpbIk1zZ0lucHV0IiwiTXNnSXRlbSIsInN0YXJ0RWRpdCIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsIm9uVXBkYXRlIiwiaXNFZHRpbmciLCJvbkRlbGV0ZSIsIm15SWQiLCJsaSIsImNsYXNzTmFtZSIsImgzIiwic3ViIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiLCJtdXRhdGUiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgItem.js\n");

/***/ }),

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\n\n\n\n\n\n\nconst UserIds = [\n    \"roy\",\n    \"jay\"\n];\nconst getRendomUserId = ()=>UserIds[Math.round(Math.random())]\n; // 랜덤으로 0아니면 1이 나옴 그러면 로이나 제이 중에 하나가 골라짐\nconst MsgList = ()=>{\n    const { query: { userId =\"\"  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { 0: msgs1 , 1: setMsgs  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const { 0: editingId , 1: setEditingId  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const onCreate = async (text)=>{\n        const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"post\", \"/messages\", {\n            text,\n            userId\n        });\n        if (!newMsg) throw Error('없습다.');\n        setMsgs((msgs)=>[\n                newMsg,\n                ...msgs\n            ]\n        );\n    };\n    const onUpdate = async (text, id)=>{\n        const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"put\", `/messages/${id}`, {\n            text,\n            userId\n        });\n        if (!newMsg) throw Error('없습다.');\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === id\n            );\n            if (targetIndex < 0) return;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1, newMsg);\n            return newMsgs;\n        });\n        doneEdit();\n    };\n    const doneEdit = ()=>setEditingId(null)\n    ;\n    const getMessages = async ()=>{\n        const msgs = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"get\", \"/messages\");\n        setMsgs(msgs);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getMessages();\n    }, []);\n    const onDelete = async (id)=>{\n        const receiveidId = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('delete', `/messages/${id}`, {\n            params: {\n                userId\n            }\n        }); //클라이언트에서는 파람스로 보내지만 서버에서는 쿼리로 받아짐\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === receiveidId.toString()\n            );\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: onCreate,\n                __source: {\n                    fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgList.js\",\n                    lineNumber: 57,\n                    columnNumber: 7\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                className: \"messages\",\n                __source: {\n                    fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgList.js\",\n                    lineNumber: 58,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: msgs1.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        ...item,\n                        onUpdate: onUpdate,\n                        onDelete: ()=>onDelete(item.id)\n                        ,\n                        startEdit: ()=>setEditingId(item.id)\n                        ,\n                        isEdting: editingId === item.id,\n                        myId: userId,\n                        __source: {\n                            fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\components\\\\MsgList.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        },\n                        __self: undefined\n                    }, item.id)\n                )\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgList);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNVLFdBQVcsR0FBR1YsSUFBSSxDQUFDVyxTQUFTLEVBQUVDLEdBQUcsR0FBS0EsR0FBRyxDQUFDSCxFQUFFLEtBQUtTLFdBQVcsQ0FBQ0UsUUFBUTs7WUFDM0UsRUFBRSxFQUFFVixXQUFXLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQ1YsSUFBSTtZQUNoQyxLQUFLLENBQUNhLE9BQU8sR0FBRyxDQUFDO21CQUFHYixJQUFJO1lBQUEsQ0FBQztZQUN6QmEsT0FBTyxDQUFDQyxNQUFNLENBQUNKLFdBQVcsRUFBRSxDQUFDO1lBQzdCLE1BQU0sQ0FBQ0csT0FBTztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU07O2lGQUVEMUIsaURBQVE7Z0JBQUNrQyxNQUFNLEVBQUVqQixRQUFROzs7Ozs7OztpRkFDekJrQixDQUFFO2dCQUFDQyxTQUFTLEVBQUMsQ0FBVTs7Ozs7OzswQkFDckJ2QixLQUFJLENBQUN3QixHQUFHLEVBQUVDLElBQUksd0VBQ1p2QyxnREFBTzsyQkFFRnVDLElBQUk7d0JBQ1JqQixRQUFRLEVBQUVBLFFBQVE7d0JBQ2xCUyxRQUFRLE1BQVFBLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDaEIsRUFBRTs7d0JBQ2hDaUIsU0FBUyxNQUFRdkIsWUFBWSxDQUFDc0IsSUFBSSxDQUFDaEIsRUFBRTs7d0JBQ3JDa0IsUUFBUSxFQUFFekIsU0FBUyxLQUFLdUIsSUFBSSxDQUFDaEIsRUFBRTt3QkFDL0JtQixJQUFJLEVBQUU3QixNQUFNOzs7Ozs7O3VCQU5QMEIsSUFBSSxDQUFDaEIsRUFBRTs7Ozs7QUFZeEIsQ0FBQztBQUVELGlFQUFlWixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0xpc3QuanM/MWFmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnSXRlbSBmcm9tIFwiLi9Nc2dJdGVtXCI7XHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgZmV0Y2hlciBmcm9tIFwiLi4vZmV0Y2hlclwiO1xyXG5jb25zdCBVc2VySWRzID0gW1wicm95XCIsIFwiamF5XCJdO1xyXG5jb25zdCBnZXRSZW5kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldOyAvLyDrnpzrjaTsnLzroZwgMOyVhOuLiOuptCAx7J20IOuCmOyYtCDqt7jrn6zrqbQg66Gc7J2064KYIOygnOydtCDspJHsl5Ag7ZWY64KY6rCAIOqzqOudvOynkFxyXG5cclxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3Qge3F1ZXJ5OiB7IHVzZXJJZCA9IFwiXCIgfX0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBvbkNyZWF0ZSA9IGFzeW5jIHRleHQgPT4ge1xyXG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcihcInBvc3RcIiwgXCIvbWVzc2FnZXNcIiwgeyB0ZXh0LCB1c2VySWQgfSk7XHJcbiAgICBpZighbmV3TXNnKSB0aHJvdyBFcnJvcign7JeG7Iq164ukLicpXHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbbmV3TXNnLCAuLi5tc2dzXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25VcGRhdGUgPSBhc3luYyAodGV4dCwgaWQpID0+IHtcclxuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoXCJwdXRcIixgL21lc3NhZ2VzLyR7aWR9YCx7dGV4dCx1c2VySWR9KTtcclxuICAgIGlmKCFuZXdNc2cpIHRocm93IEVycm9yKCfsl4bsirXri6QuJylcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwgbmV3TXNnKVxyXG4gICAgICByZXR1cm4gbmV3TXNncztcclxuICAgIH0pO1xyXG4gICAgZG9uZUVkaXQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKTtcclxuXHJcbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBtc2dzID0gYXdhaXQgZmV0Y2hlcihcImdldFwiLCBcIi9tZXNzYWdlc1wiKTtcclxuICAgIHNldE1zZ3MobXNncyk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0TWVzc2FnZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgaWQgPT4ge1xyXG4gICAgY29uc3QgcmVjZWl2ZWlkSWQgPSBhd2FpdCBmZXRjaGVyKCdkZWxldGUnLCBgL21lc3NhZ2VzLyR7aWR9YCx7cGFyYW1zOiB7dXNlcklkfSB9KTsgLy/tgbTrnbzsnbTslrjtirjsl5DshJzripQg7YyM656M7Iqk66GcIOuztOuCtOyngOunjCDshJzrsoTsl5DshJzripQg7L+866as66GcIOuwm+yVhOynkFxyXG4gICAgc2V0TXNncyhtc2dzID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IHJlY2VpdmVpZElkLnRvU3RyaW5nKCkpO1xyXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcclxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xyXG4gICAgICByZXR1cm4gbmV3TXNncztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAge21zZ3MubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8TXNnSXRlbVxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIHsuLi5pdGVtfVxyXG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZShpdGVtLmlkKX1cclxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoaXRlbS5pZCl9XHJcbiAgICAgICAgICAgIGlzRWR0aW5nPXtlZGl0aW5nSWQgPT09IGl0ZW0uaWR9XHJcbiAgICAgICAgICAgIG15SWQ9e3VzZXJJZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcclxuIl0sIm5hbWVzIjpbIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiZmV0Y2hlciIsIlVzZXJJZHMiLCJnZXRSZW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJNc2dMaXN0IiwicXVlcnkiLCJ1c2VySWQiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsIm9uQ3JlYXRlIiwidGV4dCIsIm5ld01zZyIsIkVycm9yIiwib25VcGRhdGUiLCJpZCIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0IiwiZ2V0TWVzc2FnZXMiLCJvbkRlbGV0ZSIsInJlY2VpdmVpZElkIiwicGFyYW1zIiwidG9TdHJpbmciLCJtdXRhdGUiLCJ1bCIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJzdGFydEVkaXQiLCJpc0VkdGluZyIsIm15SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ }),

/***/ "./fetcher.js":
/*!********************!*\
  !*** ./fetcher.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = \"http://localhost:8000\";\nconst fetcher = async (method, url, ...rest)=>{\n    const res = await (axios__WEBPACK_IMPORTED_MODULE_0___default())[method](url, ...rest); // 인자가 하나 또는 두개가 들어올수있는 처리\n    // ex) get은 하나로 보통 받고 post나 put은 data({~~}) 이런식으로 두개를 받음\n    return res.data;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZXRjaGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUV6QkEsK0RBQXNCLEdBQUcsQ0FBdUI7QUFFaEQsS0FBSyxDQUFDRyxPQUFPLFVBQVVDLE1BQU0sRUFBRUMsR0FBRyxLQUFLQyxJQUFJLEdBQUssQ0FBQztJQUMvQyxLQUFLLENBQUNDLEdBQUcsR0FBRyxLQUFLLENBQUNQLDhDQUFLLENBQUNJLE1BQU0sRUFBRUMsR0FBRyxLQUFLQyxJQUFJLEVBQUcsQ0FBMEIsRUFBb0M7SUFDekUsRUFBb0I7SUFDeEQsTUFBTSxDQUFDQyxHQUFHLENBQUNDLElBQUk7QUFDakIsQ0FBQztBQUVELGlFQUFlTCxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9mZXRjaGVyLmpzPzE4YTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCI7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKG1ldGhvZCwgdXJsLCAuLi5yZXN0KSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3NbbWV0aG9kXSh1cmwsIC4uLnJlc3QpOyAvLyDsnbjsnpDqsIAg7ZWY64KYIOuYkOuKlCDrkZDqsJzqsIAg65Ok7Ja07Jis7IiY7J6I64qUIOyymOumrFxyXG4gIC8vIGV4KSBnZXTsnYAg7ZWY64KY66GcIOuztO2GtSDrsJvqs6AgcG9zdOuCmCBwdXTsnYAgZGF0YSh7fn59KSDsnbTrn7Dsi53snLzroZwg65GQ6rCc66W8IOuwm+ydjFxyXG4gIHJldHVybiByZXMuZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoZXI7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsImZldGNoZXIiLCJtZXRob2QiLCJ1cmwiLCJyZXN0IiwicmVzIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./fetcher.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MsgList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MsgList */ \"./components/MsgList.js\");\n\n\nconst Home = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 5,\n                    columnNumber: 5\n                },\n                __self: undefined,\n                children: \"SIMPLE SMS\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MsgList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\work\\\\full-stack-tutorial\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 6,\n                    columnNumber: 5\n                },\n                __self: undefined\n            })\n        ]\n    })\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUUzQyxLQUFLLENBQUNDLElBQUk7O2lGQUVMQyxDQUFFOzs7Ozs7OzBCQUFDLENBQVU7O2lGQUNiRiwyREFBTzs7Ozs7Ozs7Ozs7QUFJWixpRUFBZUMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXNnTGlzdFwiXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4oXHJcbiAgPD5cclxuICAgIDxoMT5TSU1QTEUgU01TPC9oMT5cclxuICAgIDxNc2dMaXN0Lz5cclxuICA8Lz5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJuYW1lcyI6WyJNc2dMaXN0IiwiSG9tZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();