import React from 'react';

function ArtistInput(props) {
  return (
    <form style={{'display': 'inline'}} action="#">
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" type="text" id="artistInput"
          value={props.inputValue} onChange={props.inputChange}/>
        <label className="mdl-textfield__label" for="artistInput">Artist Name</label>
      </div>
    </form>);
}

export default ArtistInput;
