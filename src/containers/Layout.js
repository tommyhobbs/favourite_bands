import React from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Login from '../containers/Login';
import Artist from '../components/Artist';
import Poster from '../components/Poster';
import FunctionButton from '../components/FunctionButton';
import ArtistInput from '../components/ArtistInput';
import { addArtist, inputChange , searchArtist} from '../actions/artistActions';

class Layout extends React.Component {

  constructor(props){
    super(props);
    this.ArtistItems = [];
    this.ArtistPosters = [];
  }

  handleInputChanged(e){
    inputChange(e.target.value);
  };

  addClicked(){
    addArtist({title:inputValue , year: '2017'});
  };

  searchClicked(){
    searchArtist(inputValue);
  };

  windowMessage = (e) => {
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
    }
  };

  componentWillMount(){
    this.ArtistItems = this.props.Artists.map(function(artist, index) {
      return (
        <Artist
          key={index}
          name={artist.name}
          popularity={artist.popularity}
        />
      );
    });
    this.ArtistPosters = this.props.Artists.map(function(poster, index) {
      return (
        <Poster
          key={index}
          name={poster.name}
          popularity={poster.popularity}
          poster={poster.poster}
        />
      );
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <Login loggedIn={this.windowMessage}/>
        </div>
        <ArtistInput inputValue={this.props.inputValue} inputChange={this.handleInputChanged}/>
        {/*<FunctionButton onClicked={this.addClicked} label='Add'/>*/}
        <FunctionButton onClicked={this.searchClicked} label='Search'/>
        <span> {this.props.error} </span>

        <Tabs defaultIndex={1}>
          <TabList>
            <Tab>List View</Tab>
            <Tab>Photo View</Tab>
          </TabList>

          <TabPanel>
            <ul class="demo-list-item mdl-list">{this.ArtistItems}</ul>
          </TabPanel>
          <TabPanel>
            <div class="mdl-grid">{this.ArtistPosters}</div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default connect(mapStateToProps,{ addArtist, inputChange, searchArtist})(Layout);

function mapStateToProps (state) {
  return {
    Artists: state.Artists,
    inputValue: state.inputValue,
    error: state.error,
    accessToken: state.accessToken,
  }
}
