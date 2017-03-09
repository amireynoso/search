import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';

window.addEventListener('load', () => {
    ReactDOM.render(<Routes />, document.getElementById('app'));
});