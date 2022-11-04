export const topNav = () => {
	let myFunction = ()=> {
		document.querySelector('.hamburger').addEventListener('click', function(e) {
			e.preventDefault();
			[].map.call(document.querySelectorAll('.hamburger'), function(el) {
				el.classList.toggle('is-active');
			});
			[].map.call(document.querySelectorAll('.top-nav__menu'), function(el) {
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
