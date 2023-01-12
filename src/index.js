import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList'
import './index.css';

// This is where all of the information is stored for your app
const toDos = ["Listen to Hot Mulligan", "Drink hot cocoa", "Eat hot cheetos"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)

