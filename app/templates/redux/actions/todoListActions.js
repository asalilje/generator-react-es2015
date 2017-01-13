import {types} from './actionTypes';

export function addTodoItem(id, text) {
    return {
        type: types.ADD_TODO,
        id,
        text
    };
}

export function toggleTodoItem(id) {
    return {
        type: types.TOGGLE_TODO,
        id
    };
}