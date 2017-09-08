import React from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { bindActionCreators } from 'redux';

import Login from '../containers/Login';
import Artist from '../components/Artist';
import Poster from '../components/Poster';
import FunctionButton from '../components/FunctionButton';
import ArtistInput from '../components/ArtistInput';
// import { addArtist, inputChange , searchArtist} from '../actions/artistActions';

import * as ArtistActionCreators from '../actions/artistActions';
import {loginChange} from "../actions/artistActions";

class Layout extends React.Component {

  constructor(props) {
    console.log('Layout: props %o', props);
    super(props);
    this.ArtistItems = [];
    this.ArtistPosters = [];
    this.handleInputChanged = this.handleInputChanged.bind(this);
    this.searchClicked = this.searchClicked.bind(this);
    this.buildArtistPosters = this.buildArtistPosters.bind(this);
  }

  componentWillMount() {
    this.ArtistItems = this.props.Artists.map(function (artist, index) {
      return (
        <Artist
          key={index}
          name={artist.name}
          popularity={artist.popularity}
        />
      );
    });
    this.ArtistPosters = this.props.Artists.map(function (poster, index) {
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

  buildArtistPosters() {
    console.log('Layout:buildArtistPosters');

    return this.props.Artists.map(function(poster, index) {
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

  handleInputChanged(e) {
    console.log('Layout:handleInputChanged %o', e.target.value);

    const { actions: { inputChange }} = this.props;
    inputChange(e.target.value);
  }

  addClicked(){
    addArtist({title:this.props.inputValue , year: '2017'});
  }

  searchClicked(){
    const { actions: { searchArtist }} = this.props;
    searchArtist(this.props.inputValue);
  }

  render() {

    console.log('Layout:render inputValue %o', this.props.inputValue);
    console.log('Layout:render Artists %o', this.props.Artists);

    const expires = new Date(localStorage.getItem('FavouriteBands.expires'));
    const now = new Date();
    loginChange(now <= expires);

    return this.props.loggedIn ? (
      <div>
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
            <div class="mdl-grid">{this.buildArtistPosters()}</div>
          </TabPanel>
        </Tabs>
      </div>
    ) : (
      <Login/>
    );
  }
}

function mapStateToProps (state) {
  return {
    Artists: state.Artists,
    inputValue: state.inputValue,
    error: state.error,
    loggedIn: state.loggedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {...ArtistActionCreators},
      dispatch
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
