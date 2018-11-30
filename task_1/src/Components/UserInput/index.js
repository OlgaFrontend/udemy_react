import React from 'react';

const UserInput = (props) => {
    return (
      <div className="App">
        <input
          onChange={props.changed}
          type="text"
          value={props.currentName}/>
      </div>
    );
  }

export default UserInput;

