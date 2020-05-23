import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Board from './components/Board';
import './index.css';
// ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,  
//   document.getElementById('root')
// );
ReactDOM.render(
  <Board/>,
  document.getElementById('root')
)

serviceWorker.unregister();
