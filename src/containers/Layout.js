import React from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Login from '../containers/Login';
import Artist from '../components/Artist';
import Poster from '../components/Poster';
import FunctionButton from '../components/FunctionButton';
import ArtistInput from '../components/ArtistInput';

import * as ArtistActionCreators from '../actions/artistActions';

class Layout extends React.Component {
  constructor(props) {
    // eslint-disable-next-line no-console
    console.log('Layout: props %o', props);
    super(props);
    this.handleInputChanged = this.handleInputChanged.bind(this);
    this.searchClicked = this.searchClicked.bind(this);
    this.buildArtistPosters = this.buildArtistPosters.bind(this);
    this.buildTopPosters = this.buildTopPosters.bind(this);
    this.sliderChange - this.sliderChange.bind(this);
  }

  componentWillMount() {
    const { actions: { loginChange }} = this.props;
    const expires = new Date(localStorage.getItem('FavouriteBands.expires'));
    const now = new Date();
    loginChange(now <= expires);
  }

  buildArtistPosters() {
    return this.props.Artists.map((poster, index) => {
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

  buildArtistItems() {
    return this.props.Artists.map((artist, index) => {
      return (
        <Artist
          key={index}
          name={artist.name}
          popularity={artist.popularity}
        />
      );
    });
  }

  buildTopPosters() {
    return this.props.top.map((poster, index) => {
      return (
        <Poster
          key={index}
          name={poster.name}
          popularity={poster.popularity}
          poster={poster.images[0].url}
        />
      );
    });
  }

  handleInputChanged(e) {
    // eslint-disable-next-line no-console
    console.log('Layout:handleInputChanged %o', e.target.value);

    const { actions: { inputChange }} = this.props;
    inputChange(e.target.value);
  }

  // addClicked() {
  //   addArtist({title: this.props.inputValue , year: '2017'});
  // }

  searchClicked() {
    const { actions: { searchArtist }} = this.props;
    searchArtist(this.props.inputValue);
  }

  sliderChange(e) {
    const { actions: { searchTop }} = this.props;
    searchTop('tracks');
  }

  render() {
    return this.props.loggedIn ? (
      <div>
        <ArtistInput
          inputValue={this.props.inputValue}
          inputChange={this.handleInputChanged}
        />
        {/* <FunctionButton onClicked={this.addClicked} label='Add'/>*/}
        <FunctionButton onClicked={this.searchClicked} label="Search"/>
        <span> {this.props.error} </span>

        <Tabs defaultIndex={1} onSelect={(index) => {
          if (index === 2) {
            const { actions: { searchTop }} = this.props;
            searchTop(20);
          }
        }}>
          <TabList>
            <Tab>List View</Tab>
            <Tab>Photo View</Tab>
            <Tab>Top View</Tab>
          </TabList>

          <TabPanel>
            <ul className="demo-list-item mdl-list">
              {this.buildArtistItems()}
            </ul>
          </TabPanel>
          <TabPanel>
            <div className="mdl-grid">{this.buildArtistPosters()}</div>
          </TabPanel>
          <TabPanel>
            <input className="mdl-slider mdl-js-slider" type="range"
              min="1" max="50" value="this.props.sliderValue" onChange={(e) => {
                const { actions: { searchTop }} = this.props;
                searchTop(e.target.value);
              }}/>
            <div className="mdl-grid">{this.buildTopPosters()}</div>
          </TabPanel>
        </Tabs>
      </div>
    ) : (
      <Login/>
    );
  }
}

function mapStateToProps(state) {
  return {
    Artists: state.Artists,
    error: state.error,
    inputValue: state.inputValue,
    loggedIn: state.loggedIn,
    top: state.top,
    sliderValue: state.sliderValue,
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

Layout.propTypes = {
  Artists: PropTypes.array,
  actions: PropTypes.object,
  error: PropTypes.string,
  inputValue: PropTypes.string,
  loggedIn: PropTypes.bool,
  sliderValue: PropTypes.number,
  top: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
