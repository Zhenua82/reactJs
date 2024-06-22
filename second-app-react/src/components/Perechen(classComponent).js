import React from 'react';

function Perechen(props) {
  return (
    <div>
      {props.addZad.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default Perechen;