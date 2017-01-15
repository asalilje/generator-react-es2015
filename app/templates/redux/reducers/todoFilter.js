import {types} from '../actions/actionTypes';

export default function todoFilter(state = todoFilterOptions.SHOW_ALL, action) {
    switch(action.type) {
        case types.SET_FILTER:
            return action.filter;

        default: 
            return state;
    }
}

export const todoFilterOptions = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_TODO: "SHOW_TODO",
    SHOW_DONE: "SHOW_DONE"
};
