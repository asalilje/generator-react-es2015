import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as todoListActions from './actions/todoListActions';
import { todoFilterOptions } from './reducers/todoFilter';
import TodoList from './TodoList';

class FilteredTodoList extends React.Component {
    render() {
        const props = this.props;

        return (
            <TodoList
                todoList={props.todoList}
                onClick={props.onClick} />
        );
    }
}

FilteredTodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func
};

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

const mapStateToProps = (state, ownProps) => {
    return {
        todoList: filterTodoList(state.todoList, state.todoFilter)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: id => dispatch(todoListActions.toggleTodoItem(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilteredTodoList);