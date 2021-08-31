import {fromjs, getIn} from 'immutable'
export default function accessImmutableObject(object, array) {
    return (getIn(fromjs(object),array,undefined))
}
