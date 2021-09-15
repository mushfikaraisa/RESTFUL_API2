import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime'

import  { App } from './components/App';

ReactDOM.render(
	< App />, //glue this 
	document.getElementById('root') //to this
);