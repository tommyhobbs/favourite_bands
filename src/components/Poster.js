import React from 'react';

function Poster(props){
    const posterStyle = {
        'width': '256px',
        'height': '256px',
        'background': 'url('+props.poster+') center / cover'
    };
    const textStyle = {
        'color': '#fff',
        'font-size':'14px',
        'font-weight': 500
    };
    const style = {
        height: '52px',
        padding: '16px',
        background: 'rgba(0, 0, 0, 0.2)'
    };

    return <div class="demo-card-image mdl-card mdl-shadow--2dp" style={posterStyle}>
        <div class="mdl-card__title mdl-card--expand"></div>
        <div class="mdl-card__actions" style={style}>
            <span class="demo-card-image__filename" style={textStyle}>{props.name} ({props.popularity})</span>
        </div>
    </div>
}

export default Poster;