/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(1);

	var _model2 = _interopRequireDefault(_model);

	var _schema = __webpack_require__(2);

	var _schema2 = _interopRequireDefault(_schema);

	var _is = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @class Localoose
	 * @description
	 */

	var Localoose = function () {
	    function Localoose() {
	        _classCallCheck(this, Localoose);

	        console.info("Localoose started");
	    }

	    /**
	     * @param {String} model_name a name for model
	     * @param {Object|@class Schema} schema
	     */


	    _createClass(Localoose, [{
	        key: 'Model',
	        value: function Model(model_name, schema) {

	            if (!_is.is.String(model_name)) {

	                throw TypeError('The Model name must be String.');
	            } else if (_is.is.Empty(model_name) || _is.is.Null(model_name)) {

	                throw Error('The Model name not be empty or null.');
	            } else if (schema instanceof _schema2.default === false) {

	                throw Error('The Schema is invalid. Try \'new localoose().Schema();\'');
	            } else {

	                /**
	                 * Instance from @class Model
	                 */
	                return _model2.default.initialize(model_name, schema.schema);
	            }
	        }

	        /**
	         * @param {Object} schema
	         */

	    }, {
	        key: 'Schema',
	        value: function Schema(schema) {
	            return new _schema2.default(schema);
	        }
	    }]);

	    return Localoose;
	}();

	exports.default = Localoose;


	window.Localoose = Localoose;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _schema = __webpack_require__(2);

	var _schema2 = _interopRequireDefault(_schema);

	var _query = __webpack_require__(6);

	var _query2 = _interopRequireDefault(_query);

	var _validators = __webpack_require__(5);

	var _is = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @class Model
	 * @description
	 */

	var Model = function () {

	    /**
	     * @param  {Object} model_data data based on schema
	     */

	    function Model(model_data) {
	        _classCallCheck(this, Model);

	        this.model_data = model_data;
	        this.model_name = Model.prototype.model_name;
	        this.schema = Model.prototype.schema;

	        console.log(this);
	    }

	    /**
	     * Get Model name and Schema to add in Model Prototype
	     * @param  {String} model_name Model name
	     * @param  {Schema} schema     schema from Model
	     * @return {@class Model}
	     */


	    _createClass(Model, [{
	        key: 'save',
	        value: function save(callback) {
	            this.validateModel();
	            //Query.save(this.model_name, this.model_data);
	        }
	    }, {
	        key: 'validateModel',
	        value: function validateModel() {
	            var model = arguments.length <= 0 || arguments[0] === undefined ? this.model_data : arguments[0];
	            var schema = arguments.length <= 1 || arguments[1] === undefined ? this.schema : arguments[1];


	            var validators = _validators.VALIDATORS,
	                errors = [];

	            /**
	             * Validate properties from model
	             */
	            for (var prop_model in model) {
	                if (!schema.hasOwnProperty(prop_model)) {
	                    errors.push(prop_model + ' is not a valid property in your Model');
	                }
	            }

	            for (var prop_schema in schema) {
	                if (model.hasOwnProperty(prop_schema)) {
	                    var prop_type = schema[prop_schema].type;
	                    if (!_is.is.Undefined(prop_type)) {

	                        if (model[prop_schema].constructor.name !== prop_type.name) {
	                            errors.push(prop_schema + ' is not a ' + prop_type.name);
	                        }

	                        var _iteratorNormalCompletion = true;
	                        var _didIteratorError = false;
	                        var _iteratorError = undefined;

	                        try {
	                            for (var _iterator = validators[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                                var validator = _step.value;

	                                var prop_validator = schema[prop_schema][validator];
	                                if (!_is.is.Undefined(prop_validator)) {
	                                    switch (validator) {
	                                        case 'required':
	                                            if (_is.is.Empty(model[prop_schema]) || _is.is.Null(model[prop_schema])) {
	                                                errors.push(prop_schema + ' not be empty or null');
	                                            }
	                                            break;

	                                        case 'min':
	                                            if (_is.is.Array(prop_validator)) {
	                                                if (model[prop_schema] < prop_validator[0]) {
	                                                    if (!_is.is.Undefined(prop_validator[1])) {
	                                                        errors.push('' + prop_validator[1]);
	                                                    } else {
	                                                        errors.push(prop_schema + ' not be less than ' + prop_validator[0]);
	                                                    }
	                                                }
	                                            } else {
	                                                if (model[prop_schema] < prop_validator) {
	                                                    errors.push(prop_schema + ' not be less than ' + prop_validator);
	                                                }
	                                            }
	                                            break;

	                                        case 'max':
	                                            if (_is.is.Array(prop_validator)) {
	                                                if (model[prop_schema] > prop_validator[0]) {
	                                                    if (!_is.is.Undefined(prop_validator[1])) {
	                                                        errors.push('' + prop_validator[1]);
	                                                    } else {
	                                                        errors.push(prop_schema + ' not be grater than ' + prop_validator[0]);
	                                                    }
	                                                }
	                                            } else {
	                                                if (model[prop_schema] > prop_validator) {
	                                                    errors.push(prop_schema + ' not be less grater ' + prop_validator);
	                                                }
	                                            }
	                                            break;

	                                    }
	                                }
	                            }
	                        } catch (err) {
	                            _didIteratorError = true;
	                            _iteratorError = err;
	                        } finally {
	                            try {
	                                if (!_iteratorNormalCompletion && _iterator.return) {
	                                    _iterator.return();
	                                }
	                            } finally {
	                                if (_didIteratorError) {
	                                    throw _iteratorError;
	                                }
	                            }
	                        }
	                    } else {

	                        if (model[prop_schema].constructor.name !== schema[prop_schema].name) {
	                            errors.push(prop_schema + ' is not a ' + schema[prop_schema].name);
	                        }
	                    }
	                } else {

	                    var default_value = schema[prop_schema].default;

	                    if (!_is.is.Undefined(default_value)) {
	                        model[prop_schema] = default_value;
	                    } else {
	                        model[prop_schema] = null;
	                    }
	                }
	            }

	            console.log(errors);
	            console.log(model);
	        }
	    }], [{
	        key: 'initialize',
	        value: function initialize(model_name, schema) {
	            Model.prototype.model_name = model_name;
	            Model.prototype.schema = schema;

	            return Model;
	        }
	    }]);

	    return Model;
	}();

	exports.default = Model;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _schemaTypes = __webpack_require__(3);

	var _validators = __webpack_require__(5);

	var _is = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @class Schema
	 * @description
	 */

	var Schema = function () {

	    /**
	     * @param  {Object} schema
	     */

	    function Schema(schema) {
	        _classCallCheck(this, Schema);

	        this.constructor.validate(schema);
	        this.schema = schema;

	        return this;
	    }

	    /**
	     * @param  {Object} schema
	     */


	    _createClass(Schema, null, [{
	        key: 'validate',
	        value: function validate(schema) {
	            if (!_is.is.Object(schema)) {
	                throw TypeError('Invalid. Schema must be object');
	            } else if (!schema) {
	                throw Error('Invalid Schema');
	            } else {
	                (0, _schemaTypes.validateTypes)(schema);
	                (0, _validators.validateValidators)(schema);
	            }
	        }
	    }]);

	    return Schema;
	}();

	exports.default = Schema;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.validateTypes = exports.TYPES = undefined;

	var _is = __webpack_require__(4);

	/**
	 * All types supported to Schema
	 * @type {Array}
	 */
	var TYPES = exports.TYPES = ['String', 'Number', 'Date', 'Boolean', 'Array'];

	/**
	 * Validate all types based on TYPES
	 * @param  {Object} schema
	 */
	var validateTypes = exports.validateTypes = function validateTypes(schema) {
	    for (var prop in schema) {
	        var type_prop = schema[prop].type;
	        if (!(0, _is.isUndefined)(type_prop)) {
	            if (TYPES.indexOf(type_prop.name) === -1) {
	                throw TypeError('Invalid Schema Type \'' + type_prop + '\'');
	            }
	        } else {
	            var _type_prop = schema[prop];
	            if (TYPES.indexOf(_type_prop.name) === -1) {
	                throw TypeError('Invalid Schema Type \'' + _type_prop + '\'');
	            }
	        }
	    }
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var isArray = exports.isArray = function isArray(variable) {
	    return Array.isArray(variable);
	};

	var isNumber = exports.isNumber = function isNumber(variable) {
	    return typeof variable == "number";
	};

	var isBoolean = exports.isBoolean = function isBoolean(variable) {
	    return typeof variable == "boolean";
	};

	var isObject = exports.isObject = function isObject(variable) {
	    return (typeof variable === "undefined" ? "undefined" : _typeof(variable)) == "object";
	};

	var isString = exports.isString = function isString(variable) {
	    return typeof variable == "string";
	};

	var isUndefined = exports.isUndefined = function isUndefined(variable) {
	    return typeof variable == "undefined";
	};

	var isNull = exports.isNull = function isNull(variable) {
	    return variable === null;
	};

	var isFunction = exports.isFunction = function isFunction(variable) {
	    return typeof variable == "function";
	};

	var isEmpty = exports.isEmpty = function isEmpty(variable) {
	    return variable == "";
	};

	var is = exports.is = {
	    Array: isArray,
	    Number: isNumber,
	    Boolean: isBoolean,
	    Object: isObject,
	    String: isString,
	    Undefined: isUndefined,
	    Null: isNull,
	    Function: isFunction,
	    Empty: isEmpty
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.validateValidators = exports.VALIDATORS = undefined;

	var _is = __webpack_require__(4);

	/**
	 * All validators supported
	 * @type {Array}
	 */
	var VALIDATORS = exports.VALIDATORS = ['type', 'required', 'min', 'max', 'default'];

	/**
	 * @param  {Object|@class Schema} schema
	 */
	var validateValidators = exports.validateValidators = function validateValidators(schema) {
	    hasRequired(schema);
	    hasMinMax(schema);
	    hasDefault(schema);
	    checkInvalidProperties(schema);
	};

	/**
	 * Check if schema have 'required' property
	 */
	var hasRequired = function hasRequired(schema) {
	    var required_type = 'Boolean';
	    for (var prop in schema) {
	        var required_prop = schema[prop].required;
	        if (!_is.is.Undefined(required_prop)) {
	            var required_prop_value = required_prop.constructor.name;
	            if (required_prop_value !== required_type) {
	                throw TypeError(required_prop_value + ' is not a Boolean. Use: \'true\' or \'false\'');
	            }
	        }
	    }
	};

	/**
	 * Check if schema have 'min' and/or 'max' properties
	 */
	var hasMinMax = function hasMinMax(schema) {
	    for (var prop in schema) {

	        var min_prop = schema[prop].min;
	        var max_prop = schema[prop].max;

	        if (!_is.is.Undefined(min_prop)) {
	            validateMinMax('min', min_prop);
	        }

	        if (!_is.is.Undefined(max_prop)) {
	            validateMinMax('max', max_prop);
	        }
	    }
	};

	/**
	 * Validate properties 'min' and 'max'
	 * @param {String} name
	 * @oaran {String} prop
	 */
	var validateMinMax = function validateMinMax(name, prop) {

	    if (_is.is.Array(prop)) {

	        var amount = prop[0];
	        var message = prop[1];

	        if (_is.is.Undefined(amount) || !_is.is.Number(amount)) {
	            throw TypeError('Invalid first index (number) from \'' + name + '\' property. Must be Number.');
	        }

	        if (!_is.is.Undefined(message) && !_is.is.String(message)) {
	            throw TypeError('Invalid second index (message) from \'' + name + '\' property. Must be String.');
	        }
	    } else if (!_is.is.Number(prop)) {
	        throw TypeError('Invalid value to \'' + name + '\' property. Use: Number or Array.');
	    }
	};

	/**
	 * Validate if the property has invalid properties
	 */
	var checkInvalidProperties = function checkInvalidProperties(schema) {
	    for (var schema_prop in schema) {
	        if (_is.is.Object(schema[schema_prop])) {
	            for (var prop_from_shema_prop in schema[schema_prop]) {
	                if (VALIDATORS.indexOf(prop_from_shema_prop) === -1) {
	                    throw Error('Invalid property \'' + prop_from_shema_prop + '\' in Schema');
	                }
	            }
	        }
	    }
	};

	/**
	 * [hasDefault description]
	 * @param  {[type]} schema [description]
	 * @return {[type]}        [description]
	 */
	var hasDefault = function hasDefault(schema) {};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _localStorage = __webpack_require__(7);

	var _localStorage2 = _interopRequireDefault(_localStorage);

	var _objectId = __webpack_require__(8);

	var _objectId2 = _interopRequireDefault(_objectId);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @class Query
	 * @description This class helps with object querying
	 */

	var Query = function () {
	  function Query() {
	    _classCallCheck(this, Query);
	  }

	  _createClass(Query, null, [{
	    key: 'save',


	    /**
	     * @param  {String} table `Table` name to storage data
	     * @param  {Object} data  Object data to persist
	     */
	    value: function save(table, data) {
	      console.info("SAVED!");
	    }
	  }]);

	  return Query;
	}();

	exports.default = Query;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @class LocalStorage
	 * @description
	 */

	var LocalStorage = function () {
	  function LocalStorage() {
	    _classCallCheck(this, LocalStorage);
	  }

	  _createClass(LocalStorage, null, [{
	    key: "newTable",


	    /**
	     * Create a new table if not exists
	     * @param  {String} table_name
	     */
	    value: function newTable(table_name) {
	      if (localStorage.getItem(table_name) === null) {}
	    }

	    /**
	     * Get all data from table
	     * @param  {String} table_name
	     * @return {Array}
	     */

	  }, {
	    key: "get",
	    value: function get(table_name) {}

	    /**
	     * [set description]
	     * @param {[type]} table_name [description]
	     * @param {[type]} data       [description]
	     */

	  }, {
	    key: "set",
	    value: function set(table_name, data) {}
	  }, {
	    key: "push",
	    value: function push(table_name, data) {}
	  }]);

	  return LocalStorage;
	}();

	exports.default = LocalStorage;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @class ObjectId
	 * @description generate new UUID
	 */

	var ObjectId = function () {
	    function ObjectId() {
	        _classCallCheck(this, ObjectId);

	        var uuid = [];

	        for (var i = 0; i < 8; i++) {
	            uuid.push(this.generateUUID);
	        }

	        return uuid.toString.replace(",", "");
	    }

	    _createClass(ObjectId, [{
	        key: "generateUUID",
	        get: function get() {
	            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	    }]);

	    return ObjectId;
	}();

	exports.default = ObjectId;

/***/ }
/******/ ]);