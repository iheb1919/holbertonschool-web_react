import {is} from 'immutable';
export default function mergeDeeplyElements(page1, page2) {
	return (is(page1, page2));
}
