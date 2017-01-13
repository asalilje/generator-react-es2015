import {createStore, combineReducers} from 'redux';
import todoList from '../reducers/todoList';
import todoFilter from '../reducers/todoFilter';

export default function configureStore() {
    const reducers = combineReducers({
        todoList,
        todoFilter
    });

    if (process.env.NODE_ENV === "production") {

    }
    else {

    }
    return createStore(reducers);
};