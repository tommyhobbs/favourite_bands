import React from 'react';

function Movie(props){
    return <li class="mdl-list__item">
        <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-icon">movie</i>
            {props.title} ({props.year})
        </span>
    </li>
}

export default Movie;