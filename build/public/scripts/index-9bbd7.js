webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackMissingModule() { throw new Error("Cannot find module \"F:\\ruanjiananzhuang\\wampServer\\wamp64\\www\\homework_three\\src\\public\\scripts\\index.es\""); }());
__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

window.add=function (num) {
	return num+1;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./index.es\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

//那么事件稀释和判断的操作去哪里呢，放在methods和event中
var f = new _index.Star();
var t = "";
xtag.register('x-star', {
    content: '  <div class="star">\n                    <div></div>\n                    <div></div>\n                    <div></div>\n                    <div></div>\n                    <div></div>\n                 </div> \n                <span class = "hide" id = "animation">+ 1 < /span>\n                 ',
    methods: {
        praise: function praise() {
            var _this = this;
            f.clickAction(); //向后台请求
            //然后让animation出现，首先通过id来找到animation
            var animation = _this.querySelector("#animation");
            animation.className = "hide num"; //且把animation的className重新赋值
            setTimeout(function () {
                animation.className = "hide";
            }, 800);
        }
    },
    events: {

        click: function click(e) {
            var _this = this;
            if (e.target.id == 'star') {
                if (t) {
                    clearTimeout(t);
                }
                t = setTimeout(function () {
                    _this.praise();
                }, 500);
            }
        }
    }
});

/***/ })
],[0]);