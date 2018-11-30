import React from 'react';

const UserOutput = (props) => {
    const style = {
      border: '1px solid #000000',
      margin: '10px auto'
    }
    return (
      <div style={style}>
        <p>{props.userName}</p>
        <p>{props.userAge}</p>
      </div>
    );
  }

export default UserOutput;
