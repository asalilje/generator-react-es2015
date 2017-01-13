import {types} from './actionTypes';

export function setFilter(filter) {
    return {
        type: types.SET_FILTER,
        filter: filter
    };
}