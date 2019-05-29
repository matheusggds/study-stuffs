'use strict';

import { TweenMax } from 'gsap';

(function() {
	const items = document.querySelectorAll('.item');

	// .set()
	TweenMax.set(items, {
		x: -100,
		y: 100
	})
})();
