import {types} from '../actions/actionTypes';

export default function todoList(state = [], action) {
    switch(action.type) {
        case types.ADD_TODO:
            return [
                ...state, {id: action.id, text: action.text, done: false }
            ];
            
        case types.TOGGLE_TODO:
            return [
                ...state.map(todo => {
                    if (todo.id !== action.id)
                        return todo;

                    return Object.assign({}, todo, {done: !todo.done});
                })
            ];

        default: 
            return state;
    }
}
