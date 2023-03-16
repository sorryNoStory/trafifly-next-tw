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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var _components_NavMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavMobile */ \"./components/NavMobile.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Header = function(param) {\n    var headerData = param.headerData, navData = param.navData;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), header = ref[0], setHeader = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), navMobile = ref1[0], setNavMobile = ref1[1];\n    var logoImgV1 = headerData.logoImgV1, logoImgV2 = headerData.logoImgV2, btnText = headerData.btnText;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // scroll event\n        window.addEventListener(\"scroll\", function() {\n            window.scrollY > 80 ? setHeader(true) : setHeader(false);\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"\".concat(header ? \"bg-white px-3 py-3 rounded-md drop-shadow-primary\" : \"py-[40px]\", \" w-left-0 right-0 mx-auto max-w-[90vw] lg:max-w-[1120px] flex justify-between items-center transition-all duration-500\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"\".concat(header ? logoImgV2 : logoImgV1),\n                        width: header ? 180 : 212,\n                        height: 50\n                    }, void 0, false, {\n                        fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden lg:flex gap-x-[96px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        navData: navData,\n                        header: header\n                    }, void 0, false, {\n                        fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"#contact\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn\",\n                                children: btnText\n                            }, void 0, false, {\n                                fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: function() {\n                    return setNavMobile(!navMobile);\n                },\n                className: \"lg:hidden cursor-pointer\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__.HiMenu, {\n                    className: \"text-4xl text-accent-hover\"\n                }, void 0, false, {\n                    fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(navMobile ? \"max-h-[154px]\" : \"max-h-0\", \" lg:hidden absolute top-full mt-2 w-full left-0 rounded-md overflow-hidden shadow-2xl  transition-all\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavMobile__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    navData: navData\n                }, void 0, false, {\n                    fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Medusa/Desktop/Portflio/trafifly-main/components/Header.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"9ip0VbeygKHB3N51NfY26IFA9RQ=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQW1EO0FBQ3BCO0FBQ0Y7QUFDTztBQUNZO0FBQ1I7QUFFeEMsSUFBTVEsTUFBTSxHQUFHLGdCQUE2QjtRQUExQkMsVUFBVSxTQUFWQSxVQUFVLEVBQUVDLE9BQU8sU0FBUEEsT0FBTzs7SUFDbkMsSUFBNEJULEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBcENVLE1BQU0sR0FBZVYsR0FBZSxHQUE5QixFQUFFVyxTQUFTLEdBQUlYLEdBQWUsR0FBbkI7SUFDeEIsSUFBa0NBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBMUNZLFNBQVMsR0FBa0JaLElBQWUsR0FBakMsRUFBRWEsWUFBWSxHQUFJYixJQUFlLEdBQW5CO0lBQzlCLElBQVFjLFNBQVMsR0FBeUJOLFVBQVUsQ0FBNUNNLFNBQVMsRUFBRUMsU0FBUyxHQUFjUCxVQUFVLENBQWpDTyxTQUFTLEVBQUVDLE9BQU8sR0FBS1IsVUFBVSxDQUF0QlEsT0FBTztJQUVyQ2YsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsZUFBZTtRQUNmZ0IsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsV0FBTTtZQUN0Q0QsTUFBTSxDQUFDRSxPQUFPLEdBQUcsRUFBRSxHQUFHUixTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUdBLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxRCxDQUFDLENBQUM7S0FDSixDQUFDLENBQUM7SUFFSCxxQkFDRSw4REFBQ0QsUUFBTTtRQUNMVSxTQUFTLEVBQUUsRUFBQyxDQUlYLE1BQXNILENBSHJIVixNQUFNLEdBQ0YsbURBQW1ELEdBQ25ELFdBQVcsRUFDaEIsd0hBQXNILENBQUM7OzBCQUd4SCw4REFBQ1Asa0RBQUk7Z0JBQUNrQixJQUFJLEVBQUUsR0FBRzswQkFDYiw0RUFBQ0MsR0FBQzs4QkFDQSw0RUFBQ3BCLG1EQUFLO3dCQUNKcUIsR0FBRyxFQUFFLEVBQUMsQ0FBaUMsT0FBL0JiLE1BQU0sR0FBR0ssU0FBUyxHQUFHRCxTQUFTLENBQUU7d0JBQ3hDVSxLQUFLLEVBQUVkLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRzt3QkFDekJlLE1BQU0sRUFBRSxFQUFFOzs7Ozs2QkFDVjs7Ozs7eUJBQ0E7Ozs7O3FCQUNDOzBCQUVQLDhEQUFDQyxLQUFHO2dCQUFDTixTQUFTLEVBQUMsNkJBQTZCOztrQ0FFMUMsOERBQUNoQix1REFBRzt3QkFBQ0ssT0FBTyxFQUFFQSxPQUFPO3dCQUFFQyxNQUFNLEVBQUVBLE1BQU07Ozs7OzZCQUFJO2tDQUV6Qyw4REFBQ1Asa0RBQUk7d0JBQUNrQixJQUFJLEVBQUUsVUFBVTtrQ0FDcEIsNEVBQUNDLEdBQUM7c0NBQ0EsNEVBQUNLLFFBQU07Z0NBQUNQLFNBQVMsRUFBQyxLQUFLOzBDQUFFSixPQUFPOzs7OztxQ0FBVTs7Ozs7aUNBQ3hDOzs7Ozs2QkFDQzs7Ozs7O3FCQUNIOzBCQUdOLDhEQUFDVSxLQUFHO2dCQUNGRSxPQUFPLEVBQUU7MkJBQU1mLFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7aUJBQUE7Z0JBQ3ZDUSxTQUFTLEVBQUMsMEJBQTBCOzBCQUVwQyw0RUFBQ2Qsa0RBQU07b0JBQUNjLFNBQVMsRUFBQyw0QkFBNEI7Ozs7O3lCQUFHOzs7OztxQkFDN0M7MEJBR04sOERBQUNNLEtBQUc7Z0JBQ0ZOLFNBQVMsRUFBRSxFQUFDLENBRVgsTUFBcUcsQ0FEcEdSLFNBQVMsR0FBRyxlQUFlLEdBQUcsU0FBUyxFQUN4Qyx1R0FBcUcsQ0FBQzswQkFFdkcsNEVBQUNQLDZEQUFTO29CQUFDSSxPQUFPLEVBQUVBLE9BQU87Ozs7O3lCQUFJOzs7OztxQkFDM0I7Ozs7OzthQUNDLENBQ1Q7Q0FDSDtHQTVES0YsTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBOERaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL05hdlwiO1xuaW1wb3J0IE5hdk1vYmlsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZNb2JpbGVcIjtcbmltcG9ydCB7IEhpTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xuXG5jb25zdCBIZWFkZXIgPSAoeyBoZWFkZXJEYXRhLCBuYXZEYXRhIH0pID0+IHtcbiAgY29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW25hdk1vYmlsZSwgc2V0TmF2TW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBsb2dvSW1nVjEsIGxvZ29JbWdWMiwgYnRuVGV4dCB9ID0gaGVhZGVyRGF0YTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHNjcm9sbCBldmVudFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgIHdpbmRvdy5zY3JvbGxZID4gODAgPyBzZXRIZWFkZXIodHJ1ZSkgOiBzZXRIZWFkZXIoZmFsc2UpO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXJcbiAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgIGhlYWRlclxuICAgICAgICAgID8gXCJiZy13aGl0ZSBweC0zIHB5LTMgcm91bmRlZC1tZCBkcm9wLXNoYWRvdy1wcmltYXJ5XCJcbiAgICAgICAgICA6IFwicHktWzQwcHhdXCJcbiAgICAgIH0gdy1sZWZ0LTAgcmlnaHQtMCBteC1hdXRvIG1heC13LVs5MHZ3XSBsZzptYXgtdy1bMTEyMHB4XSBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwYH1cbiAgICA+XG4gICAgICB7LyogbG9nbyB2MSAqL31cbiAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cbiAgICAgICAgPGE+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e2Ake2hlYWRlciA/IGxvZ29JbWdWMiA6IGxvZ29JbWdWMX1gfVxuICAgICAgICAgICAgd2lkdGg9e2hlYWRlciA/IDE4MCA6IDIxMn1cbiAgICAgICAgICAgIGhlaWdodD17NTB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgey8qIG5hdiAmIGJ1dHRvbiB3cmFwcGVyIC0gaW5pdGlhbGx5IGhpZGRlbiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggZ2FwLXgtWzk2cHhdXCI+XG4gICAgICAgIHsvKiBuYXYgKi99XG4gICAgICAgIDxOYXYgbmF2RGF0YT17bmF2RGF0YX0gaGVhZGVyPXtoZWFkZXJ9IC8+XG4gICAgICAgIHsvKiBidG4gKi99XG4gICAgICAgIDxMaW5rIGhyZWY9e1wiI2NvbnRhY3RcIn0+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPntidG5UZXh0fTwvYnV0dG9uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBuYXYgbWVudSBidG4tIGhpZGUgb24gbGFyZ2Ugc2NyZWVucyAqL31cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TmF2TW9iaWxlKCFuYXZNb2JpbGUpfVxuICAgICAgICBjbGFzc05hbWU9XCJsZzpoaWRkZW4gY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgPlxuICAgICAgICA8SGlNZW51IGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtYWNjZW50LWhvdmVyXCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogbmF2IG1vYmlsZSAtIGhpZGUgb24gbGFyZ2Ugc2NyZWVucyAqL31cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICBuYXZNb2JpbGUgPyBcIm1heC1oLVsxNTRweF1cIiA6IFwibWF4LWgtMFwiXG4gICAgICAgIH0gbGc6aGlkZGVuIGFic29sdXRlIHRvcC1mdWxsIG10LTIgdy1mdWxsIGxlZnQtMCByb3VuZGVkLW1kIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctMnhsICB0cmFuc2l0aW9uLWFsbGB9XG4gICAgICA+XG4gICAgICAgIDxOYXZNb2JpbGUgbmF2RGF0YT17bmF2RGF0YX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIkxpbmsiLCJOYXYiLCJOYXZNb2JpbGUiLCJIaU1lbnUiLCJIZWFkZXIiLCJoZWFkZXJEYXRhIiwibmF2RGF0YSIsImhlYWRlciIsInNldEhlYWRlciIsIm5hdk1vYmlsZSIsInNldE5hdk1vYmlsZSIsImxvZ29JbWdWMSIsImxvZ29JbWdWMiIsImJ0blRleHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsWSIsImNsYXNzTmFtZSIsImhyZWYiLCJhIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});