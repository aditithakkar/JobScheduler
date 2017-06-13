import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App.js';
import {Oops404} from './components/Oops404.js';
import { AddEntry } from './components/AddEntry.js' 
import {Router, Route, hashHistory} from 'react-router';


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="*" component={Oops404}/>
	</Router>, document.getElementById('applications'));