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

	var _genericValidations = __webpack_require__(10);

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
	            var validate_errors = (0, _genericValidations.validateModel)(this.model_data, this.schema);

	            if (validate_errors.length > 0) {
	                callback(validate_errors);
	            } else {
	                /**
	                 * Save the model
	                 */
	                _query2.default.save(this.model_name, this.model_data);
	                /**
	                 * Update callback
	                 */
	                callback(null, this.model_data);
	            }
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

	var _objectId = __webpack_require__(9);

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
	         * @param  {String} table_name `Table` name to storage data
	         * @param  {Object} data  Object data to persist
	         */
	        value: function save(table_name, data) {
	            if (!_localStorage2.default.tableExists(table_name)) {
	                _localStorage2.default.newTable(table_name, data);
	            } else {
	                /**
	                 * The table exists, then PUSH data into table
	                 */
	            }
	        }
	    }]);

	    return Query;
	}();

	exports.default = Query;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var pluralize = __webpack_require__(8);

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
	         * @param  {Object} initial_data when create a new table,
	         * if exists a data, then save the data
	         */
	        value: function newTable(table_name, initial_data) {
	            /**
	             * Pluralize table_name
	             * @example
	             * User = Users
	             *
	             * @type {String}
	             */
	            table_name = pluralize(table_name);

	            if (localStorage.getItem(table_name) === null) {
	                /**
	                 * Create a new item on storage
	                 * with a empty value
	                 */
	                if (initial_data) {
	                    localStorage.setItem(table_name, JSON.stringify([initial_data]));
	                } else {
	                    localStorage.setItem(table_name, "");
	                }
	            }
	        }

	        /**
	         * Returns if the table by name exists
	         * @param  {String} table_name
	         * @return {Boolean}
	         */

	    }, {
	        key: "tableExists",
	        value: function tableExists(table_name) {
	            table_name = pluralize(table_name);
	            return localStorage.getItem(table_name) === null ? false : true;
	        }

	        /**
	         * Get all data from table
	         * @param  {String} table_name
	         * @return {Array|String|Number|...}
	         */

	    }, {
	        key: "get",
	        value: function get(table_name) {
	            table_name = pluralize(table_name);
	            return localStorage.getItem(table_name);
	        }

	        /**
	         * Set a initial value to table
	         * @param {String} table_name
	         * @param {Object} data       Object to stringify
	         */

	    }, {
	        key: "set",
	        value: function set(table_name, data) {
	            table_name = pluralize(table_name);
	            localStorage.setItem(table_name, JSON.stringify([data]));
	        }
	    }, {
	        key: "push",
	        value: function push(table_name, data) {}
	    }]);

	    return LocalStorage;
	}();

	exports.default = LocalStorage;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* global define */

	(function (root, pluralize) {
	  /* istanbul ignore else */
	  if (true) {
	    // Node.
	    module.exports = pluralize();
	  } else if (typeof define === 'function' && define.amd) {
	    // AMD, registers as an anonymous module.
	    define(function () {
	      return pluralize();
	    });
	  } else {
	    // Browser global.
	    root.pluralize = pluralize();
	  }
	})(this, function () {
	  // Rule storage - pluralize and singularize need to be run sequentially,
	  // while other rules can be optimized using an object for instant lookups.
	  var pluralRules = [];
	  var singularRules = [];
	  var uncountables = {};
	  var irregularPlurals = {};
	  var irregularSingles = {};

	  /**
	   * Title case a string.
	   *
	   * @param  {string} str
	   * @return {string}
	   */
	  function toTitleCase (str) {
	    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
	  }

	  /**
	   * Sanitize a pluralization rule to a usable regular expression.
	   *
	   * @param  {(RegExp|string)} rule
	   * @return {RegExp}
	   */
	  function sanitizeRule (rule) {
	    if (typeof rule === 'string') {
	      return new RegExp('^' + rule + '$', 'i');
	    }

	    return rule;
	  }

	  /**
	   * Pass in a word token to produce a function that can replicate the case on
	   * another word.
	   *
	   * @param  {string}   word
	   * @param  {string}   token
	   * @return {Function}
	   */
	  function restoreCase (word, token) {
	    // Upper cased words. E.g. "HELLO".
	    if (word === word.toUpperCase()) {
	      return token.toUpperCase();
	    }

	    // Title cased words. E.g. "Title".
	    if (word[0] === word[0].toUpperCase()) {
	      return toTitleCase(token);
	    }

	    // Lower cased words. E.g. "test".
	    return token.toLowerCase();
	  }

	  /**
	   * Interpolate a regexp string.
	   *
	   * @param  {string} str
	   * @param  {Array}  args
	   * @return {string}
	   */
	  function interpolate (str, args) {
	    return str.replace(/\$(\d{1,2})/g, function (match, index) {
	      return args[index] || '';
	    });
	  }

	  /**
	   * Sanitize a word by passing in the word and sanitization rules.
	   *
	   * @param  {String}   token
	   * @param  {String}   word
	   * @param  {Array}    collection
	   * @return {String}
	   */
	  function sanitizeWord (token, word, collection) {
	    // Empty string or doesn't need fixing.
	    if (!token.length || uncountables.hasOwnProperty(token)) {
	      return word;
	    }

	    var len = collection.length;

	    // Iterate over the sanitization rules and use the first one to match.
	    while (len--) {
	      var rule = collection[len];

	      // If the rule passes, return the replacement.
	      if (rule[0].test(word)) {
	        return word.replace(rule[0], function (match, index, word) {
	          var result = interpolate(rule[1], arguments);

	          if (match === '') {
	            return restoreCase(word[index - 1], result);
	          }

	          return restoreCase(match, result);
	        });
	      }
	    }

	    return word;
	  }

	  /**
	   * Replace a word with the updated word.
	   *
	   * @param  {Object}   replaceMap
	   * @param  {Object}   keepMap
	   * @param  {Array}    rules
	   * @return {Function}
	   */
	  function replaceWord (replaceMap, keepMap, rules) {
	    return function (word) {
	      // Get the correct token and case restoration functions.
	      var token = word.toLowerCase();

	      // Check against the keep object map.
	      if (keepMap.hasOwnProperty(token)) {
	        return restoreCase(word, token);
	      }

	      // Check against the replacement map for a direct word replacement.
	      if (replaceMap.hasOwnProperty(token)) {
	        return restoreCase(word, replaceMap[token]);
	      }

	      // Run all the rules against the word.
	      return sanitizeWord(token, word, rules);
	    };
	  }

	  /**
	   * Pluralize or singularize a word based on the passed in count.
	   *
	   * @param  {String}  word
	   * @param  {Number}  count
	   * @param  {Boolean} inclusive
	   * @return {String}
	   */
	  function pluralize (word, count, inclusive) {
	    var pluralized = count === 1
	      ? pluralize.singular(word) : pluralize.plural(word);

	    return (inclusive ? count + ' ' : '') + pluralized;
	  }

	  /**
	   * Pluralize a word.
	   *
	   * @type {Function}
	   */
	  pluralize.plural = replaceWord(
	    irregularSingles, irregularPlurals, pluralRules
	  );

	  /**
	   * Singularize a word.
	   *
	   * @type {Function}
	   */
	  pluralize.singular = replaceWord(
	    irregularPlurals, irregularSingles, singularRules
	  );

	  /**
	   * Add a pluralization rule to the collection.
	   *
	   * @param {(string|RegExp)} rule
	   * @param {string}          replacement
	   */
	  pluralize.addPluralRule = function (rule, replacement) {
	    pluralRules.push([sanitizeRule(rule), replacement]);
	  };

	  /**
	   * Add a singularization rule to the collection.
	   *
	   * @param {(string|RegExp)} rule
	   * @param {string}          replacement
	   */
	  pluralize.addSingularRule = function (rule, replacement) {
	    singularRules.push([sanitizeRule(rule), replacement]);
	  };

	  /**
	   * Add an uncountable word rule.
	   *
	   * @param {(string|RegExp)} word
	   */
	  pluralize.addUncountableRule = function (word) {
	    if (typeof word === 'string') {
	      uncountables[word.toLowerCase()] = true;
	      return;
	    }

	    // Set singular and plural references for the word.
	    pluralize.addPluralRule(word, '$0');
	    pluralize.addSingularRule(word, '$0');
	  };

	  /**
	   * Add an irregular word definition.
	   *
	   * @param {String} single
	   * @param {String} plural
	   */
	  pluralize.addIrregularRule = function (single, plural) {
	    plural = plural.toLowerCase();
	    single = single.toLowerCase();

	    irregularSingles[single] = plural;
	    irregularPlurals[plural] = single;
	  };

	  /**
	   * Irregular rules.
	   */
	  [
	    // Pronouns.
	    ['I', 'we'],
	    ['me', 'us'],
	    ['he', 'they'],
	    ['she', 'they'],
	    ['them', 'them'],
	    ['myself', 'ourselves'],
	    ['yourself', 'yourselves'],
	    ['itself', 'themselves'],
	    ['herself', 'themselves'],
	    ['himself', 'themselves'],
	    ['themself', 'themselves'],
	    ['is', 'are'],
	    ['was', 'were'],
	    ['has', 'have'],
	    ['this', 'these'],
	    ['that', 'those'],
	    // Words ending in with a consonant and `o`.
	    ['echo', 'echoes'],
	    ['dingo', 'dingoes'],
	    ['volcano', 'volcanoes'],
	    ['tornado', 'tornadoes'],
	    ['torpedo', 'torpedoes'],
	    // Ends with `us`.
	    ['genus', 'genera'],
	    ['viscus', 'viscera'],
	    // Ends with `ma`.
	    ['stigma', 'stigmata'],
	    ['stoma', 'stomata'],
	    ['dogma', 'dogmata'],
	    ['lemma', 'lemmata'],
	    ['schema', 'schemata'],
	    ['anathema', 'anathemata'],
	    // Other irregular rules.
	    ['ox', 'oxen'],
	    ['axe', 'axes'],
	    ['die', 'dice'],
	    ['yes', 'yeses'],
	    ['foot', 'feet'],
	    ['eave', 'eaves'],
	    ['goose', 'geese'],
	    ['tooth', 'teeth'],
	    ['quiz', 'quizzes'],
	    ['human', 'humans'],
	    ['proof', 'proofs'],
	    ['carve', 'carves'],
	    ['valve', 'valves'],
	    ['looey', 'looies'],
	    ['thief', 'thieves'],
	    ['groove', 'grooves'],
	    ['pickaxe', 'pickaxes'],
	    ['whiskey', 'whiskies']
	  ].forEach(function (rule) {
	    return pluralize.addIrregularRule(rule[0], rule[1]);
	  });

	  /**
	   * Pluralization rules.
	   */
	  [
	    [/s?$/i, 's'],
	    [/([^aeiou]ese)$/i, '$1'],
	    [/(ax|test)is$/i, '$1es'],
	    [/(alias|[^aou]us|tlas|gas|ris)$/i, '$1es'],
	    [/(e[mn]u)s?$/i, '$1s'],
	    [/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i, '$1'],
	    [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'],
	    [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
	    [/(seraph|cherub)(?:im)?$/i, '$1im'],
	    [/(her|at|gr)o$/i, '$1oes'],
	    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'],
	    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'],
	    [/sis$/i, 'ses'],
	    [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
	    [/([^aeiouy]|qu)y$/i, '$1ies'],
	    [/([^ch][ieo][ln])ey$/i, '$1ies'],
	    [/(x|ch|ss|sh|zz)$/i, '$1es'],
	    [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
	    [/(m|l)(?:ice|ouse)$/i, '$1ice'],
	    [/(pe)(?:rson|ople)$/i, '$1ople'],
	    [/(child)(?:ren)?$/i, '$1ren'],
	    [/eaux$/i, '$0'],
	    [/m[ae]n$/i, 'men'],
	    ['thou', 'you']
	  ].forEach(function (rule) {
	    return pluralize.addPluralRule(rule[0], rule[1]);
	  });

	  /**
	   * Singularization rules.
	   */
	  [
	    [/s$/i, ''],
	    [/(ss)$/i, '$1'],
	    [/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(?:sis|ses)$/i, '$1sis'],
	    [/(^analy)(?:sis|ses)$/i, '$1sis'],
	    [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
	    [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
	    [/ies$/i, 'y'],
	    [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, '$1ie'],
	    [/\b(mon|smil)ies$/i, '$1ey'],
	    [/(m|l)ice$/i, '$1ouse'],
	    [/(seraph|cherub)im$/i, '$1'],
	    [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i, '$1'],
	    [/(e[mn]u)s?$/i, '$1'],
	    [/(movie|twelve)s$/i, '$1'],
	    [/(cris|test|diagnos)(?:is|es)$/i, '$1is'],
	    [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'],
	    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'],
	    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'],
	    [/(alumn|alg|vertebr)ae$/i, '$1a'],
	    [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
	    [/(matr|append)ices$/i, '$1ix'],
	    [/(pe)(rson|ople)$/i, '$1rson'],
	    [/(child)ren$/i, '$1'],
	    [/(eau)x?$/i, '$1'],
	    [/men$/i, 'man']
	  ].forEach(function (rule) {
	    return pluralize.addSingularRule(rule[0], rule[1]);
	  });

	  /**
	   * Uncountable rules.
	   */
	  [
	    // Singular words with no plurals.
	    'advice',
	    'adulthood',
	    'agenda',
	    'aid',
	    'alcohol',
	    'ammo',
	    'athletics',
	    'bison',
	    'blood',
	    'bream',
	    'buffalo',
	    'butter',
	    'carp',
	    'cash',
	    'chassis',
	    'chess',
	    'clothing',
	    'commerce',
	    'cod',
	    'cooperation',
	    'corps',
	    'digestion',
	    'debris',
	    'diabetes',
	    'energy',
	    'equipment',
	    'elk',
	    'excretion',
	    'expertise',
	    'flounder',
	    'fun',
	    'gallows',
	    'garbage',
	    'graffiti',
	    'headquarters',
	    'health',
	    'herpes',
	    'highjinks',
	    'homework',
	    'housework',
	    'information',
	    'jeans',
	    'justice',
	    'kudos',
	    'labour',
	    'literature',
	    'machinery',
	    'mackerel',
	    'mail',
	    'media',
	    'mews',
	    'moose',
	    'music',
	    'news',
	    'pike',
	    'plankton',
	    'pliers',
	    'pollution',
	    'premises',
	    'rain',
	    'research',
	    'rice',
	    'salmon',
	    'scissors',
	    'series',
	    'sewage',
	    'shambles',
	    'shrimp',
	    'species',
	    'staff',
	    'swine',
	    'trout',
	    'traffic',
	    'transporation',
	    'tuna',
	    'wealth',
	    'welfare',
	    'whiting',
	    'wildebeest',
	    'wildlife',
	    'you',
	    // Regexes.
	    /pox$/i, // "chickpox", "smallpox"
	    /ois$/i,
	    /deer$/i, // "deer", "reindeer"
	    /fish$/i, // "fish", "blowfish", "angelfish"
	    /sheep$/i,
	    /measles$/i,
	    /[^aeiou]ese$/i // "chinese", "japanese"
	  ].forEach(pluralize.addUncountableRule);

	  return pluralize;
	});


/***/ },
/* 9 */
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

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.validateModel = undefined;

	var _validators = __webpack_require__(5);

	var _is = __webpack_require__(4);

	/**
	 * Validate if model is compatible with schema
	 * @param  {Object} model  model object
	 * @param  {Object} schema schema object
	 * @return {Array} errors  if during validation have errors, then push all to array
	 */
	var validateModel = exports.validateModel = function validateModel(model, schema) {

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

	    return errors;
	};

/***/ }
/******/ ]);