import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'react-tabs/style/react-tabs.css';

import FunctionButton from '../components/FunctionButton';
import { addArtist, inputChange , searchArtist} from '../actions/artistActions';

const windowMessage = function (e) {
  if (typeof e.data === 'string') {
    const data = JSON.parse(e.data);
    if (data.hasOwnProperty('access_token')) {
      localStorage.setItem('FavouriteBands.accessToken', data.access_token);
    }
    if (data.hasOwnProperty('expires_in')) {
      const now = new Date();
      // expires_in value is seconds
      const expires = new Date(now.getTime() + data.expires_in * 1000);
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
      userName: ''
    };
  }

  componentDidMount(){
    window.addEventListener('message', windowMessage.bind(this));
  }

  userLoggedIn(responseObj){
    console.log('Login:userLoggedIn %o', responseObj);
  }

  loginClicked() {
    window.open('https://accounts.spotify.com/authorize?client_id='+ this.CLIENT_ID +
      '&redirect_uri=' + encodeURIComponent(this.REDIRECT_URI) +
      '&scope=' + encodeURIComponent(this.scopes.join(' ')) +
      '&response_type=token');
  };

  render() {
    return (
      <FunctionButton onClicked={this.loginClicked} label='Log in'/>
    );
  }
}

export default connect(mapStateToProps,{ addArtist, inputChange, searchArtist})(Login);

function mapStateToProps (state) {
  return {
  }
}
