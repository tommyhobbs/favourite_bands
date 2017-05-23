import React from 'react';
import { connect } from 'react-redux';

import Artist from '../components/Artist';
import Poster from '../components/Poster';
import FunctionButton from '../components/FunctionButton';
import ArtistInput from '../components/ArtistInput';
import { addArtist, inputChange , searchArtist} from '../actions/artistActions';

function mapStateToProps (state) {
    return {
        Artists: state.Artists,
        inputValue: state.inputValue,
        error: state.error
    }
}

function Layout({Artists, inputValue, error, addArtist, inputChange, searchArtist}) {

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

    Artists.map(function(artist) {
        ArtistItems.push(<Artist name={artist.name} popularity={artist.popularity}/>);
        ArtistPosters.push(<Poster name={artist.name} popularity={artist.popularity} poster={artist.poster}/>);
    });

    return (
    <div>
        <ArtistInput inputValue={inputValue} inputChange={handleInputChanged} />
        <FunctionButton onClicked={addClicked} label='Add'/>
        <FunctionButton onClicked={searchClicked} label='Search'/>
        <span> {error} </span>
        {/*<ul class="demo-list-item mdl-list">{ArtistItems}</ul>*/}
        <div class="mdl-grid">{ArtistPosters}</div>
    </div>
    );
}

export default connect(mapStateToProps,{ addArtist, inputChange, searchArtist})(Layout);