import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import App, { Dop } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// ReactDOM.render(
//     // <App />, document.getElementById('root')
//     // <App />, document.getElementsByTagName('body')[0]
//     <App />, document.querySelector('#root')
// );
// ReactDOM.render(<Dop />, document.getElementById('test'));