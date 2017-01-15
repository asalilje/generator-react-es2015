import { connect } from 'react-redux';
import Link from './Link';
import * as todoFilterActions from './actions/todoFilterActions';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.todoFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick() {
      dispatch(todoFilterActions.setFilter(ownProps.filter));
    }
});

const FilterLink = connect(
  mapStateToProps, mapDispatchToProps
)(Link);

export default FilterLink;
