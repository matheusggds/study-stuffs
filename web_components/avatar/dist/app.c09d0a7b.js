// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/app.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(function () {
  var ICONS = {
    camera: 'M12 14.5a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5zM12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm9.24 9.78c.12-.6.36-2.09.35-4.78 0-2.7-.24-4.18-.36-4.77-.41-.14-1.47-.4-3.74-.58-.23-.02-.47-.03-.73-.06-.7-.07-.87-.4-1.04-.57-.98-.94-2.29-1.52-3.72-1.52-1.43 0-2.74.58-3.72 1.51-.17.17-.34.5-1.04.57-.41.05-.78.06-1.13.09-1.97.17-2.94.41-3.35.54-.13.59-.36 2.09-.36 4.78 0 2.71.24 4.2.36 4.79.66.22 2.94.77 9.24.77 6.26 0 8.55-.54 9.24-.77zM22.5 7.47c.02.06.5 1.6.5 5.52 0 3.93-.48 5.48-.5 5.55-.05.16-.16.3-.3.39-.28.18-2.09 1.07-10.2 1.07s-9.92-.89-10.2-1.07a.723.723 0 0 1-.3-.39c-.02-.07-.5-1.63-.5-5.55s.48-5.48.51-5.54c.05-.17.16-.31.3-.4.21-.13 1.31-.65 5.28-.9C8.35 4.82 10.08 4 12 4s3.66.82 4.91 2.15c3.98.26 5.08.8 5.29.93.14.09.25.23.3.39z',
    userNoProfile: 'M 37 57.5735 C 23.6533 57.6 15.3067 53.9733 10.32 46.56 C 12.6667 43.4667 18.72 37.7067 23.68 37.736 C 26.16 39.04 28.9867 39.7867 32 39.7867 C 35.0133 39.7867 37.84 39.04 40.32 37.736 C 45.28 37.68 51.3067 43.44 53.68 46.56 C 48.6933 53.9733 40.3467 57.6 32 57.5735 M 32 9.65333 C 38.7467 9.65333 44.2133 15.12 44.2133 21.8667 C 44.2133 28.6133 38.7467 34.08 32 34.08 C 25.2533 34.08 19.7867 28.6133 19.7867 21.8667 C 19.7867 15.12 25.2533 9.65333 32 9.65333 M 32 0 C 14.32 0 0 14.32 0 32 C 0 49.68 14.32 64 32 64 C 49.68 64 64 49.68 64 32 C 64 14.32 49.68 0 32 0',
    userProfile: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
  };
  var sizes = {
    'SM': {
      avatar: 75,
      icon: 22
    },
    'DEFAULT': {
      avatar: 125,
      icon: 30
    },
    'LG': {
      avatar: 175,
      icon: 50
    }
  }; // first we create a <template> 

  var template = document.createElement('template'); // then insert some html inside 
  // the reason we're using a template is because cloning templates is much cheaper than calling .innerHTML for all instances of our component.

  template.innerHTML = "\n    <style>\n        :host {\n            display: inline;\n            font-family: sans-serif;\n            margin-right: 30px;\n        }\n\n        .greg-avatar__wrapper {\n            display: inline-block;\n            z-index: 5;\n        }\n\n        .greg-avatar__title {\n            margin-bottom: 10px;\n        }\n\n        .greg-avatar__img-wrapper {\n            position: relative;\n        }\n\n        .greg-avatar__img {\n            object-fit: cover;\n            border-radius: 100%;\n        }\n\n        .greg-avatar__edit-icon {\n            border-radius: 100%;\n            position: absolute;\n            right: 0;\n            bottom: 0;\n            z-index: 15;\n            border-color: purple;\n            color: purple;\n            border: solid 1px;\n            background: white;\n        }\n    </style>\n    <div class=\"greg-avatar__wrapper\">\n        <div class=\"greg-avatar__title\">\n        </div>\n        <div class=\"greg-avatar__img-wrapper\">\n        </div>\n    </div>\n    "; // We'll use our constructor to attach our shadowroot, and we'll set it to open mode

  var gregAvatar =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(gregAvatar, _HTMLElement);

    function gregAvatar() {
      var _this;

      _classCallCheck(this, gregAvatar);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(gregAvatar).call(this));
      _this._shadowRoot = _this.attachShadow({
        'mode': 'open'
      });

      _this._shadowRoot.appendChild(template.content.cloneNode(true)); // elements


      _this.$title = _this._shadowRoot.querySelector('.greg-avatar__title');
      _this.$imgWrapper = _this.shadowRoot.querySelector('.greg-avatar__img-wrapper'); // state

      _this._currentSize = _this.getAttribute('size') && sizes[_this.getAttribute('size')] || sizes.DEFAULT;
      _this._currentImage = _this.getAttribute('avatar-image') || null;
      _this._currentTitle = _this.getAttribute('title') || null;
      return _this;
    }

    _createClass(gregAvatar, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        console.log(this._currentSize);
        this.$title.innerHTML = this._currentTitle;

        if (this.hasAttribute('avatar-image')) {
          this._renderImage(this._currentImage, this._currentSize);
        } else {
          this._renderImage();
        }

        if (this.hasAttribute('editable')) {
          var editAvatar = document.createElement('div');
          editAvatar.className = 'greg-avatar__edit-icon';
          editAvatar.style.width = editAvatar.style.height = "".concat(this._currentSize.icon, "px");
          var iconAvatar = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          iconAvatar.setAttribute('width', "".concat(this._currentSize.avatar, "px"));
          iconAvatar.setAttribute('height', "".concat(this._currentSize.avatar, "px"));
          iconAvatar.setAttribute('viewBox', '0 0 64 64');
          this.$imgWrapper.appendChild(editAvatar);
        }
      }
    }, {
      key: "_render",
      value: function _render(el, value) {
        el.innerHTML = value;
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
          case 'title':
            this._render(this.$title, newValue);

            break;

          default:
            break;
        }
      }
    }, {
      key: "_renderImage",
      value: function _renderImage(imgPath) {
        var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._currentSize;
        var avatarSize = size.avatar,
            iconSize = size.icon;
        var avatarElContent;
        this.$imgWrapper.style.width = this.$imgWrapper.style.height = "".concat(avatarSize, "px");

        if (imgPath) {
          avatarElContent = document.createElement('img');
          avatarElContent.setAttribute('src', imgPath);
          avatarElContent.style.width = avatarElContent.style.height = "".concat(avatarSize, "px");
        } else {
          avatarElContent = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          avatarElContent.setAttribute('width', "".concat(avatarSize, "px"));
          avatarElContent.setAttribute('height', "".concat(avatarSize, "px"));
          avatarElContent.setAttribute('viewBox', '0 0 64 64');
          var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('d', ICONS.userNoProfile);
          avatarElContent.appendChild(path);
        }

        avatarElContent.className = 'greg-avatar__img';
        this.$imgWrapper.appendChild(avatarElContent);
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['title'];
      }
    }]);

    return gregAvatar;
  }(_wrapNativeSuper(HTMLElement));

  window.customElements.define('greg-avatar', gregAvatar);
})();
},{}],"../../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59410" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/app.js"], null)
//# sourceMappingURL=/app.c09d0a7b.js.map