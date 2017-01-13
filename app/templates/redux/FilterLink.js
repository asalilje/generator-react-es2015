import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Link from './Link';
import * as todoFilterActions from './actions/todoFilterActions';
import { todoFilterOptions } from './reducers/todoFilter';

class FilterLink extends React.Component {
    render() {
        const props = this.props;
        return (
            <Link active={props.active}
                onClick={props.onClick}>
                {props.children}
            </Link>
        );
    }
}

FilterLink.propTypes = {
    currentFilter: PropTypes.string,
    selectedFilter: PropTypes.string,
    children: PropTypes.string,
    onClick: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.todoFilter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: filter => dispatch(todoFilterActions.setFilter(ownProps.filter))     
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);