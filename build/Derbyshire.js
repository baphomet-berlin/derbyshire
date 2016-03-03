(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Mixer = require('./lib/Mixer.es6');

var _Mixer2 = _interopRequireDefault(_Mixer);

var _SourcesArray = require('./lib/SourcesArray.es6');

var _SourcesArray2 = _interopRequireDefault(_SourcesArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AudioCtx = window.AudioContext || window.webkitAudioContext || null;

var Derbyshire = function () {
  function Derbyshire() {
    _classCallCheck(this, Derbyshire);

    this._ctx = new AudioCtx();
    this._out = this.ctx.destination;
    this._sources = new _SourcesArray2.default();
    this.mixer = new _Mixer2.default(this.ctx, this.sources);
    return this;
  }

  _createClass(Derbyshire, [{
    key: 'sources',
    get: function get() {
      return this._sources;
    }
  }, {
    key: 'ctx',
    get: function get() {
      return this._ctx;
    }
  }, {
    key: 'out',
    get: function get() {
      return this._out;
    }
  }]);

  return Derbyshire;
}();

exports.default = Derbyshire;

},{"./lib/Mixer.es6":2,"./lib/SourcesArray.es6":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DerbyshireMixerChannel = function DerbyshireMixerChannel(ctx) {
  _classCallCheck(this, DerbyshireMixerChannel);

  this._gain = ctx.createGain();
  this._gain.connect(ctx.destination);
};

var DerbyshireMixerChannelMain = function (_DerbyshireMixerChann) {
  _inherits(DerbyshireMixerChannelMain, _DerbyshireMixerChann);

  function DerbyshireMixerChannelMain(ctx) {
    _classCallCheck(this, DerbyshireMixerChannelMain);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DerbyshireMixerChannelMain).call(this, ctx));
  }

  return DerbyshireMixerChannelMain;
}(DerbyshireMixerChannel);

var DerbyshireMixerChannelTrack = function (_DerbyshireMixerChann2) {
  _inherits(DerbyshireMixerChannelTrack, _DerbyshireMixerChann2);

  function DerbyshireMixerChannelTrack(ctx, node) {
    _classCallCheck(this, DerbyshireMixerChannelTrack);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(DerbyshireMixerChannelTrack).call(this, ctx));

    node.connect(_this2._gain);
    return _this2;
  }

  return DerbyshireMixerChannelTrack;
}(DerbyshireMixerChannel);

var DerbyshireMixer = function DerbyshireMixer(ctx, sources) {
  _classCallCheck(this, DerbyshireMixer);

  this._ctx = ctx;
  this._out = ctx.destination;
  this._channels = {
    main: new DerbyshireMixerChannelMain(ctx)
  };
};

exports.DerbyshireMixer = DerbyshireMixer;
exports.DerbyshireMixerChannel = DerbyshireMixerChannel;
exports.DerbyshireMixerChannelMain = DerbyshireMixerChannelMain;
exports.DerbyshireMixerChannelTrack = DerbyshireMixerChannelTrack;
exports.default = DerbyshireMixer;

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DerbyshireSourcesArray = function (_Array) {
  _inherits(DerbyshireSourcesArray, _Array);

  function DerbyshireSourcesArray() {
    _classCallCheck(this, DerbyshireSourcesArray);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DerbyshireSourcesArray).call(this));
  }

  _createClass(DerbyshireSourcesArray, [{
    key: "push",
    value: function push(type) {
      _get(Object.getPrototypeOf(DerbyshireSourcesArray.prototype), "push", this).call(this, type);
    }
  }]);

  return DerbyshireSourcesArray;
}(Array);

exports.default = DerbyshireSourcesArray;

},{}]},{},[1]);
