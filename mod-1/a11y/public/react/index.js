import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime'
import {HashRouter} from 'react-router-dom';

import {App} from './components/App';


//Anything inside our <HashRouter> will be route-sensitive
ReactDOM.render(
	<HashRouter> 
		<App /> 
	</ HashRouter >,
	document.getElementById('root')
)