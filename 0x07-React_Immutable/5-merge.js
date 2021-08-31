import {List, Map} from 'immutable';
export function concatElements(page1, page2) {
	return (new List(page1).concat(new List(page2)));
}

export function mergeElements(page1, page2) {
	return (new Map(page1).merge(new Map(page2)));
}
