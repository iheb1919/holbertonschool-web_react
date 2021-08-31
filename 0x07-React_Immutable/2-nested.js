import {fromJS, getIn} from 'immutable';

function accessImmutableObject(object, array) {
	return (getIn(fromJS(object), array, undefined));
}

export default accessImmutableObject;