import {map} from 'immutable';
export default function mergeDeeplyElements(page1, page2) {
	return (map(page1).mergeDeep(map(page2)));
}
