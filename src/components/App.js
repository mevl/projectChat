import React from 'react';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CurrentUser from '../components/CurrentUser';
import ChatPage from '../containers/ChatPage';
import UserPage from '../containers/UserPage';
import './app.css';

const CurrentUserComponent = connect(
  state => ({ user: state.user}),
)(CurrentUser);

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className="chat">
        <div className="chat__header">
          <div className="chat__title">{document.title}</div>
          <div className="chat__userinfo">
            <CurrentUserComponent />
          </div>
        </div>
        <Route path="user" component={UserPage} />
        <Route exact path="*" component={ChatPage} />
      </div>
    </Router>
  </Provider>
);
App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
