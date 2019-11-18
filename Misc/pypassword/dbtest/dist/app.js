/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/GraphQL/priorities.js":
/*!***********************************!*\
  !*** ./app/GraphQL/priorities.js ***!
  \***********************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database */ "./app/database.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    extend type Query {\n        priorities: [Priority]\n        priority(id: ID!): Priority\n    }\n\n    type Priority {\n        id: ID!\n        slug: String\n        name: String\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var typeDefs = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject());
var resolvers = {
  Query: {
    priorities: function priorities() {
      return regeneratorRuntime.async(function priorities$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["priorities"].findAll());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    priority: function priority(obj, args, context, info) {
      return regeneratorRuntime.async(function priority$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["priorities"].findByPk(args.id));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }
};

/***/ }),

/***/ "./app/GraphQL/status.js":
/*!*******************************!*\
  !*** ./app/GraphQL/status.js ***!
  \*******************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database */ "./app/database.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    extend type Query {\n        allStatus: [Status]\n        status(id: ID!): Status\n    }\n\n    type Status {\n        id: ID!\n        slug: String\n        name: String\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var typeDefs = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject());
var resolvers = {
  Query: {
    allStatus: function allStatus() {
      return regeneratorRuntime.async(function allStatus$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["status"].findAll());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    status: function status(obj, args, context, info) {
      return regeneratorRuntime.async(function status$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["status"].findByPk(args.id));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }
};

/***/ }),

/***/ "./app/GraphQL/tickets.js":
/*!********************************!*\
  !*** ./app/GraphQL/tickets.js ***!
  \********************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database */ "./app/database.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    extend type Query {\n        tickets: [Ticket]\n        ticket(id: ID!): Ticket\n    }\n\n    type Ticket {\n        id: ID!\n        subject: String\n        priority_id: Int\n        priority: Priority\n        status_id: Int\n        status: Status\n        user_id: Int\n        user: User\n        assigned_to_user_id: Int\n        assigned_to_user: User\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var typeDefs = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject());
var resolvers = {
  Query: {
    tickets: function tickets() {
      return regeneratorRuntime.async(function tickets$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["tickets"].findAll());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    ticket: function ticket(obj, args, context, info) {
      return regeneratorRuntime.async(function ticket$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["tickets"].findByPk(args.id));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  },
  Ticket: {
    user: function user(obj, args, context, info) {
      return regeneratorRuntime.async(function user$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["users"].findByPk(obj.user_id));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      });
    },
    priority: function priority(obj, args, context, info) {
      return regeneratorRuntime.async(function priority$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["priorities"].findByPk(obj.priority_id));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      });
    },
    status: function status(obj, args, context, info) {
      return regeneratorRuntime.async(function status$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["status"].findByPk(obj.status_id));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      });
    },
    assigned_to_user: function assigned_to_user(obj, args, context, info) {
      return regeneratorRuntime.async(function assigned_to_user$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["users"].findByPk(obj.assigned_to_user_id));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      });
    }
  }
};

/***/ }),

/***/ "./app/GraphQL/users.js":
/*!******************************!*\
  !*** ./app/GraphQL/users.js ***!
  \******************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database */ "./app/database.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    extend type Query {\n        users: [User]\n        user(id: ID!): User\n    }\n\n    type User {\n        id: ID!\n        email: String\n        name: String\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var typeDefs = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject());
var resolvers = {
  Query: {
    users: function users() {
      return regeneratorRuntime.async(function users$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["users"].findAll());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    user: function user(obj, args, context, info) {
      return regeneratorRuntime.async(function user$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["users"].findByPk(args.id));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }
};

/***/ }),

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "@babel/polyfill");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);



var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var _require = __webpack_require__(/*! apollo-server-express */ "apollo-server-express"),
    ApolloServer = _require.ApolloServer;

var cors = __webpack_require__(/*! cors */ "cors");

var app = express__WEBPACK_IMPORTED_MODULE_1___default()();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
var server = new ApolloServer({
  modules: [__webpack_require__(/*! ./GraphQL/tickets */ "./app/GraphQL/tickets.js"), __webpack_require__(/*! ./GraphQL/status */ "./app/GraphQL/status.js"), __webpack_require__(/*! ./GraphQL/users */ "./app/GraphQL/users.js"), __webpack_require__(/*! ./GraphQL/priorities */ "./app/GraphQL/priorities.js")]
});
server.applyMiddleware({
  app: app
});
app.get('/', function (req, res) {
  return res.send('Hello World!');
});
app.listen({
  port: 5000
}, function () {
  return console.log("Server ready at http://localhost:5000");
});

/***/ }),

/***/ "./app/database.js":
/*!*************************!*\
  !*** ./app/database.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Sequelize = __webpack_require__(/*! sequelize */ "sequelize");

var db = {};
var sequelize = new Sequelize('graphql', 'root', 'IAmBh@m2019', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
  define: {
    freezeTableName: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});
var models = [__webpack_require__(/*! ./models/priorities.js */ "./app/models/priorities.js"), __webpack_require__(/*! ./models/status.js */ "./app/models/status.js"), __webpack_require__(/*! ./models/tickets.js */ "./app/models/tickets.js"), __webpack_require__(/*! ./models/users.js */ "./app/models/users.js")]; // Initialize models

models.forEach(function (model) {
  var seqModel = model(sequelize, Sequelize);
  db[seqModel.name] = seqModel;
}); // Apply associations

Object.keys(db).forEach(function (key) {
  if ('associate' in db[key]) {
    db[key].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;

/***/ }),

/***/ "./app/models/priorities.js":
/*!**********************************!*\
  !*** ./app/models/priorities.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* jshint indent: 1 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('priorities', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    slug: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    tableName: 'priorities',
    timestamps: false
  });
};

/***/ }),

/***/ "./app/models/status.js":
/*!******************************!*\
  !*** ./app/models/status.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* jshint indent: 1 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('status', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    slug: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    tableName: 'status',
    timestamps: false
  });
};

/***/ }),

/***/ "./app/models/tickets.js":
/*!*******************************!*\
  !*** ./app/models/tickets.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* jshint indent: 1 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('tickets', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    subject: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    priority_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    status_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    assigned_to_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tickets',
    timestamps: false
  });
};

/***/ }),

/***/ "./app/models/users.js":
/*!*****************************!*\
  !*** ./app/models/users.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* jshint indent: 1 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    tableName: 'users',
    timestamps: false
  });
};

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL0dyYXBoUUwvcHJpb3JpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvR3JhcGhRTC9zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL0dyYXBoUUwvdGlja2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvR3JhcGhRTC91c2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL2FwcC9kYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvbW9kZWxzL3ByaW9yaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vZGVscy9zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vZGVscy90aWNrZXRzLmpzIiwid2VicGFjazovLy8uL2FwcC9tb2RlbHMvdXNlcnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3BvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIl0sIm5hbWVzIjpbInR5cGVEZWZzIiwiZ3FsIiwicmVzb2x2ZXJzIiwiUXVlcnkiLCJwcmlvcml0aWVzIiwiZGIiLCJmaW5kQWxsIiwicHJpb3JpdHkiLCJvYmoiLCJhcmdzIiwiY29udGV4dCIsImluZm8iLCJmaW5kQnlQayIsImlkIiwiYWxsU3RhdHVzIiwic3RhdHVzIiwidGlja2V0cyIsInRpY2tldCIsIlRpY2tldCIsInVzZXIiLCJ1c2VyX2lkIiwicHJpb3JpdHlfaWQiLCJzdGF0dXNfaWQiLCJhc3NpZ25lZF90b191c2VyIiwiYXNzaWduZWRfdG9fdXNlcl9pZCIsInVzZXJzIiwiYm9keVBhcnNlciIsInJlcXVpcmUiLCJBcG9sbG9TZXJ2ZXIiLCJjb3JzIiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJzZXJ2ZXIiLCJtb2R1bGVzIiwiYXBwbHlNaWRkbGV3YXJlIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZCIsImxpc3RlbiIsInBvcnQiLCJjb25zb2xlIiwibG9nIiwiU2VxdWVsaXplIiwic2VxdWVsaXplIiwiaG9zdCIsImRpYWxlY3QiLCJkZWZpbmUiLCJmcmVlemVUYWJsZU5hbWUiLCJwb29sIiwibWF4IiwibWluIiwiYWNxdWlyZSIsImlkbGUiLCJvcGVyYXRvcnNBbGlhc2VzIiwibW9kZWxzIiwiZm9yRWFjaCIsIm1vZGVsIiwic2VxTW9kZWwiLCJuYW1lIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImFzc29jaWF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJEYXRhVHlwZXMiLCJ0eXBlIiwiSU5URUdFUiIsIlVOU0lHTkVEIiwiYWxsb3dOdWxsIiwicHJpbWFyeUtleSIsImF1dG9JbmNyZW1lbnQiLCJzbHVnIiwiU1RSSU5HIiwidGFibGVOYW1lIiwidGltZXN0YW1wcyIsInN1YmplY3QiLCJlbWFpbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztR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UyxFQUFFO0FBRlM7QUF2QmEsR0FBNUIsRUEyQko7QUFDRkssYUFBUyxFQUFFLFNBRFQ7QUFFRkMsY0FBVSxFQUFFO0FBRlYsR0EzQkksQ0FBUDtBQStCQSxDQWhDRCxDOzs7Ozs7Ozs7OztBQ0ZBO0FBRUFaLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFTckIsU0FBVCxFQUFvQnNCLFNBQXBCLEVBQStCO0FBQy9DLFNBQU90QixTQUFTLENBQUNHLE1BQVYsQ0FBaUIsT0FBakIsRUFBMEI7QUFDaEN0QyxNQUFFLEVBQUU7QUFDSDBELFVBQUksRUFBRUQsU0FBUyxDQUFDRSxPQUFWLENBQWtCLEVBQWxCLEVBQXNCQyxRQUR6QjtBQUVIQyxlQUFTLEVBQUUsS0FGUjtBQUdIQyxnQkFBVSxFQUFFLElBSFQ7QUFJSEMsbUJBQWEsRUFBRTtBQUpaLEtBRDRCO0FBT2hDYixRQUFJLEVBQUU7QUFDTFEsVUFBSSxFQUFFRCxTQUFTLENBQUNRLE1BQVYsQ0FBaUIsR0FBakIsQ0FERDtBQUVMSixlQUFTLEVBQUU7QUFGTixLQVAwQjtBQVdoQ1EsU0FBSyxFQUFFO0FBQ05YLFVBQUksRUFBRUQsU0FBUyxDQUFDUSxNQUFWLENBQWlCLEdBQWpCLENBREE7QUFFTkosZUFBUyxFQUFFO0FBRkw7QUFYeUIsR0FBMUIsRUFlSjtBQUNGSyxhQUFTLEVBQUUsT0FEVDtBQUVGQyxjQUFVLEVBQUU7QUFGVixHQWZJLENBQVA7QUFtQkEsQ0FwQkQsQzs7Ozs7Ozs7Ozs7QUNGQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxzQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9hcHAuanNcIik7XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnXG5pbXBvcnQgKiBhcyBkYiBmcm9tICcuLi9kYXRhYmFzZSdcblxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxuICAgIGV4dGVuZCB0eXBlIFF1ZXJ5IHtcbiAgICAgICAgcHJpb3JpdGllczogW1ByaW9yaXR5XVxuICAgICAgICBwcmlvcml0eShpZDogSUQhKTogUHJpb3JpdHlcbiAgICB9XG5cbiAgICB0eXBlIFByaW9yaXR5IHtcbiAgICAgICAgaWQ6IElEIVxuICAgICAgICBzbHVnOiBTdHJpbmdcbiAgICAgICAgbmFtZTogU3RyaW5nXG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzID0ge1xuICAgIFF1ZXJ5OiB7XG4gICAgICAgIHByaW9yaXRpZXM6IGFzeW5jICgpID0+IGRiLnByaW9yaXRpZXMuZmluZEFsbCgpLFxuICAgICAgICBwcmlvcml0eTogYXN5bmMgKG9iaiwgYXJncywgY29udGV4dCwgaW5mbykgPT5cbiAgICAgICAgICAgIGRiLnByaW9yaXRpZXMuZmluZEJ5UGsoYXJncy5pZCksXG4gICAgfSxcbn1cbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcydcbmltcG9ydCAqIGFzIGRiIGZyb20gJy4uL2RhdGFiYXNlJ1xuXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWxgXG4gICAgZXh0ZW5kIHR5cGUgUXVlcnkge1xuICAgICAgICBhbGxTdGF0dXM6IFtTdGF0dXNdXG4gICAgICAgIHN0YXR1cyhpZDogSUQhKTogU3RhdHVzXG4gICAgfVxuXG4gICAgdHlwZSBTdGF0dXMge1xuICAgICAgICBpZDogSUQhXG4gICAgICAgIHNsdWc6IFN0cmluZ1xuICAgICAgICBuYW1lOiBTdHJpbmdcbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XG4gICAgUXVlcnk6IHtcbiAgICAgICAgYWxsU3RhdHVzOiBhc3luYyAoKSA9PiBkYi5zdGF0dXMuZmluZEFsbCgpLFxuICAgICAgICBzdGF0dXM6IGFzeW5jIChvYmosIGFyZ3MsIGNvbnRleHQsIGluZm8pID0+IGRiLnN0YXR1cy5maW5kQnlQayhhcmdzLmlkKSxcbiAgICB9LFxufVxuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJ1xuaW1wb3J0ICogYXMgZGIgZnJvbSAnLi4vZGF0YWJhc2UnXG5cbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbGBcbiAgICBleHRlbmQgdHlwZSBRdWVyeSB7XG4gICAgICAgIHRpY2tldHM6IFtUaWNrZXRdXG4gICAgICAgIHRpY2tldChpZDogSUQhKTogVGlja2V0XG4gICAgfVxuXG4gICAgdHlwZSBUaWNrZXQge1xuICAgICAgICBpZDogSUQhXG4gICAgICAgIHN1YmplY3Q6IFN0cmluZ1xuICAgICAgICBwcmlvcml0eV9pZDogSW50XG4gICAgICAgIHByaW9yaXR5OiBQcmlvcml0eVxuICAgICAgICBzdGF0dXNfaWQ6IEludFxuICAgICAgICBzdGF0dXM6IFN0YXR1c1xuICAgICAgICB1c2VyX2lkOiBJbnRcbiAgICAgICAgdXNlcjogVXNlclxuICAgICAgICBhc3NpZ25lZF90b191c2VyX2lkOiBJbnRcbiAgICAgICAgYXNzaWduZWRfdG9fdXNlcjogVXNlclxuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcbiAgICBRdWVyeToge1xuICAgICAgICB0aWNrZXRzOiBhc3luYyAoKSA9PiBkYi50aWNrZXRzLmZpbmRBbGwoKSxcbiAgICAgICAgdGlja2V0OiBhc3luYyAob2JqLCBhcmdzLCBjb250ZXh0LCBpbmZvKSA9PlxuICAgICAgICAgICAgZGIudGlja2V0cy5maW5kQnlQayhhcmdzLmlkKSxcbiAgICB9LFxuICAgIFRpY2tldDoge1xuICAgICAgICB1c2VyOiBhc3luYyAob2JqLCBhcmdzLCBjb250ZXh0LCBpbmZvKSA9PlxuICAgICAgICAgICAgZGIudXNlcnMuZmluZEJ5UGsob2JqLnVzZXJfaWQpLFxuICAgICAgICBwcmlvcml0eTogYXN5bmMgKG9iaiwgYXJncywgY29udGV4dCwgaW5mbykgPT5cbiAgICAgICAgICAgIGRiLnByaW9yaXRpZXMuZmluZEJ5UGsob2JqLnByaW9yaXR5X2lkKSxcbiAgICAgICAgc3RhdHVzOiBhc3luYyAob2JqLCBhcmdzLCBjb250ZXh0LCBpbmZvKSA9PlxuICAgICAgICAgICAgZGIuc3RhdHVzLmZpbmRCeVBrKG9iai5zdGF0dXNfaWQpLFxuICAgICAgICBhc3NpZ25lZF90b191c2VyOiBhc3luYyAob2JqLCBhcmdzLCBjb250ZXh0LCBpbmZvKSA9PlxuICAgICAgICAgICAgZGIudXNlcnMuZmluZEJ5UGsob2JqLmFzc2lnbmVkX3RvX3VzZXJfaWQpLFxuICAgIH0sXG59XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnXG5pbXBvcnQgKiBhcyBkYiBmcm9tICcuLi9kYXRhYmFzZSdcblxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxuICAgIGV4dGVuZCB0eXBlIFF1ZXJ5IHtcbiAgICAgICAgdXNlcnM6IFtVc2VyXVxuICAgICAgICB1c2VyKGlkOiBJRCEpOiBVc2VyXG4gICAgfVxuXG4gICAgdHlwZSBVc2VyIHtcbiAgICAgICAgaWQ6IElEIVxuICAgICAgICBlbWFpbDogU3RyaW5nXG4gICAgICAgIG5hbWU6IFN0cmluZ1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcbiAgICBRdWVyeToge1xuICAgICAgICB1c2VyczogYXN5bmMgKCkgPT4gZGIudXNlcnMuZmluZEFsbCgpLFxuICAgICAgICB1c2VyOiBhc3luYyAob2JqLCBhcmdzLCBjb250ZXh0LCBpbmZvKSA9PiBkYi51c2Vycy5maW5kQnlQayhhcmdzLmlkKSxcbiAgICB9LFxufVxuIiwiaW1wb3J0ICdAYmFiZWwvcG9seWZpbGwnXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJylcbmNvbnN0IHsgQXBvbGxvU2VydmVyIH0gPSByZXF1aXJlKCdhcG9sbG8tc2VydmVyLWV4cHJlc3MnKVxuY29uc3QgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKVxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSlcbmFwcC51c2UoY29ycygpKVxuXG5jb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgICBtb2R1bGVzOiBbXG4gICAgICAgIHJlcXVpcmUoJy4vR3JhcGhRTC90aWNrZXRzJyksXG4gICAgICAgIHJlcXVpcmUoJy4vR3JhcGhRTC9zdGF0dXMnKSxcbiAgICAgICAgcmVxdWlyZSgnLi9HcmFwaFFML3VzZXJzJyksXG4gICAgICAgIHJlcXVpcmUoJy4vR3JhcGhRTC9wcmlvcml0aWVzJyksXG4gICAgXSxcbn0pXG5cbnNlcnZlci5hcHBseU1pZGRsZXdhcmUoeyBhcHAgfSlcblxuYXBwLmdldCgnLycsIChyZXEsIHJlcykgPT4gcmVzLnNlbmQoJ0hlbGxvIFdvcmxkIScpKVxuXG5hcHAubGlzdGVuKHsgcG9ydDogNTAwMCB9LCAoKSA9PlxuICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgcmVhZHkgYXQgaHR0cDovL2xvY2FsaG9zdDo1MDAwYCksXG4pXG4iLCJjb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKVxuXG52YXIgZGIgPSB7fVxuXG5jb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKCdncmFwaHFsJywgJ3Jvb3QnLCAnSUFtQmhAbTIwMTknLCB7XG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgcG9ydDogJzMzMDYnLFxuICAgIGRpYWxlY3Q6ICdteXNxbCcsXG4gICAgZGVmaW5lOiB7XG4gICAgICAgIGZyZWV6ZVRhYmxlTmFtZTogdHJ1ZSxcbiAgICB9LFxuICAgIHBvb2w6IHtcbiAgICAgICAgbWF4OiA1LFxuICAgICAgICBtaW46IDAsXG4gICAgICAgIGFjcXVpcmU6IDMwMDAwLFxuICAgICAgICBpZGxlOiAxMDAwMCxcbiAgICB9LFxuICAgIC8vIGh0dHA6Ly9kb2NzLnNlcXVlbGl6ZWpzLmNvbS9tYW51YWwvdHV0b3JpYWwvcXVlcnlpbmcuaHRtbCNvcGVyYXRvcnNcbiAgICBvcGVyYXRvcnNBbGlhc2VzOiBmYWxzZSxcbn0pXG5cbmxldCBtb2RlbHMgPSBbXG4gICAgcmVxdWlyZSgnLi9tb2RlbHMvcHJpb3JpdGllcy5qcycpLFxuICAgIHJlcXVpcmUoJy4vbW9kZWxzL3N0YXR1cy5qcycpLFxuICAgIHJlcXVpcmUoJy4vbW9kZWxzL3RpY2tldHMuanMnKSxcbiAgICByZXF1aXJlKCcuL21vZGVscy91c2Vycy5qcycpLFxuXVxuXG4vLyBJbml0aWFsaXplIG1vZGVsc1xubW9kZWxzLmZvckVhY2gobW9kZWwgPT4ge1xuICAgIGNvbnN0IHNlcU1vZGVsID0gbW9kZWwoc2VxdWVsaXplLCBTZXF1ZWxpemUpXG4gICAgZGJbc2VxTW9kZWwubmFtZV0gPSBzZXFNb2RlbFxufSlcblxuLy8gQXBwbHkgYXNzb2NpYXRpb25zXG5PYmplY3Qua2V5cyhkYikuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmICgnYXNzb2NpYXRlJyBpbiBkYltrZXldKSB7XG4gICAgICAgIGRiW2tleV0uYXNzb2NpYXRlKGRiKVxuICAgIH1cbn0pXG5cbmRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZVxuZGIuU2VxdWVsaXplID0gU2VxdWVsaXplXG5cbm1vZHVsZS5leHBvcnRzID0gZGJcbiIsIi8qIGpzaGludCBpbmRlbnQ6IDEgKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZXF1ZWxpemUsIERhdGFUeXBlcykge1xuXHRyZXR1cm4gc2VxdWVsaXplLmRlZmluZSgncHJpb3JpdGllcycsIHtcblx0XHRpZDoge1xuXHRcdFx0dHlwZTogRGF0YVR5cGVzLklOVEVHRVIoMTApLlVOU0lHTkVELFxuXHRcdFx0YWxsb3dOdWxsOiBmYWxzZSxcblx0XHRcdHByaW1hcnlLZXk6IHRydWUsXG5cdFx0XHRhdXRvSW5jcmVtZW50OiB0cnVlXG5cdFx0fSxcblx0XHRzbHVnOiB7XG5cdFx0XHR0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDY0KSxcblx0XHRcdGFsbG93TnVsbDogZmFsc2Vcblx0XHR9LFxuXHRcdG5hbWU6IHtcblx0XHRcdHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjU2KSxcblx0XHRcdGFsbG93TnVsbDogZmFsc2Vcblx0XHR9XG5cdH0sIHtcblx0XHR0YWJsZU5hbWU6ICdwcmlvcml0aWVzJyxcblx0XHR0aW1lc3RhbXBzOiBmYWxzZVxuXHR9KTtcbn07XG4iLCIvKiBqc2hpbnQgaW5kZW50OiAxICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VxdWVsaXplLCBEYXRhVHlwZXMpIHtcblx0cmV0dXJuIHNlcXVlbGl6ZS5kZWZpbmUoJ3N0YXR1cycsIHtcblx0XHRpZDoge1xuXHRcdFx0dHlwZTogRGF0YVR5cGVzLklOVEVHRVIoMTApLlVOU0lHTkVELFxuXHRcdFx0YWxsb3dOdWxsOiBmYWxzZSxcblx0XHRcdHByaW1hcnlLZXk6IHRydWUsXG5cdFx0XHRhdXRvSW5jcmVtZW50OiB0cnVlXG5cdFx0fSxcblx0XHRzbHVnOiB7XG5cdFx0XHR0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDY0KSxcblx0XHRcdGFsbG93TnVsbDogZmFsc2Vcblx0XHR9LFxuXHRcdG5hbWU6IHtcblx0XHRcdHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjU2KSxcblx0XHRcdGFsbG93TnVsbDogZmFsc2Vcblx0XHR9XG5cdH0sIHtcblx0XHR0YWJsZU5hbWU6ICdzdGF0dXMnLFxuXHRcdHRpbWVzdGFtcHM6IGZhbHNlXG5cdH0pO1xufTtcbiIsIi8qIGpzaGludCBpbmRlbnQ6IDEgKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZXF1ZWxpemUsIERhdGFUeXBlcykge1xuXHRyZXR1cm4gc2VxdWVsaXplLmRlZmluZSgndGlja2V0cycsIHtcblx0XHRpZDoge1xuXHRcdFx0dHlwZTogRGF0YVR5cGVzLklOVEVHRVIoMTEpLlVOU0lHTkVELFxuXHRcdFx0YWxsb3dOdWxsOiBmYWxzZSxcblx0XHRcdHByaW1hcnlLZXk6IHRydWUsXG5cdFx0XHRhdXRvSW5jcmVtZW50OiB0cnVlXG5cdFx0fSxcblx0XHRzdWJqZWN0OiB7XG5cdFx0XHR0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NiksXG5cdFx0XHRhbGxvd051bGw6IGZhbHNlXG5cdFx0fSxcblx0XHRwcmlvcml0eV9pZDoge1xuXHRcdFx0dHlwZTogRGF0YVR5cGVzLklOVEVHRVIoMTEpLFxuXHRcdFx0YWxsb3dOdWxsOiBmYWxzZVxuXHRcdH0sXG5cdFx0c3RhdHVzX2lkOiB7XG5cdFx0XHR0eXBlOiBEYXRhVHlwZXMuSU5URUdFUig0KSxcblx0XHRcdGFsbG93TnVsbDogZmFsc2Vcblx0XHR9LFxuXHRcdHVzZXJfaWQ6IHtcblx0XHRcdHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcblx0XHRcdGFsbG93TnVsbDogZmFsc2Vcblx0XHR9LFxuXHRcdGFzc2lnbmVkX3RvX3VzZXJfaWQ6IHtcblx0XHRcdHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcblx0XHRcdGFsbG93TnVsbDogdHJ1ZVxuXHRcdH1cblx0fSwge1xuXHRcdHRhYmxlTmFtZTogJ3RpY2tldHMnLFxuXHRcdHRpbWVzdGFtcHM6IGZhbHNlXG5cdH0pO1xufTtcbiIsIi8qIGpzaGludCBpbmRlbnQ6IDEgKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZXF1ZWxpemUsIERhdGFUeXBlcykge1xuXHRyZXR1cm4gc2VxdWVsaXplLmRlZmluZSgndXNlcnMnLCB7XG5cdFx0aWQ6IHtcblx0XHRcdHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDEwKS5VTlNJR05FRCxcblx0XHRcdGFsbG93TnVsbDogZmFsc2UsXG5cdFx0XHRwcmltYXJ5S2V5OiB0cnVlLFxuXHRcdFx0YXV0b0luY3JlbWVudDogdHJ1ZVxuXHRcdH0sXG5cdFx0bmFtZToge1xuXHRcdFx0dHlwZTogRGF0YVR5cGVzLlNUUklORygyNTYpLFxuXHRcdFx0YWxsb3dOdWxsOiBmYWxzZVxuXHRcdH0sXG5cdFx0ZW1haWw6IHtcblx0XHRcdHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjU2KSxcblx0XHRcdGFsbG93TnVsbDogZmFsc2Vcblx0XHR9XG5cdH0sIHtcblx0XHR0YWJsZU5hbWU6ICd1c2VycycsXG5cdFx0dGltZXN0YW1wczogZmFsc2Vcblx0fSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3BvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=