import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import './App.css';
import './style/style.css';	
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/header';
import Footer from './footer/footer';

import Problem from './components/problem/Problem'; 
import Main from './components/Main';
import MainArray from './components/array/MainArray';
import MainStack from './components/stack/MainStack';
import MainQueue from './components/queue/MainQueue';
import MainTrees from './components/trees/MainTrees';
import MainGraphs from './components/graph/MainGraph';
import MainLinkedList from './components/linkedlist/MainLinkedList';
import MainSearching from './components/searching/MainSearching';
import MainSorting from './components/sorting/MainSorting';
import MainHashTable from './components/hashtable/MainHashTable';
import MainMiscellaneous from './components/miscellaneous/MainMiscellaneous';
class App extends Component {
	
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<div>
						<Header />
						<div className="container">
							<Route path="/" exact component={ Main }/>
							<Route path="/array" exact component={ MainArray } />
							<Route path="/stack" exact component={ MainStack } />
							<Route path="/queue" exact  component={ MainQueue } />
							<Route path="/linkedlist" exact component={ MainLinkedList } />
							<Route path="/trees" exact component={ MainTrees} />
							<Route path="/graph" exact component={ MainGraphs } />
							<Route path="/sorting" exact component={ MainSorting } />
							<Route path="/searching" exact component={ MainSearching } />
							<Route path="/hashtable" exact component={ MainHashTable } />
							<Route path="/miscellaneous" exact component={ MainMiscellaneous } />
							<Route path="/problem/:type/:problem" exact component={ Problem } />
						</div>
						<Footer />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
