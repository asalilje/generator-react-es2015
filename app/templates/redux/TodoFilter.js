import React, { PropTypes } from 'react';
import { todoFilterOptions } from './reducers/todoFilter';
import FilterLink from './FilterLink';

const TodoFilter = ({store}) => {
    return (
        <div>
            <FilterLink
                filter={todoFilterOptions.SHOW_ALL}
                store={store}>Show all</FilterLink>
            {' '}
            <FilterLink
                filter={todoFilterOptions.SHOW_TODO}
                store={store}>Show todo</FilterLink>
            {' '}
            <FilterLink
                filter={todoFilterOptions.SHOW_DONE}
                store={store}>Show done</FilterLink>
        </div>
    );
};

TodoFilter.propTypes = {
    store: PropTypes.object
};

export default TodoFilter;