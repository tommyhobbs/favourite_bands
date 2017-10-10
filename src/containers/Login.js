import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'react-tabs/style/react-tabs.css';

import FunctionButton from '../components/FunctionButton';
import * as ArtistActionCreators from '../actions/artistActions';

const windowMessage = (e) => {
  if (typeof e.data === 'string') {
    const data = JSON.parse(e.data);
    if (data.hasOwnProperty('access_token')) {
      localStorage.setItem('FavouriteBands.accessToken', data.access_token);
    }
    if (data.hasOwnProperty('expires_in')) {
      const now = new Date();
      // expires_in value is seconds
      const expires = new Date(now.getTime() + data.expires_in * 1000);
      // eslint-disable-next-line
      console.log(`token expires at ${expires}`);
      localStorage.setItem('FavouriteBands.expires', expires);
    }
    this.userLoggedIn(data);
  }
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.CLIENT_ID = '243b3ba29bd44d0dbf1f70d1a82ebc20';
    this.REDIRECT_URI = 'http://localhost:8080/callback.html';
    this.scopes = [];
    this.loginClicked = this.loginClicked.bind(this);
    this.userLoggedIn = this.userLoggedIn.bind(this);
    this.state = {
      userName: '',
    };
  }

  componentDidMount() {
    window.addEventListener('message', windowMessage.bind(this));
  }

  userLoggedIn() {
    const { actions: { loginChange }} = this.props;
    loginChange(true);
  }

  loginClicked() {
    window.open('https://accounts.spotify.com/authorize?client_id=' + this.CLIENT_ID +
      '&redirect_uri=' + encodeURIComponent(this.REDIRECT_URI) +
      '&scope=' + encodeURIComponent(this.scopes.join(' ')) +
      '&response_type=token');
  }

  render() {
    return (
      <FunctionButton onClicked={this.loginClicked} label ="Log in"/>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {...ArtistActionCreators},
      dispatch
    ),
  };
};

Login.propTypes = {
  actions: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

