import {createStore, combineReducers} from 'redux';
import todoList from '../reducers/todoList';
import todoFilter from '../reducers/todoFilter';

export default function configureStore() {
    const reducers = combineReducers({
        todoList,
        todoFilter
    });

    return createStore(reducers);
}