import {topNav} from './components/topNav'
import {searchFilter} from './components/searchFilter'
import {swDetecter} from './components/swDetecter';
(()=>{
	swDetecter();
	topNav();
	if (document.body.classList.contains('home')) {
		// functions here
	}else if (document.body.classList.contains('portfolio')) {
		// functions here
		searchFilter();
	}
})();
