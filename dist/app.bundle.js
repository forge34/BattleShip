/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/main.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/main.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
}

body {
    background-color: #6C71A5;
}

.grid {
    display: grid;
    grid-template-columns: 45vw 10vw 45vw;
}

#bc1 , #bc2 {
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
}

#start {
    grid-column: 2/3;
    align-self: self-start;
}

#bc1 {
    grid-column: 1/2;
}

#bc2 {
    grid-column: 3 / -1;   
}

#b1 , #b2 {
    background-color: white;
}

.board {
    margin-top: 10%;
    display: flex;
    border-style: solid;
    border-color: black;
    border-width: 3px;
    align-self: center;
    width: 800px;
    height: 800px;
    flex-wrap: wrap;
}

.cell {
    border-style: solid;
    border-width: 0.5px;
}

.ship {
    box-shadow:0px 0px 0px 4px red inset;

}

.test::after{
    font-size: 4em;
    text-align: center;
    color: black;
    margin: 0.25em;
    content: "X";
}   

.btn-container {
    display: flex;
}

.btn {
    font-size: 27px;
    background-color: #4FFA5D;
    border-radius: 7px;
    border-style: none;
    margin: 10px;
    padding: 15px;
}

.hit {
   
}

.hit::after {
    content: "X";
    font-size: 4em;
    text-align: center;
}

.hit2 {

}

.hit2::after {
    content: "O";
    font-size: 4em;
    text-align: center;
}

.btn:hover{
    opacity: 0.75;
}

input {
    font-size: 30px;
    border-radius: 7px;
    border-style: none;
    padding: 6px;
    margin-top: 20px;
}`, "",{"version":3,"sources":["webpack://./src/style/main.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,qCAAqC;AACzC;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;;AAExC;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,YAAY;IACZ,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,aAAa;AACjB;;AAEA;;AAEA;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,kBAAkB;AACtB;;AAEA;;AAEA;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;AACpB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-color: #6C71A5;\n}\n\n.grid {\n    display: grid;\n    grid-template-columns: 45vw 10vw 45vw;\n}\n\n#bc1 , #bc2 {\n    margin: 5px;\n    display: flex;\n    flex-direction: column;\n    justify-items: center;\n    align-items: center;\n}\n\n#start {\n    grid-column: 2/3;\n    align-self: self-start;\n}\n\n#bc1 {\n    grid-column: 1/2;\n}\n\n#bc2 {\n    grid-column: 3 / -1;   \n}\n\n#b1 , #b2 {\n    background-color: white;\n}\n\n.board {\n    margin-top: 10%;\n    display: flex;\n    border-style: solid;\n    border-color: black;\n    border-width: 3px;\n    align-self: center;\n    width: 800px;\n    height: 800px;\n    flex-wrap: wrap;\n}\n\n.cell {\n    border-style: solid;\n    border-width: 0.5px;\n}\n\n.ship {\n    box-shadow:0px 0px 0px 4px red inset;\n\n}\n\n.test::after{\n    font-size: 4em;\n    text-align: center;\n    color: black;\n    margin: 0.25em;\n    content: \"X\";\n}   \n\n.btn-container {\n    display: flex;\n}\n\n.btn {\n    font-size: 27px;\n    background-color: #4FFA5D;\n    border-radius: 7px;\n    border-style: none;\n    margin: 10px;\n    padding: 15px;\n}\n\n.hit {\n   \n}\n\n.hit::after {\n    content: \"X\";\n    font-size: 4em;\n    text-align: center;\n}\n\n.hit2 {\n\n}\n\n.hit2::after {\n    content: \"O\";\n    font-size: 4em;\n    text-align: center;\n}\n\n.btn:hover{\n    opacity: 0.75;\n}\n\ninput {\n    font-size: 30px;\n    border-radius: 7px;\n    border-style: none;\n    padding: 6px;\n    margin-top: 20px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/ai.js":
/*!*******************!*\
  !*** ./src/ai.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ai: () => (/* binding */ Ai)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/helper.js");





let availableShips = Array.from(Object.keys(_helper__WEBPACK_IMPORTED_MODULE_1__.Type))


class Ai extends _player__WEBPACK_IMPORTED_MODULE_0__.Player {
    constructor(){
        super()
    }

    place(){
        for(let i=0;i<5;i++){
            this.board.placeShip(`${_helper__WEBPACK_IMPORTED_MODULE_1__.letters[(0,_helper__WEBPACK_IMPORTED_MODULE_1__.random)(0,9)]}${(0,_helper__WEBPACK_IMPORTED_MODULE_1__.random)(1,7)}` , availableShips[i])
        }
    }

    hit(pos){
        this.board.recieveHit()
    }
}



/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/helper.js");



class GameBoard {

    constructor() {
        this.board = {}
        for (let i = 0; i < 10; i++) {
            for (let j = 1; j <= 10; j++) {
                this.board[`${_helper__WEBPACK_IMPORTED_MODULE_1__.letters[i]}${j}`] = { missed: false, hit: false, ship: null }
            }
        }
        this.onBoard = []
        this.shipCount = 0;
    }

    boardData(key) {
        return this.board[key]
    }

    alreadyOnBoard(ship){
        if(this.onBoard.includes(ship)){
            return true
        }else return false
    }

    addOnBoard(ship){
        this.onBoard.push(ship)
    }

    placeShip(pos, type) {
        let ship = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(type)

        this.shipCount++

        for (let i = 0; i < ship.length; i++) {
            if ((Number(pos[1])) < 11) {
                this.board[`${pos[0]}${Number(pos[1])+i}`].ship = ship;
            }
        }
        this.onBoard.push(type)
    }

    hasShip(pos) {
        if (this.boardData(pos).ship) {
            return true
        } else return false
    }

    recieveHit(pos) {
        let b = this.boardData(pos)
        if (b.ship && !b.hit) {
            b.hit = true
            b.ship.hit()

            if (b.ship.isSunk()) {
                this.shipCount--
            }
        } else b.missed = true

    }

    isAllSunk() {
        if (this.shipCount === 0) return true;
    }
}



/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMclass: () => (/* binding */ DOMclass)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");

/*

TODO unecessary class , remove later
 */
class DOMclass {
    constructor(){
    }

    createBoard(parent){
        for(let i=0;i<10;i++){
            for(let j=1;j<=10;j++){
                let div = document.createElement('div')
                div.classList.add("cell")
                div.style.width = `77px`;
                div.style.height = `77px`;
                div.dataset.notation = `${_helper__WEBPACK_IMPORTED_MODULE_0__.letters[i]}${j}`
                parent.append(div)
            }
        }
    }
}



/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Type: () => (/* binding */ Type),
/* harmony export */   letters: () => (/* binding */ letters),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   randomPos: () => (/* binding */ randomPos)
/* harmony export */ });
let Type = {
    "Cruiser":3,
    "Carrier":5,
    "Battleship":4,
    "Submarine":3,
    "Destroyer":2
}

let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

const random = (min, max) =>  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomPos = () => {
    return `${letters[random(0,9)]}${random(1,10)}`
}





/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/board.js");


class Player {
    constructor(){
        this.board = new _board__WEBPACK_IMPORTED_MODULE_0__.GameBoard()
        this.selected = ''
    }
}



/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");


class Ship {
    #hit = 0;

    constructor(type){
        this.length = _helper__WEBPACK_IMPORTED_MODULE_0__.Type[type]
    }

    hit(){
        this.#hit++
    }

    isSunk(){
        if (this.#hit == this.length){
            return true
        }
        else return false
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ai */ "./src/ai.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/main.css */ "./src/style/main.css");









const MainLoop = (() => {

    /* 
    ** Variable setup
     */
    const boards = []
    const btnContainer1 = document.getElementById("btn-cont1")
    const b1 = document.getElementById("b1")
    const b2 = document.getElementById("b2")
    const aiAlreadyHit = []
    //const btnContainer2 = document.getElementById("btn-cont2")
    let Dom = new _dom__WEBPACK_IMPORTED_MODULE_1__.DOMclass()
    let players = []
    let ai = new _ai__WEBPACK_IMPORTED_MODULE_0__.Ai()
    let placeBtn = document.querySelectorAll(".place")

    let aiTurn = false


    /* 
    ** function that adds event listerners to Ship buttons 
     */
    const setupShipButtons = (btn, player) => {
        btn.addEventListener("click", ev => {
            if (ev.target.className == "btn") {
                const text = ev.target.textContent
                player.selected = text
            }
        })
    }

    const UpdateBoard = () => {
        aiAlreadyHit.forEach(el => {
            const element = b1.querySelector(`[data-notation="${el}"]`)
            element.classList.add("hit")
        })
    }

    /* 
    ** Update Board with ships function
    @param t : which player board to update
    TODO make it update both boards instead 
    */
    const updateBoardShips = (t) => {
        for (let j = 1; j <= 100; j++) {
            const notation = boards[t].childNodes[j].dataset.notation
            const child = boards[t].childNodes[j]
            const board = players[t].board

            if (board.hasShip(notation)) {
                child.classList.add("ship")
            }

        }
    }

    /* 
    ** Place ships on board
    */
    const Place = (board, coord, ship, t) => {
        board.placeShip(coord, ship)
        updateBoardShips(t)
    }

    /* 
    * Game loop
    TODO add hit & miss events and turn system
    */
    const run = () => {

        if (players[0].board.isAllSunk() || ai.board.isAllSunk()) {
            alert("Game ended")
        }

        if (aiTurn) {
            let rand = (0,_helper__WEBPACK_IMPORTED_MODULE_2__.randomPos)()
            if (!aiAlreadyHit.includes(rand)) {
                const playerBoard = players[0].board
                const element = b1.querySelector(`[data-notation="${rand}"]`)

                aiAlreadyHit.push(rand)
                playerBoard.recieveHit(rand)

                if (playerBoard.hasShip(rand))
                    element.classList.add("hit")
                else element.classList.add("hit2")
            } else {
                rand = (0,_helper__WEBPACK_IMPORTED_MODULE_2__.randomPos)()
                const playerBoard = players[0].board
                const element = b1.querySelector(`[data-notation="${rand}"]`)

                aiAlreadyHit.push(rand)
                playerBoard.recieveHit(rand)

                if (playerBoard.hasShip(rand))
                    element.classList.add("hit")
                else element.classList.add("hit2")
            }

            aiTurn = false
        }



        window.requestAnimationFrame(run)
    }

    /* 
    * General setup
    ** Grid creation , place & start button event listeners
    
    */
    const Setup = () => {
        players.push(new _player__WEBPACK_IMPORTED_MODULE_3__.Player(), new _player__WEBPACK_IMPORTED_MODULE_3__.Player())

        const start = document.getElementById("start")
        boards.push(b1, b2)

        Dom.createBoard(boards[0])
        Dom.createBoard(boards[1])

        setupShipButtons(btnContainer1, players[0])

        placeBtn.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const t = e.target.dataset.target
                const input = document.querySelector(`[data-pl="${t}"]`)
                const selected = players[t].selected
                if (!players[t].board.alreadyOnBoard(selected)) {
                    players[t].board.addOnBoard(selected)
                    Place(players[t].board, input.value, selected, t)
                } else alert("Ship already placed")
            })
        })

        b2.addEventListener("click", e => {
            const not = e.target.dataset.notation
            if (not) {
                const AiBoard = ai.board
                AiBoard.recieveHit(not)
                const cell = b2.querySelector(`[data-notation="${not}"]`)

                if (AiBoard.hasShip(not))
                    cell.classList.add("hit")
                else cell.classList.add("hit2")
                aiTurn = true

            }
        })

        ai.place()

        start.addEventListener("click", () => {
            window.requestAnimationFrame(run)
        })
    }

    return {
        Setup
    }

})();


MainLoop.Setup()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlL21haW4uY3NzPzgzMzEiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9haS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9ib2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZDNzFBNTtcbn1cblxuLmdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0NXZ3IDEwdncgNDV2dztcbn1cblxuI2JjMSAsICNiYzIge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3N0YXJ0IHtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgIGFsaWduLXNlbGY6IHNlbGYtc3RhcnQ7XG59XG5cbiNiYzEge1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG59XG5cbiNiYzIge1xuICAgIGdyaWQtY29sdW1uOiAzIC8gLTE7ICAgXG59XG5cbiNiMSAsICNiMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5ib2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci13aWR0aDogM3B4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgaGVpZ2h0OiA4MDBweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jZWxsIHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMC41cHg7XG59XG5cbi5zaGlwIHtcbiAgICBib3gtc2hhZG93OjBweCAwcHggMHB4IDRweCByZWQgaW5zZXQ7XG5cbn1cblxuLnRlc3Q6OmFmdGVye1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luOiAwLjI1ZW07XG4gICAgY29udGVudDogXCJYXCI7XG59ICAgXG5cbi5idG4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYnRuIHtcbiAgICBmb250LXNpemU6IDI3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRGRkE1RDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uaGl0IHtcbiAgIFxufVxuXG4uaGl0OjphZnRlciB7XG4gICAgY29udGVudDogXCJYXCI7XG4gICAgZm9udC1zaXplOiA0ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGl0MiB7XG5cbn1cblxuLmhpdDI6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIk9cIjtcbiAgICBmb250LXNpemU6IDRlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG46aG92ZXJ7XG4gICAgb3BhY2l0eTogMC43NTtcbn1cblxuaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7O0FBRXhDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkM3MUE1O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDV2dyAxMHZ3IDQ1dnc7XFxufVxcblxcbiNiYzEgLCAjYmMyIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3N0YXJ0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgYWxpZ24tc2VsZjogc2VsZi1zdGFydDtcXG59XFxuXFxuI2JjMSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcblxcbiNiYzIge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIC0xOyAgIFxcbn1cXG5cXG4jYjEgLCAjYjIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItd2lkdGg6IDNweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIGhlaWdodDogODAwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDAuNXB4O1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJveC1zaGFkb3c6MHB4IDBweCAwcHggNHB4IHJlZCBpbnNldDtcXG5cXG59XFxuXFxuLnRlc3Q6OmFmdGVye1xcbiAgICBmb250LXNpemU6IDRlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbjogMC4yNWVtO1xcbiAgICBjb250ZW50OiBcXFwiWFxcXCI7XFxufSAgIFxcblxcbi5idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMjdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRGRkE1RDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLmhpdCB7XFxuICAgXFxufVxcblxcbi5oaXQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlhcXFwiO1xcbiAgICBmb250LXNpemU6IDRlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGl0MiB7XFxuXFxufVxcblxcbi5oaXQyOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJPXFxcIjtcXG4gICAgZm9udC1zaXplOiA0ZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJ0bjpob3ZlcntcXG4gICAgb3BhY2l0eTogMC43NTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBUeXBlIH0gZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgeyByYW5kb20gfSBmcm9tIFwiLi9oZWxwZXJcIjtcbmltcG9ydCB7IGxldHRlcnMgfSBmcm9tIFwiLi9oZWxwZXJcIjtcblxubGV0IGF2YWlsYWJsZVNoaXBzID0gQXJyYXkuZnJvbShPYmplY3Qua2V5cyhUeXBlKSlcblxuXG5jbGFzcyBBaSBleHRlbmRzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKVxuICAgIH1cblxuICAgIHBsYWNlKCl7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8NTtpKyspe1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5wbGFjZVNoaXAoYCR7bGV0dGVyc1tyYW5kb20oMCw5KV19JHtyYW5kb20oMSw3KX1gICwgYXZhaWxhYmxlU2hpcHNbaV0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaXQocG9zKXtcbiAgICAgICAgdGhpcy5ib2FyZC5yZWNpZXZlSGl0KClcbiAgICB9XG59XG5cbmV4cG9ydCB7QWl9IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIlxuaW1wb3J0IHsgbGV0dGVycyB9IGZyb20gXCIuL2hlbHBlclwiXG5cbmNsYXNzIEdhbWVCb2FyZCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IHt9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYCR7bGV0dGVyc1tpXX0ke2p9YF0gPSB7IG1pc3NlZDogZmFsc2UsIGhpdDogZmFsc2UsIHNoaXA6IG51bGwgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub25Cb2FyZCA9IFtdXG4gICAgICAgIHRoaXMuc2hpcENvdW50ID0gMDtcbiAgICB9XG5cbiAgICBib2FyZERhdGEoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkW2tleV1cbiAgICB9XG5cbiAgICBhbHJlYWR5T25Cb2FyZChzaGlwKXtcbiAgICAgICAgaWYodGhpcy5vbkJvYXJkLmluY2x1ZGVzKHNoaXApKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGFkZE9uQm9hcmQoc2hpcCl7XG4gICAgICAgIHRoaXMub25Cb2FyZC5wdXNoKHNoaXApXG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKHBvcywgdHlwZSkge1xuICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKHR5cGUpXG5cbiAgICAgICAgdGhpcy5zaGlwQ291bnQrK1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKChOdW1iZXIocG9zWzFdKSkgPCAxMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYCR7cG9zWzBdfSR7TnVtYmVyKHBvc1sxXSkraX1gXS5zaGlwID0gc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uQm9hcmQucHVzaCh0eXBlKVxuICAgIH1cblxuICAgIGhhc1NoaXAocG9zKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkRGF0YShwb3MpLnNoaXApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gZWxzZSByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZWNpZXZlSGl0KHBvcykge1xuICAgICAgICBsZXQgYiA9IHRoaXMuYm9hcmREYXRhKHBvcylcbiAgICAgICAgaWYgKGIuc2hpcCAmJiAhYi5oaXQpIHtcbiAgICAgICAgICAgIGIuaGl0ID0gdHJ1ZVxuICAgICAgICAgICAgYi5zaGlwLmhpdCgpXG5cbiAgICAgICAgICAgIGlmIChiLnNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBDb3VudC0tXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBiLm1pc3NlZCA9IHRydWVcblxuICAgIH1cblxuICAgIGlzQWxsU3VuaygpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hpcENvdW50ID09PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEdhbWVCb2FyZCB9IiwiaW1wb3J0IHsgbGV0dGVycyB9IGZyb20gXCIuL2hlbHBlclwiO1xuLypcblxuVE9ETyB1bmVjZXNzYXJ5IGNsYXNzICwgcmVtb3ZlIGxhdGVyXG4gKi9cbmNsYXNzIERPTWNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cblxuICAgIGNyZWF0ZUJvYXJkKHBhcmVudCl7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8MTA7aSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgaj0xO2o8PTEwO2orKyl7XG4gICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpXG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlLndpZHRoID0gYDc3cHhgO1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS5oZWlnaHQgPSBgNzdweGA7XG4gICAgICAgICAgICAgICAgZGl2LmRhdGFzZXQubm90YXRpb24gPSBgJHtsZXR0ZXJzW2ldfSR7an1gXG4gICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChkaXYpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7RE9NY2xhc3N9IiwibGV0IFR5cGUgPSB7XG4gICAgXCJDcnVpc2VyXCI6MyxcbiAgICBcIkNhcnJpZXJcIjo1LFxuICAgIFwiQmF0dGxlc2hpcFwiOjQsXG4gICAgXCJTdWJtYXJpbmVcIjozLFxuICAgIFwiRGVzdHJveWVyXCI6MlxufVxuXG5sZXQgbGV0dGVycyA9IFtcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIsIFwiZlwiLCBcImdcIiwgXCJoXCIsIFwiaVwiLCBcImpcIl1cblxuY29uc3QgcmFuZG9tID0gKG1pbiwgbWF4KSA9PiAge1xuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn1cblxuY29uc3QgcmFuZG9tUG9zID0gKCkgPT4ge1xuICAgIHJldHVybiBgJHtsZXR0ZXJzW3JhbmRvbSgwLDkpXX0ke3JhbmRvbSgxLDEwKX1gXG59XG5cbmV4cG9ydCB7cmFuZG9tLGxldHRlcnMsVHlwZSAscmFuZG9tUG9zfVxuXG4iLCJpbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiXG5cbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lQm9hcmQoKVxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gJydcbiAgICB9XG59XG5cbmV4cG9ydCB7UGxheWVyfSIsImltcG9ydCB7IFR5cGUgfSBmcm9tIFwiLi9oZWxwZXJcIjtcblxuY2xhc3MgU2hpcCB7XG4gICAgI2hpdCA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlKXtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBUeXBlW3R5cGVdXG4gICAgfVxuXG4gICAgaGl0KCl7XG4gICAgICAgIHRoaXMuI2hpdCsrXG4gICAgfVxuXG4gICAgaXNTdW5rKCl7XG4gICAgICAgIGlmICh0aGlzLiNoaXQgPT0gdGhpcy5sZW5ndGgpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuZXhwb3J0IHtTaGlwfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IEFpIH0gZnJvbSBcIi4vYWlcIjtcbmltcG9ydCB7IERPTWNsYXNzIH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyByYW5kb20gfSBmcm9tIFwiLi9oZWxwZXJcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IFwiLi9zdHlsZS9tYWluLmNzc1wiXG5pbXBvcnQgeyByYW5kb21Qb3MgfSBmcm9tIFwiLi9oZWxwZXJcIjtcblxuXG5cbmNvbnN0IE1haW5Mb29wID0gKCgpID0+IHtcblxuICAgIC8qIFxuICAgICoqIFZhcmlhYmxlIHNldHVwXG4gICAgICovXG4gICAgY29uc3QgYm9hcmRzID0gW11cbiAgICBjb25zdCBidG5Db250YWluZXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tY29udDFcIilcbiAgICBjb25zdCBiMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYjFcIilcbiAgICBjb25zdCBiMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYjJcIilcbiAgICBjb25zdCBhaUFscmVhZHlIaXQgPSBbXVxuICAgIC8vY29uc3QgYnRuQ29udGFpbmVyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWNvbnQyXCIpXG4gICAgbGV0IERvbSA9IG5ldyBET01jbGFzcygpXG4gICAgbGV0IHBsYXllcnMgPSBbXVxuICAgIGxldCBhaSA9IG5ldyBBaSgpXG4gICAgbGV0IHBsYWNlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGFjZVwiKVxuXG4gICAgbGV0IGFpVHVybiA9IGZhbHNlXG5cblxuICAgIC8qIFxuICAgICoqIGZ1bmN0aW9uIHRoYXQgYWRkcyBldmVudCBsaXN0ZXJuZXJzIHRvIFNoaXAgYnV0dG9ucyBcbiAgICAgKi9cbiAgICBjb25zdCBzZXR1cFNoaXBCdXR0b25zID0gKGJ0biwgcGxheWVyKSA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXYgPT4ge1xuICAgICAgICAgICAgaWYgKGV2LnRhcmdldC5jbGFzc05hbWUgPT0gXCJidG5cIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBldi50YXJnZXQudGV4dENvbnRlbnRcbiAgICAgICAgICAgICAgICBwbGF5ZXIuc2VsZWN0ZWQgPSB0ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgVXBkYXRlQm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGFpQWxyZWFkeUhpdC5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBiMS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1ub3RhdGlvbj1cIiR7ZWx9XCJdYClcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpdFwiKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qIFxuICAgICoqIFVwZGF0ZSBCb2FyZCB3aXRoIHNoaXBzIGZ1bmN0aW9uXG4gICAgQHBhcmFtIHQgOiB3aGljaCBwbGF5ZXIgYm9hcmQgdG8gdXBkYXRlXG4gICAgVE9ETyBtYWtlIGl0IHVwZGF0ZSBib3RoIGJvYXJkcyBpbnN0ZWFkIFxuICAgICovXG4gICAgY29uc3QgdXBkYXRlQm9hcmRTaGlwcyA9ICh0KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwMDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBub3RhdGlvbiA9IGJvYXJkc1t0XS5jaGlsZE5vZGVzW2pdLmRhdGFzZXQubm90YXRpb25cbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gYm9hcmRzW3RdLmNoaWxkTm9kZXNbal1cbiAgICAgICAgICAgIGNvbnN0IGJvYXJkID0gcGxheWVyc1t0XS5ib2FyZFxuXG4gICAgICAgICAgICBpZiAoYm9hcmQuaGFzU2hpcChub3RhdGlvbikpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBcbiAgICAqKiBQbGFjZSBzaGlwcyBvbiBib2FyZFxuICAgICovXG4gICAgY29uc3QgUGxhY2UgPSAoYm9hcmQsIGNvb3JkLCBzaGlwLCB0KSA9PiB7XG4gICAgICAgIGJvYXJkLnBsYWNlU2hpcChjb29yZCwgc2hpcClcbiAgICAgICAgdXBkYXRlQm9hcmRTaGlwcyh0KVxuICAgIH1cblxuICAgIC8qIFxuICAgICogR2FtZSBsb29wXG4gICAgVE9ETyBhZGQgaGl0ICYgbWlzcyBldmVudHMgYW5kIHR1cm4gc3lzdGVtXG4gICAgKi9cbiAgICBjb25zdCBydW4gPSAoKSA9PiB7XG5cbiAgICAgICAgaWYgKHBsYXllcnNbMF0uYm9hcmQuaXNBbGxTdW5rKCkgfHwgYWkuYm9hcmQuaXNBbGxTdW5rKCkpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiR2FtZSBlbmRlZFwiKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFpVHVybikge1xuICAgICAgICAgICAgbGV0IHJhbmQgPSByYW5kb21Qb3MoKVxuICAgICAgICAgICAgaWYgKCFhaUFscmVhZHlIaXQuaW5jbHVkZXMocmFuZCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IHBsYXllcnNbMF0uYm9hcmRcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYjEucXVlcnlTZWxlY3RvcihgW2RhdGEtbm90YXRpb249XCIke3JhbmR9XCJdYClcblxuICAgICAgICAgICAgICAgIGFpQWxyZWFkeUhpdC5wdXNoKHJhbmQpXG4gICAgICAgICAgICAgICAgcGxheWVyQm9hcmQucmVjaWV2ZUhpdChyYW5kKVxuXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllckJvYXJkLmhhc1NoaXAocmFuZCkpXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpdFwiKVxuICAgICAgICAgICAgICAgIGVsc2UgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGl0MlwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYW5kID0gcmFuZG9tUG9zKClcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IHBsYXllcnNbMF0uYm9hcmRcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYjEucXVlcnlTZWxlY3RvcihgW2RhdGEtbm90YXRpb249XCIke3JhbmR9XCJdYClcblxuICAgICAgICAgICAgICAgIGFpQWxyZWFkeUhpdC5wdXNoKHJhbmQpXG4gICAgICAgICAgICAgICAgcGxheWVyQm9hcmQucmVjaWV2ZUhpdChyYW5kKVxuXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllckJvYXJkLmhhc1NoaXAocmFuZCkpXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpdFwiKVxuICAgICAgICAgICAgICAgIGVsc2UgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGl0MlwiKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhaVR1cm4gPSBmYWxzZVxuICAgICAgICB9XG5cblxuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocnVuKVxuICAgIH1cblxuICAgIC8qIFxuICAgICogR2VuZXJhbCBzZXR1cFxuICAgICoqIEdyaWQgY3JlYXRpb24gLCBwbGFjZSAmIHN0YXJ0IGJ1dHRvbiBldmVudCBsaXN0ZW5lcnNcbiAgICBcbiAgICAqL1xuICAgIGNvbnN0IFNldHVwID0gKCkgPT4ge1xuICAgICAgICBwbGF5ZXJzLnB1c2gobmV3IFBsYXllcigpLCBuZXcgUGxheWVyKCkpXG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0XCIpXG4gICAgICAgIGJvYXJkcy5wdXNoKGIxLCBiMilcblxuICAgICAgICBEb20uY3JlYXRlQm9hcmQoYm9hcmRzWzBdKVxuICAgICAgICBEb20uY3JlYXRlQm9hcmQoYm9hcmRzWzFdKVxuXG4gICAgICAgIHNldHVwU2hpcEJ1dHRvbnMoYnRuQ29udGFpbmVyMSwgcGxheWVyc1swXSlcblxuICAgICAgICBwbGFjZUJ0bi5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gZS50YXJnZXQuZGF0YXNldC50YXJnZXRcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBsPVwiJHt0fVwiXWApXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBwbGF5ZXJzW3RdLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgaWYgKCFwbGF5ZXJzW3RdLmJvYXJkLmFscmVhZHlPbkJvYXJkKHNlbGVjdGVkKSkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzW3RdLmJvYXJkLmFkZE9uQm9hcmQoc2VsZWN0ZWQpXG4gICAgICAgICAgICAgICAgICAgIFBsYWNlKHBsYXllcnNbdF0uYm9hcmQsIGlucHV0LnZhbHVlLCBzZWxlY3RlZCwgdClcbiAgICAgICAgICAgICAgICB9IGVsc2UgYWxlcnQoXCJTaGlwIGFscmVhZHkgcGxhY2VkXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGIyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vdCA9IGUudGFyZ2V0LmRhdGFzZXQubm90YXRpb25cbiAgICAgICAgICAgIGlmIChub3QpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBBaUJvYXJkID0gYWkuYm9hcmRcbiAgICAgICAgICAgICAgICBBaUJvYXJkLnJlY2lldmVIaXQobm90KVxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBiMi5xdWVyeVNlbGVjdG9yKGBbZGF0YS1ub3RhdGlvbj1cIiR7bm90fVwiXWApXG5cbiAgICAgICAgICAgICAgICBpZiAoQWlCb2FyZC5oYXNTaGlwKG5vdCkpXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKVxuICAgICAgICAgICAgICAgIGVsc2UgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0MlwiKVxuICAgICAgICAgICAgICAgIGFpVHVybiA9IHRydWVcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGFpLnBsYWNlKClcblxuICAgICAgICBzdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShydW4pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgU2V0dXBcbiAgICB9XG5cbn0pKCk7XG5cblxuTWFpbkxvb3AuU2V0dXAoKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=