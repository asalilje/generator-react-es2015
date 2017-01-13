import configureStore from './configureStore';
import {types} from '../actions/actionTypes';
import {addTodoItem} from '../actions/todoListActions';
import {setFilter} from '../actions/todoFilterActions';
import {todoFilterOptions} from '../reducers/todoFilter'; 
import expect from 'expect';

describe("store", () => {
    it("should be able to add todo", () => {
        const store = configureStore();
        const expectedState = [
            {
                id: 0,
                text: "test",
                done: false
            }
        ];
        store.dispatch(addTodoItem(0, "test"));
        expect(store.getState().todoList).toEqual(expectedState);
    });

    it("should be able to change todo filter", () => {
        const store = configureStore();
        store.dispatch(setFilter(todoFilterOptions.SHOW_DONE));
        expect(store.getState().todoFilter).toBe("SHOW_DONE");
    });
});