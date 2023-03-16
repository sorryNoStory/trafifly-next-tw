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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var _components_NavMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavMobile */ \"./components/NavMobile.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Header = function(param) {\n    var headerData = param.headerData, navData = param.navData;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), header = ref[0], setHeader = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), navMobile = ref1[0], setNavMobile = ref1[1];\n    var logoImgV1 = headerData.logoImgV1, logoImgV2 = headerData.logoImgV2, btnText = headerData.btnText;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // scroll event\n        window.addEventListener(\"scroll\", function() {\n            window.scrollY > 80 ? setHeader(true) : setHeader(false);\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"\".concat(header ? \"bg-white px-3 py-3 rounded-md drop-shadow-primary\" : \"py-[40px] fixed z-20\", \"  w-full left-0 right-0 mx-auto max-w-[90vw] lg:max-w-[1120px] flex justify-between items-center transition-all duration-500\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"\".concat(header ? logoImgV2 : logoImgV1),\n                        width: header ? 180 : 212,\n                        height: 50\n                    }, void 0, false, {\n                        fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden lg:flex gap-x-[96px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        navData: navData,\n                        header: header\n                    }, void 0, false, {\n                        fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"#contact\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn\",\n                                children: btnText\n                            }, void 0, false, {\n                                fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: function() {\n                    return setNavMobile(!navMobile);\n                },\n                className: \"lg:hidden cursor-pointer\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__.HiMenu, {\n                    className: \"text-4xl text-accent-hover\"\n                }, void 0, false, {\n                    fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(navMobile ? \"max-h-[154px]\" : \"max-h-0\", \" lg:hidden absolute top-full mt-2 w-full left-0 rounded-md overflow-hidden shadow-2xl  transition-all\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavMobile__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    navData: navData\n                }, void 0, false, {\n                    fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"9ip0VbeygKHB3N51NfY26IFA9RQ=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQW1EO0FBQ3BCO0FBQ0Y7QUFDTztBQUNZO0FBQ1I7QUFFeEMsSUFBTVEsTUFBTSxHQUFHLGdCQUE2QjtRQUExQkMsVUFBVSxTQUFWQSxVQUFVLEVBQUVDLE9BQU8sU0FBUEEsT0FBTzs7SUFDbkMsSUFBNEJULEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBcENVLE1BQU0sR0FBZVYsR0FBZSxHQUE5QixFQUFFVyxTQUFTLEdBQUlYLEdBQWUsR0FBbkI7SUFDeEIsSUFBa0NBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBMUNZLFNBQVMsR0FBa0JaLElBQWUsR0FBakMsRUFBRWEsWUFBWSxHQUFJYixJQUFlLEdBQW5CO0lBQzlCLElBQVFjLFNBQVMsR0FBeUJOLFVBQVUsQ0FBNUNNLFNBQVMsRUFBRUMsU0FBUyxHQUFjUCxVQUFVLENBQWpDTyxTQUFTLEVBQUVDLE9BQU8sR0FBS1IsVUFBVSxDQUF0QlEsT0FBTztJQUVyQ2YsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsZUFBZTtRQUNmZ0IsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsV0FBTTtZQUN0Q0QsTUFBTSxDQUFDRSxPQUFPLEdBQUcsRUFBRSxHQUFHUixTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUdBLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxRCxDQUFDLENBQUM7S0FDSixDQUFDLENBQUM7SUFFSCxxQkFDRSw4REFBQ0QsUUFBTTtRQUNMVSxTQUFTLEVBQUUsRUFBQyxDQUlYLE1BQTRILENBSDNIVixNQUFNLEdBQ0YsbURBQW1ELEdBQ25ELHNCQUFzQixFQUMzQiw4SEFBNEgsQ0FBQzs7MEJBRzlILDhEQUFDUCxrREFBSTtnQkFBQ2tCLElBQUksRUFBRSxHQUFHOzBCQUNiLDRFQUFDQyxHQUFDOzhCQUNBLDRFQUFDcEIsbURBQUs7d0JBQ0pxQixHQUFHLEVBQUUsRUFBQyxDQUFpQyxPQUEvQmIsTUFBTSxHQUFHSyxTQUFTLEdBQUdELFNBQVMsQ0FBRTt3QkFDeENVLEtBQUssRUFBRWQsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHO3dCQUN6QmUsTUFBTSxFQUFFLEVBQUU7Ozs7OzZCQUNWOzs7Ozt5QkFDQTs7Ozs7cUJBQ0M7MEJBRVAsOERBQUNDLEtBQUc7Z0JBQUNOLFNBQVMsRUFBQyw2QkFBNkI7O2tDQUUxQyw4REFBQ2hCLHVEQUFHO3dCQUFDSyxPQUFPLEVBQUVBLE9BQU87d0JBQUVDLE1BQU0sRUFBRUEsTUFBTTs7Ozs7NkJBQUk7a0NBRXpDLDhEQUFDUCxrREFBSTt3QkFBQ2tCLElBQUksRUFBRSxVQUFVO2tDQUNwQiw0RUFBQ0MsR0FBQztzQ0FDQSw0RUFBQ0ssUUFBTTtnQ0FBQ1AsU0FBUyxFQUFDLEtBQUs7MENBQUVKLE9BQU87Ozs7O3FDQUFVOzs7OztpQ0FDeEM7Ozs7OzZCQUNDOzs7Ozs7cUJBQ0g7MEJBR04sOERBQUNVLEtBQUc7Z0JBQ0ZFLE9BQU8sRUFBRTsyQkFBTWYsWUFBWSxDQUFDLENBQUNELFNBQVMsQ0FBQztpQkFBQTtnQkFDdkNRLFNBQVMsRUFBQywwQkFBMEI7MEJBRXBDLDRFQUFDZCxrREFBTTtvQkFBQ2MsU0FBUyxFQUFDLDRCQUE0Qjs7Ozs7eUJBQUc7Ozs7O3FCQUM3QzswQkFHTiw4REFBQ00sS0FBRztnQkFDRk4sU0FBUyxFQUFFLEVBQUMsQ0FFWCxNQUFxRyxDQURwR1IsU0FBUyxHQUFHLGVBQWUsR0FBRyxTQUFTLEVBQ3hDLHVHQUFxRyxDQUFDOzBCQUV2Ryw0RUFBQ1AsNkRBQVM7b0JBQUNJLE9BQU8sRUFBRUEsT0FBTzs7Ozs7eUJBQUk7Ozs7O3FCQUMzQjs7Ozs7O2FBQ0MsQ0FDVDtDQUNIO0dBNURLRixNQUFNO0FBQU5BLEtBQUFBLE1BQU07QUE4RFosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2XCI7XG5pbXBvcnQgTmF2TW9iaWxlIGZyb20gXCIuLi9jb21wb25lbnRzL05hdk1vYmlsZVwiO1xuaW1wb3J0IHsgSGlNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XG5cbmNvbnN0IEhlYWRlciA9ICh7IGhlYWRlckRhdGEsIG5hdkRhdGEgfSkgPT4ge1xuICBjb25zdCBbaGVhZGVyLCBzZXRIZWFkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmF2TW9iaWxlLCBzZXROYXZNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IGxvZ29JbWdWMSwgbG9nb0ltZ1YyLCBidG5UZXh0IH0gPSBoZWFkZXJEYXRhO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gc2Nyb2xsIGV2ZW50XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgd2luZG93LnNjcm9sbFkgPiA4MCA/IHNldEhlYWRlcih0cnVlKSA6IHNldEhlYWRlcihmYWxzZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlclxuICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgaGVhZGVyXG4gICAgICAgICAgPyBcImJnLXdoaXRlIHB4LTMgcHktMyByb3VuZGVkLW1kIGRyb3Atc2hhZG93LXByaW1hcnlcIlxuICAgICAgICAgIDogXCJweS1bNDBweF0gZml4ZWQgei0yMFwiXG4gICAgICB9ICB3LWZ1bGwgbGVmdC0wIHJpZ2h0LTAgbXgtYXV0byBtYXgtdy1bOTB2d10gbGc6bWF4LXctWzExMjBweF0gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMGB9XG4gICAgPlxuICAgICAgey8qIGxvZ28gdjEgKi99XG4gICAgICA8TGluayBocmVmPXtcIi9cIn0+XG4gICAgICAgIDxhPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtgJHtoZWFkZXIgPyBsb2dvSW1nVjIgOiBsb2dvSW1nVjF9YH1cbiAgICAgICAgICAgIHdpZHRoPXtoZWFkZXIgPyAxODAgOiAyMTJ9XG4gICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIHsvKiBuYXYgJiBidXR0b24gd3JhcHBlciAtIGluaXRpYWxseSBoaWRkZW4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IGdhcC14LVs5NnB4XVwiPlxuICAgICAgICB7LyogbmF2ICovfVxuICAgICAgICA8TmF2IG5hdkRhdGE9e25hdkRhdGF9IGhlYWRlcj17aGVhZGVyfSAvPlxuICAgICAgICB7LyogYnRuICovfVxuICAgICAgICA8TGluayBocmVmPXtcIiNjb250YWN0XCJ9PlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj57YnRuVGV4dH08L2J1dHRvbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogbmF2IG1lbnUgYnRuLSBoaWRlIG9uIGxhcmdlIHNjcmVlbnMgKi99XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE5hdk1vYmlsZSghbmF2TW9iaWxlKX1cbiAgICAgICAgY2xhc3NOYW1lPVwibGc6aGlkZGVuIGN1cnNvci1wb2ludGVyXCJcbiAgICAgID5cbiAgICAgICAgPEhpTWVudSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB0ZXh0LWFjY2VudC1ob3ZlclwiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIG5hdiBtb2JpbGUgLSBoaWRlIG9uIGxhcmdlIHNjcmVlbnMgKi99XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgbmF2TW9iaWxlID8gXCJtYXgtaC1bMTU0cHhdXCIgOiBcIm1heC1oLTBcIlxuICAgICAgICB9IGxnOmhpZGRlbiBhYnNvbHV0ZSB0b3AtZnVsbCBtdC0yIHctZnVsbCBsZWZ0LTAgcm91bmRlZC1tZCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LTJ4bCAgdHJhbnNpdGlvbi1hbGxgfVxuICAgICAgPlxuICAgICAgICA8TmF2TW9iaWxlIG5hdkRhdGE9e25hdkRhdGF9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJMaW5rIiwiTmF2IiwiTmF2TW9iaWxlIiwiSGlNZW51IiwiSGVhZGVyIiwiaGVhZGVyRGF0YSIsIm5hdkRhdGEiLCJoZWFkZXIiLCJzZXRIZWFkZXIiLCJuYXZNb2JpbGUiLCJzZXROYXZNb2JpbGUiLCJsb2dvSW1nVjEiLCJsb2dvSW1nVjIiLCJidG5UZXh0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFkiLCJjbGFzc05hbWUiLCJocmVmIiwiYSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiZGl2IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});