// import React from 'react';

// function Perechen(props) {
//   if(props.addZad.length > 4){
//     throw new Error('Передана ошибка!')
//   }
//   return (
//     <div>
//         {props.addZad.map((item, index) => (
//           <div key={index}>{item}</div>
//         ))}
//     </div>   
//   );
// }

// export default Perechen;

//Классовый компонент для работы с ошибками (c функциональными компонентами ErrorBoundary не работает):
import React, { Component } from 'react';

class Perechen extends Component {
  render() {
    if (this.props.addZad.length > 4) {
      throw new Error('Передана ошибка!');
    }
    return (
      <div>
        {this.props.addZad.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    );
  }
}

export default Perechen;