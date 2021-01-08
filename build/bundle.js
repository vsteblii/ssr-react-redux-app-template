/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _app = __webpack_require__(/*! ./app */ \"./src/client/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _HomePage = __webpack_require__(/*! ./pages/HomePage */ \"./src/client/pages/HomePage.js\");\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _UsersListPage = __webpack_require__(/*! ./pages/UsersListPage */ \"./src/client/pages/UsersListPage.js\");\n\nvar _UsersListPage2 = _interopRequireDefault(_UsersListPage);\n\nvar _NotFoundPage = __webpack_require__(/*! ./pages/NotFoundPage */ \"./src/client/pages/NotFoundPage.js\");\n\nvar _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [_extends({}, _app2.default, {\n    routes: [_extends({}, _HomePage2.default, {\n        path: '/',\n        exact: true\n    }), _extends({}, _UsersListPage2.default, {\n        path: '/users'\n    }), _extends({}, _NotFoundPage2.default)]\n})];\n\n//# sourceURL=webpack://react-ssr/./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar FETCH_USERS = exports.FETCH_USERS = 'fetch_users';\nvar fetchUsers = exports.fetchUsers = function fetchUsers() {\n    return function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, request) {\n            var res;\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            _context.next = 2;\n                            return request.get('/api/v1/user/1');\n\n                        case 2:\n                            res = _context.sent;\n\n\n                            dispatch({\n                                type: FETCH_USERS,\n                                payload: res\n                            });\n\n                        case 4:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2, _x3) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\n\nvar ANONYMOUSE_LOGIN = exports.ANONYMOUSE_LOGIN = 'anonymouse_login';\nvar anonymouseLogin = exports.anonymouseLogin = function anonymouseLogin() {\n    return function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, request) {\n            var res;\n            return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                while (1) {\n                    switch (_context2.prev = _context2.next) {\n                        case 0:\n                            _context2.next = 2;\n                            return request.get('/api/v1/login/anonymous');\n\n                        case 2:\n                            res = _context2.sent;\n\n\n                            dispatch({\n                                type: ANONYMOUSE_LOGIN,\n                                payload: res\n                            });\n\n                        case 4:\n                        case 'end':\n                            return _context2.stop();\n                    }\n                }\n            }, _callee2, undefined);\n        }));\n\n        return function (_x4, _x5, _x6) {\n            return _ref2.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/actions/index.js?");

/***/ }),

/***/ "./src/client/app.js":
/*!***************************!*\
  !*** ./src/client/app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _header = __webpack_require__(/*! ./components/header */ \"./src/client/components/header.js\");\n\nvar _header2 = _interopRequireDefault(_header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(_ref) {\n    var route = _ref.route;\n\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_header2.default, null),\n        (0, _reactRouterConfig.renderRoutes)(route.routes)\n    );\n};\n\nexports.default = {\n    component: App\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/app.js?");

/***/ }),

/***/ "./src/client/components/header.js":
/*!*****************************************!*\
  !*** ./src/client/components/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/' },\n            'React SSR'\n        ),\n        _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/users' },\n            'Users'\n        )\n    );\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/components/header.js?");

/***/ }),

/***/ "./src/client/pages/HomePage.js":
/*!**************************************!*\
  !*** ./src/client/pages/HomePage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n    return _react2.default.createElement(\n        'div',\n        null,\n        'Home',\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    return console.log('fdfs');\n                } },\n            'teststs'\n        )\n    );\n};\n\nexports.default = {\n    component: Home\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/HomePage.js?");

/***/ }),

/***/ "./src/client/pages/NotFoundPage.js":
/*!******************************************!*\
  !*** ./src/client/pages/NotFoundPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NotFoundPage = function NotFoundPage(_ref) {\n    var _ref$staticContext = _ref.staticContext,\n        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;\n\n    staticContext.notFound = true;\n    return _react2.default.createElement(\n        'h1',\n        null,\n        'Ooops, route not found.'\n    );\n};\n\nexports.default = {\n    component: NotFoundPage\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/NotFoundPage.js?");

/***/ }),

/***/ "./src/client/pages/UsersListPage.js":
/*!*******************************************!*\
  !*** ./src/client/pages/UsersListPage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nvar Actions = _interopRequireWildcard(_actions);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar loadData = function loadData(store) {\n    return store.dispatch(Actions.fetchUsers());\n};\n\nvar UsersList = function UsersList() {\n    var dispatch = (0, _reactRedux.useDispatch)();\n    var user = (0, _reactRedux.useSelector)(function (state) {\n        return state.users.result;\n    }) || null;\n    console.log('USERSSSSS, ', user);\n\n    _react2.default.useEffect(function () {\n        dispatch(Actions.fetchUsers());\n    }, []);\n\n    return _react2.default.createElement(\n        'div',\n        null,\n        user ? user.id : null\n    );\n};\n\nexports.default = {\n    component: UsersList,\n    loadData: loadData\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/UsersListPage.js?");

/***/ }),

/***/ "./src/client/reducers/authReducer.js":
/*!********************************************!*\
  !*** ./src/client/reducers/authReducer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _actions.ANONYMOUSE_LOGIN:\n            return action.payload.data;\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/reducers/authReducer.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _usersReducer = __webpack_require__(/*! ./usersReducer */ \"./src/client/reducers/usersReducer.js\");\n\nvar _usersReducer2 = _interopRequireDefault(_usersReducer);\n\nvar _authReducer = __webpack_require__(/*! ./authReducer */ \"./src/client/reducers/authReducer.js\");\n\nvar _authReducer2 = _interopRequireDefault(_authReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n    users: _usersReducer2.default,\n    auth: _authReducer2.default\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/usersReducer.js":
/*!*********************************************!*\
  !*** ./src/client/reducers/usersReducer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _actions.FETCH_USERS:\n            return action.payload.data;\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/reducers/usersReducer.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.getConfig = exports.validateEnvVariables = exports.isTest = exports.isDev = exports.isProd = undefined;\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _ = _interopRequireWildcard(_lodash);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar path = _interopRequireWildcard(_path);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar env = process.env;\n\nif (false) { var dotenv; }\n\nvar DEFAULT_API_URL = 'https://scratchmymap.com';\nvar configurations = {\n  DEV: {\n    API_URL: env.NODE_API_URL || 'http://localhost'\n  },\n  TEST: {\n    API_URL: env.NODE_API_URL || DEFAULT_API_URL\n  },\n  PRODUCTION: {\n    API_URL: env.NODE_API_URL || DEFAULT_API_URL\n  }\n};\n\nvar getEnvConfig = function getEnvConfig() {\n  var config = configurations.DEV;\n\n  switch (\"development\") {\n    case 'test':\n      config = configurations.TEST;\n      break;\n    case 'production':\n      config = configurations.PRODUCTION;\n      break;\n  }\n\n  return config;\n};\n\nvar isProd = exports.isProd = function isProd() {\n  return \"development\" === 'production';\n};\n\nvar isDev = exports.isDev = function isDev() {\n  return \"development\" === 'development';\n};\n\nvar isTest = exports.isTest = function isTest() {\n  return \"development\" === 'test';\n};\n\nvar validateEnvVariables = exports.validateEnvVariables = function validateEnvVariables() {\n  _.forOwn(configurations.DEV, function (val, key) {\n    if (_.isUndefined(val) || !val) {\n      console.warn('DEV: ENV variable check fail for ' + key + ':', val);\n    }\n\n    var testVal = configurations.TEST[key];\n    if (_.isUndefined(testVal) || !testVal) {\n      console.warn('TEST: ENV variable check fail for ' + key + ':', testVal);\n    }\n\n    var prodVal = configurations.PRODUCTION[key];\n    if (_.isUndefined(prodVal) || !prodVal) {\n      console.warn('PROD: ENV variable check fail for ' + key + ':', prodVal);\n    }\n  });\n};\n\nvar getConfig = exports.getConfig = function getConfig(name) {\n  var c = getEnvConfig();\n  if (_.isUndefined(c[name])) {\n    return null;\n    // throw new Error(`Environment variable ${name} is not provided!`);\n  }\n  return c[name];\n};\n\nexports.default = getConfig;\n\n//# sourceURL=webpack://react-ssr/./src/config.js?");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reducers = __webpack_require__(/*! ../client/reducers */ \"./src/client/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _request = __webpack_require__(/*! ./request */ \"./src/helpers/request.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req) {\n    var requestInstance = (0, _request2.default)(req);\n    var middlewares = [_reduxThunk2.default.withExtraArgument(requestInstance)];\n    var store = (0, _redux.createStore)(_reducers2.default, {}, _redux.applyMiddleware.apply(undefined, middlewares));\n\n    return store;\n};\n\n//# sourceURL=webpack://react-ssr/./src/helpers/createStore.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ../client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req, store, context) {\n    // const content = '';\n    var content = (0, _server.renderToString)(_react2.default.createElement(\n        _reactRedux.Provider,\n        { store: store },\n        _react2.default.createElement(\n            _reactRouterDom.StaticRouter,\n            { location: req.path, context: context },\n            _react2.default.createElement(\n                'div',\n                null,\n                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n            )\n        )\n    ));\n\n    var stateString = JSON.stringify((0, _serializeJavascript2.default)(store.getState()));\n\n    return '\\n        <html>\\n            <head></head>\\n            <body>\\n                <div id=\"root\">' + content + '</div>\\n                <script>\\n                    window.INITIAL_STATE=JSON.parse(' + stateString + ');\\n                </script>\\n                <script src=\"bundle.js\"></script>\\n            </body>\\n        </html>\\n    ';\n};\n\n//# sourceURL=webpack://react-ssr/./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/helpers/request.js":
/*!********************************!*\
  !*** ./src/helpers/request.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _config = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar createInstance = function createInstance(req) {\n    return _axios2.default.create({\n        baseURL: '' + (0, _config2.default)('API_URL'),\n        headers: {\n            cookies: req.get('cookies') || ''\n        }\n    });\n};\n\nexports.default = createInstance;\n\n//# sourceURL=webpack://react-ssr/./src/helpers/request.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/***/ ((module) => {

eval("module.exports = require(\"@babel/polyfill\");;\n\n//# sourceURL=webpack://react-ssr/external_%22@babel/polyfill%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

eval("module.exports = require(\"axios\");;\n\n//# sourceURL=webpack://react-ssr/external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = require(\"express\");;\n\n//# sourceURL=webpack://react-ssr/external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/***/ ((module) => {

eval("module.exports = require(\"express-http-proxy\");;\n\n//# sourceURL=webpack://react-ssr/external_%22express-http-proxy%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = require(\"lodash\");;\n\n//# sourceURL=webpack://react-ssr/external_%22lodash%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = require(\"path\");;\n\n//# sourceURL=webpack://react-ssr/external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

eval("module.exports = require(\"react\");;\n\n//# sourceURL=webpack://react-ssr/external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = require(\"react-dom/server\");;\n\n//# sourceURL=webpack://react-ssr/external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = require(\"react-redux\");;\n\n//# sourceURL=webpack://react-ssr/external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

eval("module.exports = require(\"react-router-config\");;\n\n//# sourceURL=webpack://react-ssr/external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = require(\"react-router-dom\");;\n\n//# sourceURL=webpack://react-ssr/external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

eval("module.exports = require(\"redux\");;\n\n//# sourceURL=webpack://react-ssr/external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = require(\"redux-thunk\");;\n\n//# sourceURL=webpack://react-ssr/external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

eval("module.exports = require(\"serialize-javascript\");;\n\n//# sourceURL=webpack://react-ssr/external_%22serialize-javascript%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("\n\n__webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _renderer = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nvar _createStore = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ./client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _config = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\nvar port = 3001;\n\n// todo remove proxy\napp.use('/api', (0, _expressHttpProxy2.default)((0, _config2.default)('API_URL')));\napp.use(_express2.default.static('public'));\n\napp.get('*', function (req, res) {\n    var store = (0, _createStore2.default)(req);\n    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {\n        var route = _ref.route;\n\n        return route.loadData ? route.loadData(store).catch(function (err) {\n            // todo think about error handling,\n            // do we need to skip errors on backend?\n            console.log('==========================================================');\n            var baseUrl = err.config ? err.config.baseURL : 'no_base_url';\n            var url = err.config ? err.config.url : 'no cofig object in err';\n            console.log('BASEURL: ' + baseUrl + ', URL: ' + url + ', MESSAGE: ' + err.message);\n            return null;\n        }) : null;\n    });\n\n    Promise.all(promises).then(function () {\n        var context = {};\n        var content = (0, _renderer2.default)(req, store, context);\n\n        if (context.notFound) {\n            res.status(404);\n        }\n\n        res.send(content);\n    });\n});\n\napp.listen(port, function () {\n    console.log('Listening on port: ' + port + ';');\n    console.log('ENV: ' + \"development\" + ';');\n});\n\n//# sourceURL=webpack://react-ssr/./src/index.js?");
})();

/******/ })()
;