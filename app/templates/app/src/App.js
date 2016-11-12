import React, {PropTypes} from 'react';
import {DoRequest} from './ajax';
import Styles from './styles.less';

class App extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

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

  render() {
    return (
      <div className={Styles.text}>
        Hello {this.props.name}!
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired
};

export default App;
