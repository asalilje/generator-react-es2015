import { connect } from 'react-redux';
import * as todoListActions from './actions/todoListActions';
import { todoFilterOptions } from './reducers/todoFilter';
import TodoList from './TodoList';

const filterTodoList = (todoList, todoFilter) => {
    switch (todoFilter) {
        case todoFilterOptions.SHOW_ALL:
            return todoList;
        case todoFilterOptions.SHOW_TODO:
            return todoList.filter(todo => !todo.done);
        case todoFilterOptions.SHOW_DONE:
            return todoList.filter(todo => todo.done);
    }
};

const mapStateToProps = (state) => ({
  todoList: filterTodoList(state.todoList, state.todoFilter),
});

const mapDispatchToProps = (dispatch) => ({
  onClick(id) {
    dispatch(todoListActions.toggleTodoItem(id));
  },
});

const FilteredTodoList = connect(
  mapStateToProps,
  mapDispatchToProps)(TodoList);

export default FilteredTodoList;
