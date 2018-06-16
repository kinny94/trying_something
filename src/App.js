import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/header';

import Main from './components/main';
import MainArray from './components/array/main';
import MainStack from './components/stack/main';
import MainQueue from './components/queue/main';
import MainTrees from './components/trees/main';
import MainGraphs from './components/graph/main';
import MinLinkedList from './components/linkedlist/main';
import MainSearching from './components/searching/main';
import MainSorting from './components/sorting/main';
import MainLinkedList from './components/linkedlist/main';

class App extends Component {
	
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Header />
					<div className="container">
						<Route path="/" exact component={ Main }/>
						<Route path="/array" exact component={ MainArray } />
						<Route path="/stack" exact component={ MainStack } />
						<Route path="/queue" exact  component={ MainQueue } />
						<Route path="/linkedlist" exact component={ MainLinkedList } />
						<Route path="/trees" exact component={ MainTrees} />
						<Route path="/graphs" exact component={ MainGraphs } />
						<Route path="/sorting" exact component={ MainSorting } />
						<Route path="/searching" exact component={ MainSearching } />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
