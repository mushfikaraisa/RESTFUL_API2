import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime'
import {HashRouter as Router} from 'react-router-dom';

import {App} from './components/App';


//Anything inside our <HashRouter> will be route-sensitive
ReactDOM.render(
	<Router> 
		<App /> 
	</ Router >,
	document.getElementById('root')
)