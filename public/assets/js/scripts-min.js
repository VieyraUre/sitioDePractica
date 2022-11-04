(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var searchFilter = exports.searchFilter = function searchFilter() {
	// get the input data
	var fnFilter = function fnFilter(inputElement, selector, selectorContainer) {
		inputElement.addEventListener('keyup', function (e) {
			if (e.key === 'Escape') e.target.value = '';
			fnCompareElements(e.target.value.toUpperCase(), selector, selectorContainer);
		});
	};
	var fnCompareElements = function fnCompareElements(filterText, selector, selectorContainer) {
		var searchElements = document.querySelectorAll(selector);
		var searchContainers = document.querySelectorAll(selectorContainer);
		searchElements.forEach(function (el) {
			el.textContent.toUpperCase().includes(filterText) ? el.style.display = 'block' : el.style.display = 'none';
		});
		searchContainers.forEach(function (el) {
			el.textContent.toUpperCase().includes(filterText) ? el.style.display = 'block' : el.style.display = 'none';
		});
	};
	fnFilter(document.getElementById('searchInput'), '.class-item__fragment', '.class-item');
};

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var swDetecter = exports.swDetecter = function swDetecter() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('./sw.js').then(function (reg) {
			return console.log('Registro de SW exitoso', reg);
		}).catch(function (err) {
			return console.warn('Error al tratar de registrar el sw', err);
		});
	}
};

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
'use strict';

var _topNav = require('./components/topNav');

var _searchFilter = require('./components/searchFilter');

var _swDetecter = require('./components/swDetecter');

(function () {
	(0, _swDetecter.swDetecter)();
	(0, _topNav.topNav)();
	if (document.body.classList.contains('home')) {
		// functions here
	} else if (document.body.classList.contains('portfolio')) {
		// functions here
		(0, _searchFilter.searchFilter)();
	}
})();

},{"./components/searchFilter":1,"./components/swDetecter":2,"./components/topNav":3}]},{},[4]);

//# sourceMappingURL=scripts-min.js.map
