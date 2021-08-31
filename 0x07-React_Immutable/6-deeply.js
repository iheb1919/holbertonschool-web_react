import {Map} from 'immutable';
export default function mergeDeeplyElements(page1, page2) {
	return (new Map(page1).mergeDeep(new Map(page2)));
}
