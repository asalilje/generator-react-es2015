import todoFilter, {todoFilterOptions} from './todoFilter';
import expect from 'expect';
import * as actions from '../actions/todoFilterActions';

describe("todoFilter", () => {

    it("should be set to SHOW_ALL as default", () => {
        expect(todoFilter(undefined, {type: undefined})).toBe("SHOW_ALL");
    });

    it("should be set to the given filter option when given type SET_FILTER", () => {
        const initialState = "SHOW_ALL";
        const expectedState = "SHOW_DONE";
        const action = actions.setFilter(todoFilterOptions.SHOW_DONE);
        expect(todoFilter(initialState, action)).toBe(expectedState);
    });

});