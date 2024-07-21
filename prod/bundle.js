(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Sprite = exports["default"] = /*#__PURE__*/_createClass(function Sprite(texture) {
  _classCallCheck(this, Sprite);
  this.texture = texture;
  this.pos = {
    x: 0,
    y: 0
  };
});

},{}],2:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Texture = exports["default"] = /*#__PURE__*/_createClass(function Texture(url) {
  _classCallCheck(this, Texture);
  this.img = new Image();
  this.img.src = url;
});

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Container = exports["default"] = /*#__PURE__*/function () {
  function Container() {
    _classCallCheck(this, Container);
    this.pos = {
      x: 0,
      y: 0
    };
    this.children = [];
  }
  return _createClass(Container, [{
    key: "add",
    value: function add(child) {
      this.children.push(child);
      return child;
    }
  }, {
    key: "remove",
    value: function remove(child) {
      this.children = this.children.filter(function (c) {
        return c !== child;
      });
      return child;
    }
  }, {
    key: "update",
    value: function update(dt, t) {
      this.children = this.children.filter(function (child) {
        if (child.update) {
          child.update(dt, t);
        }
        ;
        return child.dead ? false : true;
      });
    }
  }]);
}();

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var KeyControls = exports["default"] = /*#__PURE__*/function () {
  function KeyControls() {
    var _this = this;
    _classCallCheck(this, KeyControls);
    this.keys = {};
    var arrowcodes = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    document.addEventListener('keydown', function (event) {
      if (arrowcodes.indexOf(event.key) >= 0) {
        event.preventDefault();
      }
      _this.keys[event.key] = true;
      console.log(event.key);
    });
    document.addEventListener('keyup', function (event) {
      _this.keys[event.key] = false;
    });
  }
  return _createClass(KeyControls, [{
    key: "action",
    get: function get() {
      if (this.keys[" "]) {
        return true;
      }
    }
  }, {
    key: "x",
    get: function get() {
      //left arrow or A key 
      if (this.keys["ArrowLeft"] || this.keys["a"]) {
        return -1;
      }
      //right arrow or D key 
      if (this.keys["ArrowRight"] || this.keys["d"]) {
        return 1;
      }
      return 0;
    }
  }, {
    key: "y",
    get: function get() {
      //up arrow or W key 
      if (this.keys["ArrowUp"] || this.keys["w"]) {
        return -1;
      }
      //down arrow or S key 
      if (this.keys["ArrowDown"] || this.keys["s"]) {
        return 1;
      }
      return 0;
    }
  }, {
    key: "key",
    value: function key(_key, value) {
      if (value !== undefined) {
        this.keys[_key] = false;
      }
      return this.keys[_key];
    }
  }, {
    key: "reset",
    value: function reset() {
      for (var key in this.keys) {
        this.keys[key] = false;
      }
    }
  }]);
}();
;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _key_controls = _interopRequireDefault(require("./controls/key_controls.js"));
var _container = _interopRequireDefault(require("./container.js"));
var _text = _interopRequireDefault(require("./text.js"));
var _Sprite = _interopRequireDefault(require("./Sprite.js"));
var _Texture = _interopRequireDefault(require("./Texture.js"));
var _CanvasRenderer = _interopRequireDefault(require("./renderer/CanvasRenderer.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  KeyControls: _key_controls["default"],
  Container: _container["default"],
  Text: _text["default"],
  Sprite: _Sprite["default"],
  Texture: _Texture["default"],
  CanvasRenderer: _CanvasRenderer["default"]
};

},{"./Sprite.js":1,"./Texture.js":2,"./container.js":3,"./controls/key_controls.js":4,"./renderer/CanvasRenderer.js":6,"./text.js":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CanvasRenderer = exports["default"] = /*#__PURE__*/function () {
  function CanvasRenderer(w, h) {
    _classCallCheck(this, CanvasRenderer);
    var canvas = document.createElement("canvas");
    this.w = canvas.width = w;
    this.h = canvas.height = h;
    this.view = canvas;
    this.ctx = canvas.getContext("2d");
    this.ctx.textBaseline = "top";
  }
  return _createClass(CanvasRenderer, [{
    key: "render",
    value: function render(container) {
      var clear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var ctx = this.ctx;
      function renderRec(container) {
        //render container children
        container.children.forEach(function (child) {
          if (child.visible == false) {
            return;
          }
          ctx.save();
          //Handle child types
          if (child.children) {
            renderRec(child);
          }
          if (child.text) {
            var _child$style = child.style,
              font = _child$style.font,
              fill = _child$style.fill,
              align = _child$style.align;
            if (font) ctx.font = font;
            if (fill) ctx.fillStyle = fill;
            if (align) ctx.textAlign = align;
            ctx.fillText(child.text, child.pos.x, child.pos.y);
          } else if (child.texture) {
            ctx.drawImage(child.texture.img, child.pos.x, child.pos.y);
          }
          ctx.restore();
        });
      }
      if (clear) {
        ctx.clearRect(0, 0, this.w, this.h);
      }
      renderRec(container);
    }
  }]);
}();

},{}],7:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Text = exports["default"] = /*#__PURE__*/_createClass(function Text() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  _classCallCheck(this, Text);
  this.pos = {
    x: 0,
    y: 0
  };
  this.text = text;
  this.style = style;
});

},{}],8:[function(require,module,exports){
"use strict";

var _index = _interopRequireDefault(require("../derrick/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//bg for barbarian game
//renderer.view.style.backgroundImage = "url(../res/images/background.jpg)"

//variables

var Container = _index["default"].Container,
  Text = _index["default"].Text,
  KeyControls = _index["default"].KeyControls,
  Texture = _index["default"].Texture,
  Sprite = _index["default"].Sprite,
  CanvasRenderer = _index["default"].CanvasRenderer;
var w = 640;
var h = 300;

//load textures
var textures = {
  background: new Texture("res/images/bg.png"),
  spaceship: new Texture("res/images/spaceship.png"),
  bullet: new Texture("res/images/bullet.png"),
  baddie: new Texture("res/images/baddie.png")
};
window.addEventListener("load", begin);
function begin() {
  //game setup
  var dt = 0;
  var last = 0;
  var renderer = new CanvasRenderer(w, h);
  renderer.view.style.backgroundColor = "#000000";
  document.getElementById("canvas").appendChild(renderer.view);

  //make game objects
  var scene = new Container();
  var controls = new KeyControls();

  //make a spaceship
  var ship = new Sprite(textures.spaceship);
  ship.pos.x = 120;
  ship.pos.y = h / 2 - 16;
  ship.update = function (dt) {
    //update player position
    var pos = this.pos;
    pos.x += controls.x * dt * 200;
    pos.y += controls.y * dt * 200;
    if (pos.x < 0) pos.x = 0;
    if (pos.x + 32 > w) pos.x = w - 32;
    if (pos.y < 0) pos.y = 0;
    if (pos.y + 32 > h) pos.y = h - 32;
  };

  //bullets
  var bullets = new Container();
  function fireBullet(x, y) {
    var bullet = new Sprite(textures.bullet);
    bullet.pos.x = x;
    bullet.pos.y = y;
    bullet.update = function (dt) {
      this.pos.x += 400 * dt;
      if (bullet.pos.x >= w + 20) {
        bullet.dead = true;
      }
    };
    bullets.add(bullet);
  }

  //bad guys
  var baddies = new Container();
  function spawnBaddie(x, y, speed) {
    var baddie = new Sprite(textures.baddie);
    baddie.pos.x = x;
    baddie.pos.y = y;
    baddie.update = function (dt) {
      this.pos.x += speed * dt;
    };
    baddies.add(baddie);
  }

  //add the score
  var scoreAmount = 0;
  var score = new Text("Score: ".concat(scoreAmount), {
    font: "20px sans serif",
    fill: "#8B8994",
    align: "center"
  });
  score.pos.x = w / 2;
  score.pos.y = h - 30;
  score.update = function (dt) {
    this.text = "Score: ".concat(scoreAmount);
  };
  function doGameOver() {
    var gameOverMessage = new Text("Game Over", {
      font: "30pt sans serif",
      fill: "#8B8994",
      align: "center"
    });
    gameOverMessage.pos.x = w / 2;
    gameOverMessage.pos.y = 120;
    scene.add(gameOverMessage);
    scene.remove(ship);
    gameOver = true;
  }

  //add to scene container
  scene.add(new Sprite(textures.background));
  scene.add(ship);
  scene.add(bullets);
  scene.add(baddies);
  scene.add(score);

  //game state variables
  var lastShot = 0;
  var lastSpawn = 0;
  var spawnSpeed = 1.0;
  var gameOver = false;

  //game loop
  function loop(ms) {
    requestAnimationFrame(loop);
    var t = ms / 1000;
    dt = t - last;
    last = t;
    //Game logic code
    scene.update(dt, t);
    renderer.render(scene);
    //shot rate
    if (!gameOver && controls.action && t - lastShot > 0.15) {
      lastShot = t;
      fireBullet(ship.pos.x + 24, ship.pos.y + 10);
    }
    //spawn bad guys
    if (t - lastSpawn > spawnSpeed) {
      lastSpawn = t;
      var speed = -50 - Math.random() * Math.random() * 100;
      var position = Math.random() * (h - 24);
      spawnBaddie(w, position, speed);

      //accel rate of spawn
      spawnSpeed = spawnSpeed < 0.05 ? 0.6 : spawnSpeed * 0.97 + 0.001;
    }
    //check collisions or off screen
    baddies.children.forEach(function (baddie) {
      bullets.children.forEach(function (bullet) {
        var dx = baddie.pos.x + 16 - (bullet.pos.x + 8);
        var dy = baddie.pos.y + 16 - (bullet.pos.y + 8);
        if (Math.sqrt(dx * dx + dy * dy) < 24) {
          baddie.dead = true;
          bullet.dead = true;
          scoreAmount += Math.floor(t);
        }
        if (baddie.pos.x < 32) {
          if (!gameOver) {
            doGameOver();
          }
          baddie.dead = true;
        }
      });
      var dx = ship.pos.x + 16 - (baddie.pos.x + 16);
      var dy = ship.pos.y + 16 - (baddie.pos.y + 16);
      if (Math.sqrt(dx * dx + dy * dy) < 32) {
        if (!gameOver) {
          doGameOver();
        }
      }
    });
  }
  requestAnimationFrame(loop);
}

},{"../derrick/index.js":5}]},{},[8]);
