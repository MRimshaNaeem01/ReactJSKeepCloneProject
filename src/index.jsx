import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
// import './Hook.css';
// import './Accordian.css';
import store from './store';
import App from './App';
import { Provider } from 'react-redux';


store.subscribe(()=>console.log(store.getState()));
ReactDOM.render(
<React.StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// const fullname=[1,'rimsha']
// const biodata=[3,'female',...fullname]
// console.log(fullname)
// console.log(biodata)

// var shuttergame=['call of duty','far cry','nanana']
// var racinggame=['cneed for speed','angry bird','byeueue']
// var games=[...shuttergame,...racinggame];
// console.log(games)