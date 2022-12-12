(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var tabs = function tabs() {
    var d = document,
        tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabs-container__tab')),
        panels = Array.prototype.slice.apply(d.querySelectorAll('.tabs-container__panel'));

    d.getElementById('tabs').addEventListener('click', function (e) {
        if (e.target.classList.contains('tabs-container__tab')) {
            var i = tabs.indexOf(e.target);
            tabs.map(function (tab) {
                return tab.classList.remove('is-active');
            });
            tabs[i].classList.add('is-active');
            panels.map(function (tab) {
                return tab.classList.remove('is-active');
            });
            panels[i].classList.add('is-active');
        }
    });
};

exports.default = tabs;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var topNav = exports.topNav = function topNav() {
	var myFunction = function myFunction() {
		document.querySelector('.hamburger').addEventListener('click', function (e) {
			e.preventDefault();
			[].map.call(document.querySelectorAll('.hamburger'), function (el) {
				el.classList.toggle('is-active');
			});
			[].map.call(document.querySelectorAll('.top-nav__menu'), function (el) {
				el.classList.toggle('show-top-nav');
			});
		});
	};
	myFunction();
};

// export const topNav = () => {
// 	const 
// 	d = document,
// 	headerBtn = d.querySelector('.hamburger'),
// 	menu = d.querySelector('.top-nav__menu');

// 	headerBtn.addEventListener('click', e => {
// 		e.preventDefault();
// 		headerBtn.classList.toggle('is-active')
// 		menu.classList.toggle('is-active')

// 	})
// };


// export const topNav = () => {
// 	// Aqui definimos las variables
// 	const 
// 	d = document,
// 	headerBtn = d.querySelector('.hamburger'),
// 	menu = d.querySelector('.top-nav__menu');

// 	// aqui creamos la funcion que ejecuta el toogle del menu
// 	headerBtn.addEventListener('click', e =>{
// 		e.preventDefault();
// 		headerBtn.classList.toggle('is-active'),
// 		menu.classList.toggle('is-active');
// 	});
// }

},{}],3:[function(require,module,exports){
'use strict';

var _topNav = require('./components/topNav');

var _tabs = require('./components/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
	(0, _topNav.topNav)();
	if (document.body.classList.contains('home')) {
		// functions here
	} else if (document.body.classList.contains('banca')) {
		// functions here
		(0, _tabs2.default)();
	}
})();

},{"./components/tabs":1,"./components/topNav":2}]},{},[3]);

//# sourceMappingURL=scripts-min.js.map
