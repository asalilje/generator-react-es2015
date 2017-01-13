import React from 'react';
import {render} from 'react-dom';
import App from './App'; <% if (includeRedux) { %>
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

render(
    <Provider store={store}>
        <App name={'<%= projectName %>'} />
    </Provider>,  document.getElementById('app'));

<% } else { %>
    
render(
    <App name={'<%= projectName %>'} />,  
    document.getElementById('app'));

<% } %>
