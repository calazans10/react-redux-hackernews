import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App stories={store.getState().storyState} onArchive={() => {}} />,
  document.getElementById('root')
);
registerServiceWorker();
