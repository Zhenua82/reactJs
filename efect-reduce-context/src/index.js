import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import App from './App(context)';
import { IsLoggedInContextProvider } from './context/isLoggedIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App /> //Это для App.js
    <IsLoggedInContextProvider> {/* Это для App(contex).js */}
        <App />
    </IsLoggedInContextProvider>
);