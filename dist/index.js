/**
 * @name storm-tabs: For multi-panelled content areas
 * @version 1.0.2: Sun, 07 May 2017 15:31:53 GMT
 * @author stormid
 * @license MIT
 */
import defaults from './lib/defaults';
import componentPrototype from './lib/component-prototype';

const init = (sel, opts) => {
	let els = [].slice.call(document.querySelectorAll(sel));
	
	if(!els.length) throw new Error('Tabs cannot be initialised, no augmentable elements found');

	return els.map((el) => Object.assign(Object.create(componentPrototype), {
			DOMElement: el,
			settings: Object.assign({}, defaults, opts)
		}).init());
};

export default { init };