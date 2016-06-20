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

	            if (typeof model_name !== 'string') {

	                throw TypeError('The Model name must be String.');
	            } else if (model_name == '') {

	                throw Error('The Model name not be empty.');
	            } else if (schema instanceof _schema2.default === false) {
	                /**
	                 * If the schema parameter is not instance from Schema,
	                 * then validate schema
	                 */
	                _schema2.default.validate(schema);
	            } else {

	                /**
	                 * Instance from @class Model
	                 */
	                return _model2.default.initialize(model_name, schema);
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


	  _createClass(Model, null, [{
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

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _schemaTypes = __webpack_require__(3);

	var _validators = __webpack_require__(4);

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
	            if ((typeof schema === 'undefined' ? 'undefined' : _typeof(schema)) !== 'object') {
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
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * All types supported to Schema
	 * @type {Array}
	 */
	var TYPES = exports.TYPES = ['String', 'Number', 'Date', 'Buffer', 'Boolean', 'Array'];

	/**
	 * Validate all types based on TYPES
	 * @param  {Object} schema
	 */
	var validateTypes = exports.validateTypes = function validateTypes(schema) {
	    for (var prop in schema) {
	        var type_prop = schema[prop].type;
	        if (typeof type_prop !== 'undefined') {
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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * All validators supported
	 * @type {Array}
	 */
	var VALIDATORS = exports.VALIDATORS = ['required', 'min', 'max', 'default'];

	/**
	 * @param  {Object|@class Schema} schema
	 */
	var validateValidators = exports.validateValidators = function validateValidators(schema) {
	    hasRequired(schema);
	    hasMinMax(schema);
	    hasDefault(schema);
	};

	/**
	 * [hasRequired description]
	 * @param  {[type]} schema [description]
	 * @return {[type]}        [description]
	 */
	var hasRequired = function hasRequired(schema) {
	    var required_type = 'Boolean';
	    for (var prop in schema) {
	        var required_prop = schema[prop].required;
	        if (typeof required_prop !== 'undefined') {
	            var required_prop_value = required_prop.constructor.name;
	            if (required_prop_value !== required_type) {
	                throw TypeError(required_prop_value + ' is not a Boolean. Use: \'true\' or \'false\'');
	            }
	        }
	    }
	};

	/**
	 * [hasMinMax description]
	 * @param  {[type]} schema [description]
	 * @return {[type]}        [description]
	 */
	var hasMinMax = function hasMinMax(schema) {
	    for (var prop in schema) {

	        var min_prop = schema[prop].min;
	        var max_prop = schema[prop].max;

	        if (typeof min_prop !== 'undefined') {
	            validateMinMax('min', min_prop);
	        }

	        if (typeof max_prop !== 'undefined') {
	            validateMinMax('max', max_prop);
	        }
	    }
	};

	/**
	 * [validateMinMax description]
	 * @param  {[type]} prop [description]
	 * @return {[type]}      [description]
	 */
	var validateMinMax = function validateMinMax(name, prop) {

	    if (Array.isArray(prop)) {

	        var amount = prop[0];
	        var message = prop[1];

	        if (typeof amount == 'undefined' || typeof amount !== 'number') {
	            throw TypeError('Invalid first index (number) from \'' + name + '\' property. Must be Number.');
	        }

	        if (typeof message !== 'undefined' && typeof message !== 'string') {
	            throw TypeError('Invalid second index (message) from \'' + name + '\' property. Must be String.');
	        }
	    } else if (typeof prop !== 'number') {
	        throw TypeError('Invalid value to \'' + name + '\' property. Use: Number or Array.');
	    }
	};

	/**
	 * [hasDefault description]
	 * @param  {[type]} schema [description]
	 * @return {[type]}        [description]
	 */
	var hasDefault = function hasDefault(schema) {};

/***/ }
/******/ ]);