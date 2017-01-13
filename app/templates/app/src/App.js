import 'babel-polyfill';
import React, {PropTypes} from 'react';
import Styles from './styles/main.less';<% if (!includeRedux) { %>
import {DoRequest} from './ajax'; <% } else { %>
import FilteredTodoList from './FilteredTodoList';
import TodoForm from './TodoForm';
import TodoFilter from './TodoFilter';
<% } %>  
class App extends React.Component {

  constructor(props, context) {
    super(props, context);
  }
  <% if (!includeRedux) { %>
  componentDidMount() {
    DoRequest("GET", config.apiUrl) //eslint-disable-line no-undef
      .then(data => {
        const result = JSON.parse(data);
        if (result) {
          this.setState({
            result
          });
        }

      })
      .catch(error => {
        this.setState({
          error
        });
      });
  }
  <% } %>
  render() {
    return (
      <div>
        <div className={Styles.text}>
          Hello {this.props.name}!
        </div>
         <% if (includeRedux) { %>
        <h2>Redux Todo List Example</h2>
        <TodoForm />
        <FilteredTodoList />
        <TodoFilter />
        <% } %>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired
};

export default App;
