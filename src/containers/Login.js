import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'react-tabs/style/react-tabs.css';

import FunctionButton from '../components/FunctionButton';
import { addArtist, inputChange , searchArtist} from '../actions/artistActions';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.CLIENT_ID = '243b3ba29bd44d0dbf1f70d1a82ebc20';
    this.REDIRECT_URI = 'http://localhost:8081/callback.html';
    this.scopes = [];
    this.handleMessage = this.handleMessage.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  componentWillMount(){

  }

  componentDidMount(){
    window.addEventListener('message', this.handleMessage);
  }

  handleMessage(e) {
    console.log(e);
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
