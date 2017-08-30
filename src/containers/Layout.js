import React from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Login from '../containers/Login';
import Artist from '../components/Artist';
import Poster from '../components/Poster';
import FunctionButton from '../components/FunctionButton';
import ArtistInput from '../components/ArtistInput';
import { addArtist, inputChange , searchArtist, setAccessToken} from '../actions/artistActions';

function mapStateToProps (state) {
    return {
        Artists: state.Artists,
        inputValue: state.inputValue,
        error: state.error,
        accessToken: state.accessToken,
    }
}

function Layout({accessToken, Artists, inputValue, error, addArtist, inputChange, searchArtist}) {

    const ArtistItems = [];
    const ArtistPosters = [];

    const handleInputChanged = function(e){
        inputChange(e.target.value);
    };

    const addClicked = function(){
        addArtist({title:inputValue , year: '2017'});
    };

    const searchClicked = function(){
        searchArtist(inputValue);
    };

    Artists.map(function(artist, index) {
        ArtistItems.push(
          <Artist
            key={index}
            name={artist.name}
            popularity={artist.popularity}
          />
        );
        ArtistPosters.push(
          <Poster
            key={index}
            name={artist.name}
            popularity={artist.popularity}
            poster={artist.poster}
          />
        );
    });


    const windowMessage = (e) => {
      console.log(e);
      if (typeof e.data === 'string') {
        const data = JSON.parse(e.data);
        if (data.hasOwnProperty('access_token')) {
          console.log(data.access_token);
          localStorage.setItem('FavouriteBands.accessToken', data.access_token);
        }
      }
    };

    return (
    <div>
      <div>
        <Login loggedIn={windowMessage}/>
      </div>
        <ArtistInput inputValue={inputValue} inputChange={handleInputChanged} />
        <FunctionButton onClicked={addClicked} label='Add'/>
        <FunctionButton onClicked={searchClicked} label='Search'/>
        <span> {error} </span>

        <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
            <TabList>
                <Tab>List View</Tab>
                <Tab>Photo View</Tab>
            </TabList>

            <TabPanel>
                <ul class="demo-list-item mdl-list">{ArtistItems}</ul>
            </TabPanel>
            <TabPanel>
                <div class="mdl-grid">{ArtistPosters}</div>
            </TabPanel>
        </Tabs>
    </div>
    );
}

export default connect(mapStateToProps,{ addArtist, inputChange, searchArtist, setAccessToken})(Layout);