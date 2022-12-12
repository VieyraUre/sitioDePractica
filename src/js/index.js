import {topNav} from './components/topNav'
import tabs from './components/tabs';
(()=>{
	topNav();
	if (document.body.classList.contains('home')) {
		// functions here
	}else if (document.body.classList.contains('banca')) {
		// functions here
		tabs();
	}
})();
