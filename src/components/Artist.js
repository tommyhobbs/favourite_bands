import React from 'react';

function Artist(props){
    return <li class="mdl-list__item">
        <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-icon">music_note</i>
            {props.name} ({props.popularity})
        </span>
    </li>
}

export default Artist;