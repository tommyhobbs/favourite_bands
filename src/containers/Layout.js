import React from 'react';
import { connect } from 'react-redux';

import Movie from '../components/Movie';
// import addMovieAction from '../actions/movieActions';

function mapStateToProps (state) {
    return {
        Movies: state.Movies
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addMovie: (movie) => dispatch({
            type: 'ADD_MOVIE',
            payload: movie
        })
    }
}

function Layout({Movies,addMovie}) {

    const MovieItems = [];

    var addClicked = function(){
      addMovie({title:'Example', year: '2017'});
    };

    for (let i=0; i<Movies.length; i++){
        MovieItems.push(<Movie title={Movies[i].title} year={Movies[i].year}/>);
    }

    return (
    <div>
        <button onClick={addClicked}> Add </button>
        <ul>{MovieItems}</ul>
    </div>
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout);