import React from 'react';

function ArtistInput(props){
    return (
        <form style={{'display':'inline'}} action="#">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="text" id="sample1" value={props.inputValue} onChange={props.inputChange}></input>
                    <label class="mdl-textfield__label" for="sample1">Artist Name</label>
            </div>
        </form>)
    }

export default ArtistInput;