import React from 'react';
import { connect } from 'react-redux';

import Movie from '../components/Movie';
import AddButton from '../components/AddButton';
import MovieInput from '../components/MovieInput';
import { addMovie, inputChange } from '../actions/movieActions';

function mapStateToProps (state) {
    return {
        Movies: state.Movies,
        inputValue: state.inputValue
    }
}

function Layout({Movies, inputValue, addMovie,inputChange}) {

    const MovieItems = [];

    const handleInputChanged = function(e){
        inputChange(e.target.value);
    }

    const addClicked = function(){
      addMovie({title:inputValue , year: '2017'});
    };

    Movies.map(function(movie) {
        MovieItems.push(<Movie title={movie.title} year={movie.year}/>);
    });

    return (
    <div>
        <MovieInput inputValue={inputValue} inputChange={handleInputChanged} />
        <AddButton addClicked={addClicked} />
        <span> {inputValue} </span>
        <ul>{MovieItems}</ul>
    </div>
    );
}

export default connect(mapStateToProps,{ addMovie, inputChange})(Layout);