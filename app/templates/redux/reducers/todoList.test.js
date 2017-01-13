import todoList from './todoList';
import {types} from '../actions/actionTypes';
import * as actions from '../actions/todoListActions';
import expect from 'expect';

describe("todoList", () => {

    it("should return an empty array as default", () => {
        expect(todoList(undefined, {type: undefined})).toEqual([]);
    });

    it("should add a todo item to state when passed type ADD_TODO", () => {
        const initialState = [];
        const expectedState = [{
            id: 0,
            text: "test",
            done: false
        }];
        const action = actions.addTodoItem(0, "test");
        expect(todoList([], action)).toEqual(expectedState);
    });

    it("should toggle a todo item's done property", () => {
        const initialState = [
            {id: 0, text: "test 0", done: false},
            {id: 1, text: "test 1", done: false},
            {id: 2, text: "test 2", done: false}
        ];
        const expectedState = [
            {id: 0, text: "test 0", done: false},
            {id: 1, text: "test 1", done: true},
            {id: 2, text: "test 2", done: false}
        ];
        expect(todoList(initialState, actions.toggleTodoItem(1))).toEqual(expectedState);
    });

});