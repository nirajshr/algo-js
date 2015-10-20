const React = require('react')
,     ReactDOM = require('react-dom');

var AlgoApp = require('./components/AlgoApp.js');

ReactDOM.render(
  React.createElement(AlgoApp), 
  document.getElementById('app') );
  
