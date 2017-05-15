import React from 'react';
import Movie from '../components/Movie';

function Layout() {
    const Movies = [
        { title: 'Toy Story', year: 1995},
        { title: 'Die Hard', year: 1988},
        { title: 'Aliens', year: 1986},
    ];

    const MovieItems = [];

    for (let i=0; i<Movies.length; i++){
        MovieItems.push(<Movie title={Movies[i].title} year={Movies[i].year}/>);
    }

    return <ul>{MovieItems}</ul>;
}

export default Layout;